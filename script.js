const happyColours = [
  "#fab4c1", // pink
  "#fcdea2", // peach
  "#fff28a", // yellow
  "#b8f2da", // mint
  "#c8b8ff", // lavender
  "#b3dcfc"  // blue
];

// Pick random background colour
const randomColour =
  happyColours[Math.floor(Math.random() * happyColours.length)];

document.body.style.backgroundColor = randomColour;

// Function to fit text to size of screen
function fitText() {
  const el = document.getElementById("compliment");
  let size = 80; // starting size in px
  el.style.fontSize = size + "px";

  while (el.scrollHeight > window.innerHeight * 0.9) {
    size--;
    el.style.fontSize = size + "px";
  }
}

// Function to retreive random compliment from compliments text file
async function loadCompliment() {
  try {
    const response = await fetch("compliments.txt");
    const text = await response.text();
    
    const compliments = text
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);

    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById("compliment").textContent = compliments[randomIndex];
    fitText();
    
  } 
  catch (error) {
    document.getElementById("compliment").textContent = "You're awesome (even when things go wrong) 💖";
    console.error(error);
  }
}

loadCompliment();
