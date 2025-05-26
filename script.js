let bytes = 0;
let autoClickerCount = 0;

const byteCountEl = document.getElementById("byte-count");
const clickBtn = document.getElementById("click-btn");
const autoClickerBtn = document.getElementById("auto-clicker-btn");

clickBtn.addEventListener("click", () => {
  bytes++;
  updateDisplay();
});

autoClickerBtn.addEventListener("click", () => {
  if (bytes >= 10) {
    bytes -= 10;
    autoClickerCount++;
    setInterval(() => {
      bytes += autoClickerCount;
      updateDisplay();
    }, 1000);
    autoClickerBtn.textContent = `Auto Clicker (${autoClickerCount})`;
    updateDisplay();
  } else {
    alert("You need 10 bytes to buy this!");
  }
});

function updateDisplay() {
  byteCountEl.textContent = bytes;
}
