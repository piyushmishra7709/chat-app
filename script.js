// Initialize the socket connection
const socket = io();

// Handle message submission
document.getElementById('sendMessage').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const usernameInput = document.getElementById('username');
    const message = messageInput.value;
    const username = usernameInput.value || 'Anonymous'; // Default to Anonymous if no username

    if (message.trim() !== '') {
        socket.emit('chat message', { message, username }); // Send message with username to server
        messageInput.value = ''; // Clear the input field
    }
});

// Listen for incoming messages and display them
socket.on('chat message', (data) => {
    const { message, username } = data;
    const item = document.createElement('li');
    item.textContent = `${username}: ${message}`;
    document.getElementById('messages').appendChild(item);
});
