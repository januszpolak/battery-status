function Battery() {
  navigator.getBattery().then(function (battery) {
    let proc = battery.level * 100;
    let level = document.querySelector(".level");
    level.innerHTML = proc + " %";

    let charging = battery.charging;
    let status = document.querySelector(".status");
    status.innerHTML = charging;
  });
}

setInterval(Battery, 1000);
