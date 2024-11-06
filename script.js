const videoElement = document.getElementById('webcam');
const captureButton = document.getElementById('captureButton');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Start the webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        videoElement.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing webcam:', error);
        alert('Error accessing webcam. Please ensure you have granted permission.');
    });

// Capture the photo
captureButton.addEventListener('click', () => {
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    alert('Photo captured!');
});
