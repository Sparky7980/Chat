// Load messages from localStorage
window.onload = function() {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  const messagesDiv = document.getElementById('messages');
  messages.forEach((msg) => {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = msg;
    messagesDiv.appendChild(msgDiv);
  });
};

// Function to send a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  
  if (message) {
    // Get messages from localStorage
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    
    // Add new message to the array
    messages.push(message);
    
    // Save updated messages to localStorage
    localStorage.setItem('messages', JSON.stringify(messages));
    
    // Append message to the screen
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    
    // Clear the input field
    messageInput.value = '';
    
    // Scroll to the bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}
