//Below Code adapted from: https://www.tutorialsandyou.com/javascript/create-a-temperature-converter-165.html

//I added the 'tofixed' part (limits decimals)

function fahrenheitConversion(temperature){
  temperature = parseFloat(temperature);
  document.getElementById("celsius").value=((temperature-32)/1.8).toFixed(2);
  document.getElementById("kelvin").value=(((temperature-32)/1.8)+273.15).toFixed(2);
}

function celsiusConversion(temperature){
  temperature = parseFloat(temperature);
  document.getElementById("fahrenheit").value=((temperature*1.8)+32).toFixed(2);
  document.getElementById("kelvin").value=(temperature+273.15).toFixed(2);
}

function kelvinConversion(temperature){
  temperature = parseFloat(temperature);
  document.getElementById("fahrenheit").value=(((temperature-273.15)*1.8)+32).toFixed(2);
  document.getElementById("celsius").value=(temperature-273.15).toFixed(2);
}



//My additions (work around "error message" since chosen code precludes entering text rather than numbers)

function alertbox() {
  alert("Please enter numbers only.")
}