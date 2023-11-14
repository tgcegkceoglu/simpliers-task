import React, { useEffect, useState, useRef } from "react";
import { useChat } from "../context/chatContext";

function Chat({ socket }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const { user, room } = useChat();
  const dummy = [
    {
      room: "fgfdv45f",
      author: user,
      message: "selam",
      time: "09:50",
    },
    {
      room: "fgfdv45f",
      author: "volkan",
      message: "selam",
      time: "09:52",
    },
    {
      room: "fgfdv45f",
      author: user,
      message: "nasılsın",
      time: "09:55",
    },
    {
      room: "fgfdv45f",
      author: "volkan",
      message: "iyi sen",
      time: "10:00",
    },
    {
      room: "fgfdv45f",
      author: user,
      message: "iyi",
      time: "10:10",
    },
  ];
  const [messageList, setMessageList] = useState(dummy); 

  const messagesEndRef = useRef(null); 

  /// Mesaj atıldığı zaman scroll en aşağı inmesini sağlıyoruz
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  /// messageData oluşturuyoruz. 
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: user,
        message: currentMessage,
        time: new Intl.DateTimeFormat("tr", { /// 09:05 şeklinde olması içn formatlıyoruz.
          hour: "2-digit",
          minute: "2-digit",
        }).format(Date.now()),
      };

      setCurrentMessage(""); /// Mesaj gönderildikten sonra inputu temizliyoruz.
      setMessageList((list) => [...list, messageData]); 
      await socket.emit("send_message", messageData); /// "send_message" olayını tetiklyoruz ve verileri sunucuya iletiyoruz
    }
  };

  /// Kullanıcının enter tuşuyla mesaj gönderebilmesini sağlıyoruz.
  const handleKeyDown = (event) => {
    if (event.key === "Enter") { 
      sendMessage();
    }
  };

  /// İlk açıldığında scroll en aşağıda olmasını sağlıyor
  useEffect(() => {
    scrollToBottom(); 
  }, []);

  /// Mesaj gönderildiğinde scroll en aşağıda olması sağlanıyor
  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  ///
  useEffect(() => {
    socket.on("receive_message", (data) => { /// "receive_message" olayını dinleyerek diğer kullanıcıdan gelen mesajları messagelist ekliyoruz.
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <>
      <div
        id="chat"
        className="w-full h-screen flex flex-col justify-between bg-grey sm:px-10 py-4 px-5"
      >
        <div className="overflow-y-auto flex-grow pr-2">
          {messageList.map((messageContent, index) => {
            const isCurrentUserAuthor = user === messageContent.author;
            return (
              <div key={index}>
                <div
                  className={`flex ${
                    isCurrentUserAuthor ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex flex-col ">
                    <div className="max-w-sm break-words">
                      <p
                        className={`px-4 py-3 rounded-md text-sm ${
                          isCurrentUserAuthor
                            ? "bg-purple text-white"
                            : "bg-gray-300"
                        }`}
                      >
                        {messageContent.message}
                      </p>
                      <div className="flex justify-between items-center gap-5 pt-1 pb-5 text-xs text-white">
                        <p>{messageContent.author}</p>
                        <p className="text-[10px]">{messageContent.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="scroll" ref={messagesEndRef}></div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Mesajınızı buraya yazın..."
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage}>Gönder</button>
        </div>
      </div>
    </>
  );
}

export default Chat;
