document.addEventListener("DOMContentLoaded", () => {
  const copyright = document.getElementById("copyright");
  if (copyright) {
    const year = new Date().getFullYear();
    copyright.textContent = `Copyright © 2024–${year} The Notlanders AB. All rights reserved.`;
  }
});