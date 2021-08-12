let likes = 0;

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('likePost', () => {
    likes += 1;
    io.emit('updateLikes', likes);
  });
});
