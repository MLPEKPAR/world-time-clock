function dataUpdate() {
  let malagaElement = document.querySelector("#malaga");
  let malagaElementDate = malagaElement.querySelector(".city-date");
  let malagaElementTime = malagaElement.querySelector(".city-time");

  malagaElementDate.innerHTML = moment().format("MMMM, Do YYYY");
  malagaElementTime.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("h:mm:ss A");

  let kyevElement = document.querySelector("#kyev");
  let kyevElementDate = kyevElement.querySelector(".city-date");
  let kyevElementTime = kyevElement.querySelector(".city-time");

  kyevElementDate.innerHTML = moment().format("MMMM, Do YYYY");
  kyevElementTime.innerHTML = moment().tz("Europe/Kiev").format("h:mm:ss A");
}

setInterval(dataUpdate, 1000);
