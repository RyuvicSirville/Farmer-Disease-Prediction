const fs = require('fs');
const path = require('path');

// Define the file path where IDs will be stored
const filePath = path.join(__dirname, 'generated_ids.txt');

// Function to generate a unique positive integer ID
function generateUniqueId() {
  // Generate a unique positive integer using a combination of timestamp and random number
  const uniqueId = Date.now() + Math.floor(Math.random() * 10000);

  // Check if the ID already exists in the file
  if (!isIdInFile(uniqueId)) {
    // If the ID is unique, save it to the file
    saveIdToFile(uniqueId);
    return uniqueId;
  } else {
    // If the ID already exists, recursively generate a new one
    return generateUniqueId();
  }
}

// Function to check if an ID already exists in the file
function isIdInFile(id) {
  // Read the file content
  const fileContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';

  // Convert file content into an array of integers
  const existingIds = fileContent.split('\n').map(Number).filter(Boolean);

  // Check if the ID is in the array
  return existingIds.includes(id);
}

// Function to save the generated ID to a file
function saveIdToFile(id) {
  // Append the ID to the file
  fs.appendFile(filePath, `${id}\n`, (err) => {
    if (err) {
      console.error('Error writing to file', err);
    } else {
      console.log('ID saved:', id);
    }
  });
}

module.exports=generateUniqueId;
// Example usage

