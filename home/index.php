<?php
$expectedValue = "mySecureValue";
$hasCookie = isset($_COOKIE['myRestrictedCookie']) && $_COOKIE['myRestrictedCookie'] === $expectedValue;

if (!$hasCookie) {
    header("HTTP/1.1 403 Forbidden");
    header("Location: /403.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Portunus - Home</title>
  <meta name="description" content="Home Page">
  <meta name="keywords" content="Home">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/favicon.ico">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    .loader {
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-left: 4px solid #4CAF50;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      animation: spin 1s linear infinite;
      display: inline-block;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    
    h2 {
      text-align: center;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .form-group label, 
    .form-group input,
    .form-group .checkbox-label {
      display: block;
      margin: 0 auto;
      text-align: center;
    }
    
    .form-group input[type="checkbox"] {
      display: inline-block;
      margin-right: 5px;
    }
    
    .form-group .checkbox-label {
      display: inline-block;
      vertical-align: middle;
    }

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/images/banner.jpg'); /* Replace with your background image URL */
      background-size: cover;
      background-position: center;
      z-index: -1;
      transition: transform 0.1s ease-out;
    }
  </style>
</head>
<body>
  <div class="background" id="background"></div>
  <div class="container">
    <h1>Home</h1>
    <div>
        <body>Welcome to PortunusWeb!</body>
    </div>
    <div>
        <body>This page is coming soon, stay tuned!.</body>
    </div>
  </div>

  <script>
    document.addEventListener('mousemove', function(e) {
      const background = document.getElementById('background');
      const moveX = (e.clientX / window.innerWidth) * 30 - 15;
      const moveY = (e.clientY / window.innerHeight) * 30 - 15;
      background.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    });
  </script>  
</body>
</html>
