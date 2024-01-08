document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.getElementById("buttons");
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    darkModeToggle.addEventListener("click", toggleDarkMode);
  
    buttons.addEventListener("click", function(event) {
      if (event.target.classList.contains("button")) {
        handleButtonClick(event.target.innerText);
      }
    });
  
    function handleButtonClick(value) {
      switch (value) {
        case "=":
          display.textContent = evaluateExpression(display.textContent);
          break;
        case "C":
          display.textContent = "0";
          break;
        default:
          display.textContent = appendToDisplay(display.textContent, value);
          break;
      }
    }
  
    function evaluateExpression(expression) {
      try {
        return eval(expression).toString();
      } catch (error) {
        return "Error";
      }
    }
  
    function appendToDisplay(currentValue, newValue) {
      if (currentValue === "0" || currentValue === "Error") {
        return newValue;
      } else {
        return currentValue + newValue;
      }
    }
  
    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }
  });
  