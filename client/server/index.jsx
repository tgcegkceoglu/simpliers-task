const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

/// Express uygulamasına CORS middleware ekliyoruz.
app.use(cors());

// Express üzerine bir HTTP sunucusu oluşturuyoruz.
const server = http.createServer(app);

/// Socket.IO sunucusunu oluşturuyoruz ve CORS ayarlarını yapıyoruz
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

/// Yeni bir kullanıcı olduğunda gerçekleşecek olayları yazıyoruz.
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  /// join_room olayını dinliyoruz. Yeni gelen kullanıcıyı, belirtilen odaya katılımı gerçekleştiriyoruz.
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  /// send_message olayını dinliyoruz ve gelen esajı belirtilen odaya göndere şlemini yapıyoruz.
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  /// Eğer kullanıcı bağlantısı koporsa gerçekleşecek olayları yapıyoruz.
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

/// Burada http sunucusu belirli bir port üzerinden dinleme gerçekleştiriyor
server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
