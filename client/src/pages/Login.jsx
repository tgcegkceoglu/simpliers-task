import {useState, useEffect } from "react";
import {ToastContainer, toast } from "react-toastify";
import loginImage from "../assets/images/people-chat.png";
import FormComponent from "../components/form/Form";
import {useNavigate } from "react-router-dom";
import { useChat } from "../context/chatContext";
import "react-toastify/dist/ReactToastify.css";

function Login({ socket }) {
  const navigate = useNavigate();

  const [warning, setWarning] = useState([false, ""]);
  const [success, setSuccess] = useState(false);
  const {user,setUser, room, setRoom } = useChat();

  useEffect(() => {
    if (warning[0]) {
      toast.error(warning[1]);
    }
  
    if (success) {
      setRoom("fgfdv45f");
      localStorage.setItem('user',JSON.stringify(user))
    }
  }, [warning[0], success]);
  
  useEffect(() => {
    if (room) {
      socket.emit("join_room", room);
      navigate("/chat");
    }
  }, [room]);

  return (
    <div className="relative center bg-purple text-white grid grid-cols-1">
      <ToastContainer />
      <div className="absolute text-center">
        <h1 className="font-semibold sm:text-4xl text-2xl mb-7 opacity-0 animate-titleAnimation">
          Hoşgeldiniz
        </h1>
        <h2 className="sm:text-2xl text-xl mb-7 opacity-0 animate-subtitleAnimation animate-delay-[1s]">
          {" "}
          Sohbete katılmak için lütfen giriş yapınız.
        </h2>
      </div>

      <div className="absolute z-0 center grid grid-cols-1 md:grid-cols-2">
        <div className="flex opacity-0 animate-delay-[2.25s] animate-loginImageAnimation">
          <img src={loginImage} />
        </div>
        <div className="w-4/5 opacity-0 animate-delay-[2.25s] animate-loginAnimation">
          <FormComponent
            setUser={setUser}
            setWarning={setWarning}
            setSuccess={setSuccess}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
