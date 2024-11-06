
const Mo="6J_Zbx7qlB_HY";
const sync = '1sAKb1RF6OkPy5yY833XWMhHKVDNSGPX4W7yTJkW3Kcw';  
const u="yzRhExsg7058";	
const se="AIzaSyA9784FRr"; 
const awa = `${se}${u}${Mo}`;
const syn = `https://sheets.googleapis.com/v4/spreadsheets/${sync}/values/Sheet1?key=${awa}`;
async function validateLogin() {
  // User inputs
  const studentId = document.getElementById('studentId').value;
  const password = document.getElementById('password').value;
  const messageElement = document.getElementById('message');

  try {
    
    const response = await fetch(syn);
    const data = await response.json();

    
    if (data && data.values) {
      const rows = data.values;
      
    
      const found = rows.some(row => row[0] === studentId && row[1] === password);

      if (found) {
        messageElement.textContent = 'Login Successful!';
        messageElement.style.color = 'green';
        
        // Redirect ya next page load karna (login successful hone par)
        setTimeout(() => {
          window.location.href = 'welcome.html'; // Login ke baad ye page open hoga
        }, 1000);
      } else {
        messageElement.textContent = 'Invalid Student ID or Password!';
        messageElement.style.color = 'red';
      }
    } else {
      messageElement.textContent = 'No data found in DataBase!';
      messageElement.style.color = 'red';
    }
  } catch (error) {
    console.error('Error:', error);
    messageElement.textContent = 'Error connecting to Server!';
    messageElement.style.color = 'red';
  }
}
