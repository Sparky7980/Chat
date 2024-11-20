const API_URL = 'https://chat-6hr8oli1h-sparky7980s-projects.vercel.app/'; // Update with your Vercel URL
let userToken = localStorage.getItem('userToken');

window.onload = function() {
  if (userToken) {
    // If user is logged in, show the chat section
    document.getElementById('chat-section').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
  } else {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('chat-section').style.display = 'none';
  }
};

// Sign Up Function
function signupUser() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert('Sign-up successful!');
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('signup-form').style.display = 'none';
    })
    .catch((error) => console.error('Error:', error));
}

// Login Function
function loginUser() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem('userToken', data.token);
        userToken = data.token;
        document.getElementById('chat-section').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'none';
      }
    })
    .catch((error) => console.error('Error:', error));
}

// Send Message
function sendMessage() {
  const message = document.getElementById('message-input').value;
  // You can add the functionality to send the message to the server here
}
