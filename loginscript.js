
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      var password = document.getElementById("password").value;
      var errorMessage = document.getElementById("errorMessage");

      if (password === "1234") {
        window.location.href = "./main.html"; // Redirect to the second page
      } else {
        errorMessage.textContent = "Jaa! Pswd leke aa";
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (navigator.vibrate) {
          navigator.vibrate(100); // Vibrate for 500 milliseconds
        }
      }
    });
  