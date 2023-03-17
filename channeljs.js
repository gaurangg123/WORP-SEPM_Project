// Get references to the buttons and the body element
const changeBgColorButton = document.getElementById('change-bg-color');
const renameChannelButton = document.getElementById('rename-channel');
const body = document.body;

// Add event listeners to the buttons
changeBgColorButton.addEventListener('click', changeBgColor);
renameChannelButton.addEventListener('click', renameChannel);

// Function to change the background color of the page
function changeBgColor() {
  const newColor = prompt('Enter a new background color:');
  body.style.backgroundColor = newColor;
}

// Function to rename the channel
function renameChannel() {
  const newChannelName = prompt('Enter a new channel name:');
  const channelNameElement = document.getElementById('channel-name');
  channelNameElement.textContent = newChannelName;
}
