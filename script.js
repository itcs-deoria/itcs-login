// script.js

// Aapka Google Sheets ID aur API Key
const SHEET_ID = '1sAKb1RF6OkPy5yY833XWMhHKVDNSGPX4W7yTJkW3Kcw'; // Apne Sheet ID ko yahan paste karein
const API_KEY = 'AIzaSyA9784FRryzRhExsg70586J_Zbx7qlB_HY'; // Apni API key ko yahan paste karein

// Google Sheets API URL
const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`;

// Login Validation Function
async function validateLogin() {
  // User inputs
  const studentId = document.getElementById('studentId').value;
  const password = document.getElementById('password').value;
  const messageElement = document.getElementById('message');

  try {
    // Google Sheets se data fetch karna
    const response = await fetch(API_URL);
    const data = await response.json();

    // Check if data exists aur parse karein
    if (data && data.values) {
      const rows = data.values;
      
      // First row ko skip karein kyunki wo headers hai
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
