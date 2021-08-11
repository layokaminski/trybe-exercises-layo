const socket = window.io();

const form = document.querySelector('form');
const inputMessage = document.querySelector('#messageInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('clientMessage', inputMessage.value);
  inputMessage.value = '';
  return false;
});

const createMessage = (message, id) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = `${id}: ${message}`;
  messagesUl.appendChild(li);
};

socket.on('serverMessage', (message, id) => createMessage(message, id));

window.onbeforeunload = function(event) {
  socket.disconnect();
};
