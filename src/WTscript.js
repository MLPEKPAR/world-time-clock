function dataUpdate() {
  let malagaElement = document.querySelector("#malaga");
  let malagaElementDate = malagaElement.querySelector(".city-date");
  let malagaElementTime = malagaElement.querySelector(".city-time");

  malagaElementDate.innerHTML = moment().format("MMMM Do YYYY");
  malagaElementTime.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("h:mm:ss [<small>]A[</small>]");

  let kyevElement = document.querySelector("#kyev");
  let kyevElementDate = kyevElement.querySelector(".city-date");
  let kyevElementTime = kyevElement.querySelector(".city-time");

  kyevElementDate.innerHTML = moment().format("MMMM Do YYYY");
  kyevElementTime.innerHTML = moment()
    .tz("Europe/Kiev")
    .format("h:mm:ss [<small>]A[</small>]");
}

function displayData(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let responseElement = document.querySelector("#cities");
  responseElement.innerHTML = `
    <div class="city">
          <div class="city-name">
            ${cityName}
            <div class="city-date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="city-time">${cityTime.format(
            "hh:mm:ss"
          )}<span> ${cityTime.format("A")}</span></div>
    </div>`;
}

setInterval(dataUpdate, 1000);

let citySelectElement = document.querySelector("#city-choice");
citySelectElement.addEventListener("change", displayData);
