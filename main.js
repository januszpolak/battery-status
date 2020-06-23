function Battery() {
  navigator.getBattery().then(function (battery) {
    let proc = battery.level * 100;
    let level = document.querySelector(".level");
    level.innerHTML = proc + " %";

    let charging = battery.charging;
    let status = document.querySelector(".status");
    status.innerHTML = charging;

    const svg = document.querySelector("svg rect");

    if (charging == true) svg.setAttribute("fill", "green");
    else svg.setAttribute("fill", "#FF6E6E");
  });
}

setInterval(Battery, 1000);
