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

    //add change color animation when battery is charged
    if (charging == true) rect.classList.add("rect");
    else rect.classList.remove("rect");
  });
}

//Function run every 1s to check actual status
setInterval(Battery, 1000);
