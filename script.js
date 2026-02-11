const happyColours = [
  "#ffccd5", // pink
  "#ffe5b4", // peach
  "#fff1a8", // yellow
  "#d7f5e9", // mint
  "#e0d7ff", // lavender
  "#cce7ff"  // blue
];

// Pick random background colour
const randomColour =
  happyColours[Math.floor(Math.random() * happyColours.length)];

document.body.style.backgroundColor = randomColour;

async function loadCompliment() {
  try {
    const response = await fetch("compliments.txt");
    const text = await response.text();

    const compliments = text
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);

    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById("compliment").textContent =
      compliments[randomIndex];
  } catch (error) {
    document.getElementById("compliment").textContent =
      "You're awesome (even when things go wrong) 💖";
    console.error(error);
  }
}

loadCompliment();
