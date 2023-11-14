const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

// Express uygulamasına CORS middleware eklyoruz.
app.use(cors());

// Express üzerine bir HTTP sunucusu oluşturuyoruz.
const server = http.createServer(app);

// Socket.IO sunucu oluşturuyoruz ve gerekli CORS ayarlarını yapıyoruz.
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",  // İzin verilen origin adresi
    methods: ["GET", "POST"], // İzin verilen HTTP metotları
  },
});

// Yeni bir kullanıcı bağlandığında gerçekleşecek olayları yazıyoruz
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // 'join_room' olayına karşı dinleme yapılıyor ve yeni gelen kullanıcı belirtilen odaya katılımı gerçekleştiriliyor
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  // 'send_message' olayına karşı dinleme yapılıyor ve  gelen mesajı belirtilen odaya gönderme işlemi gerçekleştiriliyor
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

   // Eğer Kullanıcı bağlantısı koptuğunda gerçekleşecek olayları yazıyoruz
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

// HTTP sunucusu belirli bir port üzerinden dinlemeye başlıyor.
server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
