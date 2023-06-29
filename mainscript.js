
// Check if the user is authenticated before allowing access to the main page
var authenticated = sessionStorage.getItem("authenticated");
if (!authenticated) {
  window.location.href = "./login.html"; // Redirect to the login page if not authenticated
}

window.onload = function () {
  document.getElementById("input").focus();
};

const translationMap = {
  a: ["@52"],
  b: ["#12"],
  c: ["₹88"],
  d: ["&36"],
  e: ["@44"],
  f: ["#78"],
  g: ["₹23"],
  h: ["&99"],
  i: ["@66"],
  j: ["#31"],
  k: ["₹17"],
  l: ["&55"],
  m: ["@19"],
  n: ["#77"],
  o: ["₹48"],
  p: ["&61"],
  q: ["@73"],
  r: ["#25"],
  s: ["₹11"],
  t: ["&83"],
  u: ["@37"],
  v: ["#95"],
  w: ["₹69"],
  x: ["&42"],
  y: ["@80"],
  z: ["#28"],
  A: ["@52"],
  B: ["#12"],
  C: ["₹88"],
  D: ["&36"],
  E: ["@44"],
  F: ["#78"],
  G: ["₹23"],
  H: ["&99"],
  I: ["@66"],
  J: ["#31"],
  K: ["₹17"],
  L: ["&55"],
  M: ["@19"],
  N: ["#77"],
  O: ["₹48"],
  P: ["&61"],
  Q: ["@73"],
  R: ["#25"],
  S: ["₹11"],
  T: ["&83"],
  U: ["@37"],
  V: ["#95"],
  W: ["₹69"],
  X: ["&42"],
  Y: ["@80"],
  Z: ["#28"],
  " ": [" "],
  "|": ["|"],
};

function translateToSymbols() {
  const input = document.getElementById("input").value;
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (translationMap.hasOwnProperty(letter)) {
      const symbolArray = translationMap[letter];
      const translatedSymbol = symbolArray[Math.floor(Math.random() * symbolArray.length)];
      output += translatedSymbol;
    } else {
      output += letter;
    }

    if (letter === "\n") {
      output += "<br>"; // Add "<br>" tag for line breaks
    }
  }

  document.getElementById("output").innerHTML = output;
}

function translateToEnglish() {
  const input = document.getElementById("input").value;
  let output = "";
  let tempOutput = "";

  let i = 0;
  while (i < input.length) {
    const char = input[i];

    if (char === "@" || char === "#" || char === "₹" || char === "&") {
      const symbol = input.slice(i, i + 3);
      const translatedChar = getKeyByValue(translationMap, symbol);

      // Preserve the case of translated characters
      if (char === char.toLowerCase()) {
        tempOutput += translatedChar.toLowerCase();
      } else {
        tempOutput += translatedChar.toUpperCase();
      }

      i += 3;
    } else if (char === "<" && input.slice(i, i + 4) === "br>") {
      tempOutput += "\n"; // Store line breaks as newline characters
      i += 4;
    } else {
      tempOutput += char;
      i++;
    }
  }

  // Restore line breaks in the final output
  const tempLines = tempOutput.split("\n");
  output = tempLines.join("<br>");

  document.getElementById("output").innerHTML = output;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => {
    const symbolArray = object[key];
    return symbolArray.includes(value);
  });
}

function clearAll() {
  document.getElementById("input").value = "";
  document.getElementById("output").textContent = "";
}

function copyText() {
  const output = document.getElementById("output");
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = output.textContent;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextarea);

  const popup = document.getElementById("popup");
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 1500);
}
