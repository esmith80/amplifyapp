// ATG Pharma internship functions

/*

base model combine takes 240 passes * 300 seconds on 10 acres (660 X 660 ft)
8.7 feet augerLength * 240 = 2088 square feet per pass?
240 passes * 5 minutes = 72000 seconds

660 ft / 240 passes = 2.75 feet per pass
you get 2.75 feet per pass with a 8.7 ft augerLength
2.75/8.7 = feetPerPass (0.31609195 extra feet of width per pass)

feetPerPass = 2.75 + (extraFeet * 2.75 / 8.7)

numPasses = 660 ft / feetPerPass

timeTaken = numPasses * 300

so augerLengthLength = 2088 / numberOfPasses

*/

// assumptions: a Combine has default attributes, but can be configured with bigger wheelSizes, new augerLength, (but its fuelType cannot be changed)

export class Combine {
  constructor (augerLength, fuelType, wheelSize) {
    this.augerLength = augerLength;
    this.fuelType = fuelType;
    this.wheelSize = wheelSize;
    this.runs = 0;
  }
  
  // assumption: weight change based on fuel level is not accounted for
  get weight() {
    let weight = 53000;
    // assumption: extra weight due to wheelSizes is calculated at 5% per extra inch, then 5% of the new weight (not linear) - increasein wheelSize size greatly increases weight
    const extraInches = this.wheelSize - 60;
    for (let i = 0; i < extraInches; i++) {
      weight += (.05 * weight);
    }
    // assumption: weight increses by 8% for each 1 foot of augerLength length - this can result in a combine that weighs nearly 4X as much as the base model
    const extraFeet = this.augerLength - 8.7;
    for (let i = 0; i < extraFeet; i++) {
      weight += (.08 * weight);
    }
    console.log(typeof weight);
    return weight;
  }

  run() {
    this.runs++;
  }
}

//To clarify,  let’s assume that the 
// time taken is 650 min and the 
// percentage of field covered by the run was 85% and the 
// run cost was 250 the 
// efficiency value should be:
//  ( (600/650) + (0.85) + (250/350) ) /3

//  Which is 82.9% efficient . the average is taken from the 3 parameters in the equation


export const totalEfficiency = (combine) => {
  let fieldCoverage = .85;
  return ((600 / timeToHarvest(combine)) + fieldCoverage + (costPerRun(combine)/350)) / 3;
}

// returns dollar cost of running a combine over 10 acres based on weight and fuelType (diesel/electric)
export const costPerRun = (combine) => {
  // assumption: pounds per dollar is derived because there is a linear relationship between weight and cost
  const poundsPerDollar = 53000 / 350;

  if (combine.fuelType === 'diesel') {
    return combine.weight / poundsPerDollar;
  } else {
    let costOffset = 0.25;
    costOffset -= combine.runs * 0.005;
    console.log('cost is offset by ', costOffset * 100, '%');
    return (1 + costOffset) * (combine.weight / poundsPerDollar);
  }
}

// this assumes no rocks in the field
export const timeToHarvest = (combine) => {
  
  const extraFeet = combine.augerLength - 8.7; // 8.7 is the base level
  
  // assumption: there is a linear relationship between width of field that is planed on each pass and the length of augerLength
  const feetPerPass = 2.75 + (extraFeet * 2.75 / 8.7);
  
  const passes = 660 / feetPerPass;
  
  // assumption: if the number of passes is a decimal, round up if it is worth it for the tractor to continue (.001 of a row is not worth it, but maybe .5 is? could be a configurable amount based on $ of crop harvested)
  // console.log('# of passes to harvest 10 acres: ', Math.ceil(passes));
  let totalTime = passes * 300;  
  
  // assumption: each 3% reduction is the total time after a previous 3% reduction (so the relationship is not linear, not 3%, 6%, 9%, etc.)
  const extrawheelSizeInches = combine.wheelSize - 60;
  for (let i = 0; i < extrawheelSizeInches; i++) {
    totalTime -= (.03 * totalTime);
  }
  return (totalTime / 60);
};

// const combineA = new Combine(8.7, 'diesel', 60);
// const combineB = new Combine(17.7, 'electric', 63);

// combineA.run();

// // console.table(combineA);
// // console.log('WEIGHT: ', combineA.weight.toFixed(0), ' lbs');
// // console.log('TIME TO HARVEST: ', timeToHarvest(combineA), ' minutes');
// // console.log('COST PER RUN (10 acres): $', costPerRun(combineA).toFixed(2));


// for (let i = 0; i < 100; i++) {
//   combineB.run();
// }
// console.table(combineB);
// console.log('COST PER RUN (10 acres): $', costPerRun(combineB).toFixed(2));

// console.log('total efficiency for combineB: ', totalEfficiency(combineB));

// // console.log('WEIGHT: ', combineB.weight.toFixed(0), ' lbs');
// // console.log('TIME TO HARVEST: ', timeToHarvest(combineB), ' minutes');
