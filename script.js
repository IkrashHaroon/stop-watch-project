    let timer = null;
    let seconds = 0;
    let isRunning = false;

    function updateDisplay() {
      let hrs = Math.floor(seconds / 3600);
      let mins = Math.floor((seconds % 3600) / 60);
      let secs = seconds % 60;

      document.getElementById("display").innerText =
        String(hrs).padStart(2, "0") + ":" +
        String(mins).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");
    }

    function startPause() {
      const btn = document.getElementById("startBtn");

      if (!isRunning) {
        timer = setInterval(() => {
          seconds++;
          updateDisplay();
        }, 1000);

        btn.innerText = "Pause";
        btn.classList.replace("bg-green-500", "bg-yellow-500");
        btn.classList.replace("hover:bg-green-600", "hover:bg-yellow-600");
        isRunning = true;
      } else {
        clearInterval(timer);
        btn.innerText = "Start";
        btn.classList.replace("bg-yellow-500", "bg-green-500");
        btn.classList.replace("hover:bg-yellow-600", "hover:bg-green-600");
        isRunning = false;
      }
    }

    function resetWatch() {
      clearInterval(timer);
      seconds = 0;
      isRunning = false;
      updateDisplay();

      const btn = document.getElementById("startBtn");
      btn.innerText = "Start";
      btn.classList.remove("bg-yellow-500", "hover:bg-yellow-600");
      btn.classList.add("bg-green-500", "hover:bg-green-600");
    }