// JavaScript Document



function investCalc1() {

  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var growth = 1 +Number(rate);

  //var result1=principal*(growth)**years;
  
  var  results1_str = "";

  for (let counter = 0; counter < years; counter++) {
    let result1 = principal*(growth)**counter;
    console.log(typeof(result1))
    result1 = result1.toFixed(2); //Rounds to 2 decimal places
    results1_str += "Year: " + counter + "   Amount:  " + String(result1) + "<br>" 
    console.log(result1);
    document.getElementById("resultCalc1").innerHTML = results1_str; //prints to the div
  }

}

function showHideCalc1() {
  var x = document.getElementById("showHide1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showHideCalc2() {
  var x = document.getElementById("showHide2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// var slider = document.getElementById("rate_slider");
// var output = document.getElementById("demo");

// output.innerHTML = slider.value; // Display the default slider value
// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

function investCalc2() {

  var principal2 = document.getElementById("principal2").valueAsNumber;
  var rate2 = document.getElementById("rate2").valueAsNumber;
  var years2 = document.getElementById("years2").valueAsNumber;
  var additional2 = document.getElementById("additional2").valueAsNumber;
  var growth2 = 1 + Number(rate2);

  //var result1=principal*(growth)**years;
  
 
  let result2 = principal2;
  var results2_str = "Year 0: Amount: " + String(result2) + "<br>"

  for (let counter = 1; counter < (years2+1); counter++) {
    result2 = principal2*(growth2)**counter + Number(additional2);
    result2 = result2.toFixed(2); //Rounds to 2 decimal places
    results2_str += "Year: " + counter + "   Amount:  " + String(result2) + "<br>" 
    document.getElementById("resultCalc2").innerHTML = results2_str; 
  }
}


