const express = require('express');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const http = require('http');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Importando as rotas
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');

// Usando as rotas
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

// Inicializando o servidor WebSocket
io.on('connection', (socket) => {
  console.log('New user connected: ' + socket.id);

  socket.on('joinProject', (projectId) => {
    socket.join(projectId);
    console.log('User joined project: ' + projectId);
  });

  socket.on('sendMessage', (data) => {
    io.to(data.projectId).emit('newMessage', data.message);
  });
});

// Iniciando o servidor
server.listen(5000, () => {
  console.log('Server running on port 5000');
});
