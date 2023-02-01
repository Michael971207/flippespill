<html>
  <head>
    <script>
      function generateRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        document.getElementById("result").innerHTML = randomNumber;
      }
    </script>
  </head>
  <body>
    <h1>Random Number Generator</h1>
    <button onclick="generateRandomNumber()">Generate Random Number</button>
    <p id="result"></p>
  </body>
</html>
