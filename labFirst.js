
var age = 30          // age
var gender = 'm'      // 'm' or 'f'
var height = 185      // height in cm
var weight = 90       // weight in kg
var exerciseLevel = 1 // 1-5 here


/****************Body Mass Index Calculation************************************/

//Height of the user is given in CM. Convert it in to meter formula (cm/100) 


var HeightInMeter = height/100;

// Calculate the squared meter

var FinalHeight = Math.pow(HeightInMeter, 2);

// Calculate the BMI

var Bmi = weight/FinalHeight;

console.log("BMI --->",Math.round(Bmi));

/********************************************************************************/


/******Calculate the Ideal weight ********/


var IdealWeight = 22.5 * Math.pow(HeightInMeter,2);

console.log("Ideal weight --->",Math.round(IdealWeight) +" kg");

/******************************************************************************/

/***************Calculate Basal Metabolic Rate******************************* */

var BMR = 10.0 * weight + 6.25 * height - 5.0 * age;
if (gender === 'm') {
  BMR += 5
}
if (gender === 'f') {
  BMR-= 161
}

/*****************************************************************************/

var caloriesPerDay

switch (exerciseLevel) {
case '1':
  caloriesPerDay = BMR * 1.2
  break

case '2':    
  caloriesPerDay = BMR * 1.375
  break

case '3':
  caloriesPerDay = BMR * 1.55
  break

case '4':
  caloriesPerDay = BMR * 1.725
  break

case '5':
  caloriesPerDay = BMR * 1.9
  break

default:
  caloriesPerDay = BMR * 1.2
  break
}

console.log("Calories per day based on exercise level --->", caloriesPerDay);


/****************Diet Plan*********************************************** */

var dietCaloriesPerDay
var dietWeeks

if (weight > idealWeight) {
  dietCaloriesPerDay = caloriesPerDay - 500
  dietWeeks = (weight - idealWeight) / 0.5
} else {
  dietCaloriesPerDay = caloriesPerDay + 500
  dietWeeks = (idealWeight - weight) / 0.5
}

console.log(`Eat ${Math.round(dietCaloriesPerDay)} calories per day for ${Math.round(dietWeeks)} weeks`)
console.log(`While maintaining your current exercise level: ${exerciseLevel}`)


