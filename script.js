function downloadCV() {
  alert("Your CV is downloading...");
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = 'CV.pdf'; // Replace with your actual CV file path
  link.download = 'My_CV.pdf'; // Optional: rename the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
