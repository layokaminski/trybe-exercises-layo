module.exports = (io) => io.on('connection', (socket) => {
  let likes = 0;

  socket.on('likePost', () => {
    likes += 1;
  });
});
