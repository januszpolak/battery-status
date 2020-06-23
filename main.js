function Battery() {
  // get battery status
  navigator.getBattery().then(function (battery) {
    //level status
    let proc = Math.floor(battery.level * 100);

    let level = document.querySelector(".level");
    level.innerHTML = proc + " %";

    //charging status (true/false)
    let charging = battery.charging;
    let status = document.querySelector(".status");
    status.innerHTML = charging;

    // get part of svg element
    const rect = document.getElementById("Rectangle-path");

    //add change color animation and description when battery is charged
    if (charging == true) {
      rect.classList.add("rect");
      status.innerHTML = "CHARGING";
    } else {
      rect.classList.remove("rect");
      status.innerHTML = "DISCHARGING";
    }

    //add fully charged description and change color to green when battery value is 100%
    if (proc == "100") {
      status.innerHTML = "FULLY CHARGED";
      rect.classList.remove("rect");
      rect.setAttribute("fill", "green");
    }
  });
}

//Function run every 1s to check actual status
setInterval(Battery, 1000);
