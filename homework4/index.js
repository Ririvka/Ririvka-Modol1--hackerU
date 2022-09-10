// function miniCalculator() {
//   let firstnam = +document.getElementById("firstnam").value;
//   let secondnam = +document.getElementById("secondnam").value;
//   let finalsolution = document.getElementById("finalsolution").value;
//   let finalnamber;

//   if (finalsolution == "opA") {
//     finalnamber = firstnam + secondnam;
//   } else if (finalsolution == "opB") {
//     finalnamber = firstnam - secondnam;
//   } else if (finalsolution == "opC") {
//     finalnamber = firstnam * secondnam;
//   } else if (finalsolution == "opD") {
//     finalnamber = firstnam / secondnam;
//   }
//   document.getElementById(`solution`).innerText = finalnamber;
// }

function miniCalculator() {
  let firstnam = +prompt("firstnam");
  let option = prompt("+, -, *, /");
  let secondnam = +prompt("secondnam");
  // let finalsolution = prompt("finalsolution");
  let finalnamber;

  if (option == "+") {
    finalnamber = firstnam + secondnam;
  } else if (option == "-") {
    finalnamber = firstnam - secondnam;
  } else if (option == "*") {
    finalnamber = firstnam * secondnam;
  } else if (option == "/") {
    finalnamber = firstnam / secondnam;
  }
  alert(finalnamber);
}
// let(`solution`).innerText = finalnamber;
