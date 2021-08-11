const socket = window.io();

const currentLikes = document.querySelector('#currentLikes');

document.querySelector('#likeIcon').addEventListener('click', () => {
  socket.emit('likePost');
});

socket.on('updateLikes', (likes) => {
  console.log(currentLikes.value);
  console.log(likes);
  currentLikes.innerText = likes;
});
