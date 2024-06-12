// Get form and background-image elements
const form = document.querySelector('form');
const backgroundImage = document.querySelector('.background-image');
const downloadButton = document.querySelector('.download-btn');

// Add submit event listener to the form
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const groomName = document.getElementById('groom-name').value;
  const brideName = document.getElementById('bride-name').value;
  const weddingDate = document.getElementById('date').value;
  const weddingTime = document.getElementById('time').value;
  const weddingVenue = document.getElementById('venue').value;

  // Create invitation content
  const invitationContent = `
    
      <div class="invitation-container2">
        <table class="invitation-table" width="100%">
          <tr>
            <td colspan="2" style="text-align: center; font-size: 24px; font-weight: bold;">${brideName} and ${groomName}</td>
          </tr>
          <tr>
            <td colspan="2" style="text-align: center;">invite you to join their wedding celebration</td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td style="text-align: left;">&nbsp&nbsp&nbsp&nbsp Date&nbsp&nbsp:</td>
            <td style="text-align: left;">${weddingDate}</td>
          </tr>
          <tr>
            <td style="text-align: left;">&nbsp&nbsp&nbsp&nbsp Time&nbsp&nbsp:</td>
            <td style="text-align: left;">${weddingTime}</td>
          </tr>
          <tr>
            <td style="text-align: left;">&nbsp&nbsp&nbsp  Venue  :</td>
            <td style="text-align: left;">${weddingVenue}</td>
          </tr>
        </table>
      </div>
    
    
  `;

  // Clear existing content and append new invitation content
  backgroundImage.innerHTML = '';
  backgroundImage.insertAdjacentHTML('beforeend', invitationContent);

  // Create a download button
  const downloadButton = document.createElement('button');
  downloadButton.textContent = 'Download Invitation';
  downloadButton.classList.add('download-btn'); // Add the class name
  downloadButton.addEventListener('click', downloadInvitation);
  backgroundImage.appendChild(downloadButton);
});


// Function to download the invitation as an image
function downloadInvitation() {
  const invitationContainer = document.querySelector('.invitation-container2');
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Set canvas dimensions to match the invitation container
  const canvasWidth = invitationContainer.offsetWidth;
  const canvasHeight = invitationContainer.offsetHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Render the invitation container to the canvas
  html2canvas(invitationContainer, { scale: 2 }).then(function (canvas) {
    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.download = 'wedding-invitation.png';
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.click();
  });
}