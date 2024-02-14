const tripDistanceEL = document.getElementById("tripDistance");
// get the element
const FuelEfficiencyEl = document.querySelector("#FuelEffeciency");
const fuelCostEl = document.getElementById("FuelCost");

// getcalculate Button
const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
  // if value null  or undefined, return false;
  if (tripDistanceEL.value === "") {
    alert("please enter the distance trip");
    return;
  } else {
    const Distance = tripDistanceEL.value;
    const FuelEffiaciency = FuelEfficiencyEl.value;
    const fuelCost = fuelCostEl.value;
    // logic for Cng Calculator
    const result = (Distance / FuelEffiaciency) * fuelCost;
    alert(result);
  }

  //   showresult.innerText = result + "" + "Make a good journey";
});
