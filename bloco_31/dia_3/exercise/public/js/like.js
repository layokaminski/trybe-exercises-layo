const socket = window.io();

document.querySelector('#likeIcon').addEventListener('click', () => {
  socket.emit('likePost');
});
