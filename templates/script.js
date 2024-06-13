let dropZone = document.getElementById("dropZone");
let fileInput = document.getElementById("fileInput");
let uploadForm = document.getElementById("uploadForm");

// List of valid image MIME types
const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/webp"];

dropZone.addEventListener("click", function () {
  console.log("Drop zone clicked");
  fileInput.click();
});

fileInput.addEventListener("change", function () {
  console.log("File input changed");
  if (fileInput.files.length > 0) {
    let file = fileInput.files[0];
    console.log("Selected file type:", file.type);
    if (validImageTypes.includes(file.type)) {
      console.log("Valid image file, submitting form");
      uploadForm.submit();
    } else {
      showAlert("Please upload a valid image file.");
      fileInput.value = ""; // Clear the file input
    }
  }
});

dropZone.addEventListener("dragover", function (e) {
  e.preventDefault();
  e.stopPropagation();
  console.log("Drag over event");
  this.classList.add("dragover");
});

dropZone.addEventListener("dragleave", function (e) {
  e.preventDefault();
  e.stopPropagation();
  console.log("Drag leave event");
  this.classList.remove("dragover");
});

dropZone.addEventListener("drop", function (e) {
  e.preventDefault();
  e.stopPropagation();
  console.log("Drop event");
  this.classList.remove("dragover");

  let file = e.dataTransfer.files[0];
  console.log("Dropped file type:", file.type);
  if (validImageTypes.includes(file.type)) {
    fileInput.files = e.dataTransfer.files;
    console.log("Valid image file, submitting form");
    uploadForm.submit();
  } else {
    showAlert("Please upload a valid image file.");
  }
});

// Function to show alert messages
function showAlert(message) {
  let alertBox = document.getElementById('alertBox');
  alertBox.innerHTML = message;
  alertBox.style.display = 'block';
  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 3000); // Hide after 3 seconds
}
