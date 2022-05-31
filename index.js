let unitInput = document.getElementById('unit')
let getLength = document.getElementById('length')
let getVolume = document.getElementById('volume')
let getMass = document.getElementById('mass')


function lengthConverter() {
  // Meters to Feet formula: Meter * 3.2808 = Feet
 let resultFeet = unitInput.value * 3.2808
 let resultLength = unitInput.value / 3.2808
 getLength.textContent = `${unitInput.value} meter=${resultFeet.toFixed(3)} feet | ${unitInput.value} feet=${resultLength.toFixed(3)} meter`
 
}
function volumeConverter() {
  // Liter to  Gallon: Liter * 0.2641720524 = Gallon
 let resultVolume = unitInput.value * 0.2641720524
 let resultGallon = unitInput.value / 0.2641720524
 getVolume.textContent = `${unitInput.value} liter=${resultVolume.toFixed(3)} gallons | ${unitInput.value} gallons=${resultGallon.toFixed(3)} liter`

}

function massConverter() {
  // Killo to Pound: Killo / 0.45359237 = Pound
 let resultKillo = unitInput.value / 0.45359237
 let resultPound = unitInput.value * 0.45359237
 getMass.textContent = `${unitInput.value} killo=${resultKillo.toFixed(3)} pound | ${unitInput.value} pound=${resultPound.toFixed(3)} killo`

}
