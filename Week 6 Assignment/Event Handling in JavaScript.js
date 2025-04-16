// Add event listener for form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Form validation
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);
  
    if (!name) {
      alert('Please enter your name.');
      return;
    }
  
    if (isNaN(age) || age <= 0) {
      alert('Please enter a valid age.');
      return;
    }
  
    // Display a message
    const messageElement = document.getElementById('message');
    messageElement.textContent = `Hello, ${name}! You are ${age} years old.`;
  });
  
  // Add interactive element: toggle message visibility
  document.getElementById('toggleButton').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    if (messageElement.style.display === 'none') {
      messageElement.style.display = 'block';
    } else {
      messageElement.style.display = 'none';
    }
  });