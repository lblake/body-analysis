//Constants
/************************************************************/
//Total Body Weight
const bodyWeight_1 = document.querySelector('#body-weight-1');
const bodyWeight_2 = document.querySelector('#body-weight-2');
const bodyWeight_3 = document.querySelector('#body-weight-3');
const bodyWeight_4 = document.querySelector('#body-weight-4');
const bodyWeight_5 = document.querySelector('#body-weight-5');
const bodyWeight_6 = document.querySelector('#body-weight-6');

//Dates
const dateFirstColumn_1 = document.querySelector('#date-first-column');
const dateFirstColumn_2 = document.querySelector('#date-second-column');
const dateFirstColumn_3 = document.querySelector('#date-third-column');
const dateFirstColumn_4 = document.querySelector('#date-fourth-column');
const dateFirstColumn_5 = document.querySelector('#date-fifth-column');
const dateFirstColumn_6 = document.querySelector('#date-sixth-column');

//Fat Percentage
const fatPercent_1 = document.querySelector('#fat-percent-1');
const fatPercent_2 = document.querySelector('#fat-percent-2');
const fatPercent_3 = document.querySelector('#fat-percent-3');
const fatPercent_4 = document.querySelector('#fat-percent-4');
const fatPercent_5 = document.querySelector('#fat-percent-5');
const fatPercent_6 = document.querySelector('#fat-percent-6');

//Fat Kilo
const fatKilo_1 = document.querySelector('#fat-kilo-1');
const fatKilo_2 = document.querySelector('#fat-kilo-2');
const fatKilo_3 = document.querySelector('#fat-kilo-3');
const fatKilo_4 = document.querySelector('#fat-kilo-4');
const fatKilo_5 = document.querySelector('#fat-kilo-5');
const fatKilo_6 = document.querySelector('#fat-kilo-6');

// Lean Weight Kg
const leanKilo_1 = document.querySelector('#lean-weight-1');
const leanKilo_2 = document.querySelector('#lean-weight-2');
const leanKilo_3 = document.querySelector('#lean-weight-3');
const leanKilo_4 = document.querySelector('#lean-weight-4');
const leanKilo_5 = document.querySelector('#lean-weight-5');
const leanKilo_6 = document.querySelector('#lean-weight-6');

const waterPercent_1 = document.querySelector('#water-percent-1');
const waterPercent_2 = document.querySelector('#water-percent-2');
const waterPercent_3 = document.querySelector('#water-percent-3');
const waterPercent_4 = document.querySelector('#water-percent-4');
const waterPercent_5 = document.querySelector('#water-percent-5');
const waterPercent_6 = document.querySelector('#water-percent-6');

const totalBodyWater_1 = document.querySelector('#total-body-water-1');
const totalBodyWater_2 = document.querySelector('#total-body-water-2');
const totalBodyWater_3 = document.querySelector('#total-body-water-3');
const totalBodyWater_4 = document.querySelector('#total-body-water-4');
const totalBodyWater_5 = document.querySelector('#total-body-water-5');
const totalBodyWater_6 = document.querySelector('#total-body-water-6');

const dryLean_1 = document.querySelector('#dry-lean-kilo-1');
const dryLean_2 = document.querySelector('#dry-lean-kilo-2');
const dryLean_3 = document.querySelector('#dry-lean-kilo-3');
const dryLean_4 = document.querySelector('#dry-lean-kilo-4');
const dryLean_5 = document.querySelector('#dry-lean-kilo-5');
const dryLean_6 = document.querySelector('#dry-lean-kilo-6');

const bmrKcal_1 = document.querySelector('#bmr-cal-1');
const bmrKcal_2 = document.querySelector('#bmr-cal-2');
const bmrKcal_3 = document.querySelector('#bmr-cal-3');
const bmrKcal_4 = document.querySelector('#bmr-cal-4');
const bmrKcal_5 = document.querySelector('#bmr-cal-5');
const bmrKcal_6 = document.querySelector('#bmr-cal-6');

const energyKcal_1 = document.querySelector('#energy-cal-1');
const energyKcal_2 = document.querySelector('#energy-cal-2');
const energyKcal_3 = document.querySelector('#energy-cal-3');
const energyKcal_4 = document.querySelector('#energy-cal-4');
const energyKcal_5 = document.querySelector('#energy-cal-5');
const energyKcal_6 = document.querySelector('#energy-cal-6');

const waistCm_1 = document.querySelector('#waist-cm-1');
const waistCm_2 = document.querySelector('#waist-cm-2');
const waistCm_3 = document.querySelector('#waist-cm-3');
const waistCm_4 = document.querySelector('#waist-cm-4');
const waistCm_5 = document.querySelector('#waist-cm-5');
const waistCm_6 = document.querySelector('#waist-cm-6');

const hipsCm_1 = document.querySelector('#hips-cm-1');
const hipsCm_2 = document.querySelector('#hips-cm-2');
const hipsCm_3 = document.querySelector('#hips-cm-3');
const hipsCm_4 = document.querySelector('#hips-cm-4');
const hipsCm_5 = document.querySelector('#hips-cm-5');
const hipsCm_6 = document.querySelector('#hips-cm-6');

//Dates Data
persistInput(dateFirstColumn_1);
persistInput(dateFirstColumn_2);
persistInput(dateFirstColumn_3);
persistInput(dateFirstColumn_4);
persistInput(dateFirstColumn_5);
persistInput(dateFirstColumn_6);

//Body Weight Data
persistInput(bodyWeight_1);
persistInput(bodyWeight_2);
persistInput(bodyWeight_3);
persistInput(bodyWeight_4);
persistInput(bodyWeight_5);
persistInput(bodyWeight_6);

//Fat Pecentage
persistInput(fatPercent_1);
persistInput(fatPercent_2);
persistInput(fatPercent_3);
persistInput(fatPercent_4);
persistInput(fatPercent_5);
persistInput(fatPercent_6);

//Fat Kilo
persistInput(fatKilo_1);
persistInput(fatKilo_2);
persistInput(fatKilo_3);
persistInput(fatKilo_4);
persistInput(fatKilo_5);
persistInput(fatKilo_6);

// Lean Weight Kg
persistInput(leanKilo_1);
persistInput(leanKilo_2);
persistInput(leanKilo_3);
persistInput(leanKilo_4);
persistInput(leanKilo_5);
persistInput(leanKilo_6);

// Water %
persistInput(waterPercent_1);
persistInput(waterPercent_2);
persistInput(waterPercent_3);
persistInput(waterPercent_4);
persistInput(waterPercent_5);
persistInput(waterPercent_6);

// Total Body Water Ltr
persistInput(totalBodyWater_1);
persistInput(totalBodyWater_2);
persistInput(totalBodyWater_3);
persistInput(totalBodyWater_4);
persistInput(totalBodyWater_5);
persistInput(totalBodyWater_6);

// Dry LeanKg
persistInput(dryLean_1);
persistInput(dryLean_2);
persistInput(dryLean_3);
persistInput(dryLean_4);
persistInput(dryLean_5);
persistInput(dryLean_6);

// BMR Kcal
persistInput(bmrKcal_1);
persistInput(bmrKcal_2);
persistInput(bmrKcal_3);
persistInput(bmrKcal_4);
persistInput(bmrKcal_5);
persistInput(bmrKcal_6);

// Energy Required
persistInput(energyKcal_1);
persistInput(energyKcal_2);
persistInput(energyKcal_3);
persistInput(energyKcal_4);
persistInput(energyKcal_5);
persistInput(energyKcal_6);

// Waist Cm
persistInput(waistCm_1);
persistInput(waistCm_2);
persistInput(waistCm_3);
persistInput(waistCm_4);
persistInput(waistCm_5);
persistInput(waistCm_6);

// Hips Cm
persistInput(hipsCm_1);
persistInput(hipsCm_2);
persistInput(hipsCm_3);
persistInput(hipsCm_4);
persistInput(hipsCm_5);
persistInput(hipsCm_6);

//Function to store data in localstorage
function persistInput(input) {
  var key = 'input-' + input.id;

  var storedValue = localStorage.getItem(key);

  if (storedValue) input.value = storedValue;

  input.addEventListener('input', function () {
    localStorage.setItem(key, input.value);
  });
}
