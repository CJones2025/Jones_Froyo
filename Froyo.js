console.log("welcome to the flavor station!")

let userInput = prompt("Enter flavors here!:");
let flavorsArr = userInput.split(",");
let flavors = {};

for (let flavor of flavorsArr) { 
  if (flavors[flavor]) {
    flavors[flavor]++;
  } else {
    flavors[flavor] = 1;
  }
}

console.log("Froyo Summary:");
for (let flavor in flavors) {
  console.log(`${flavor}: ${flavors[flavor]}`);
}

// vanilla,vanilla,vanilla,strawberry,coffee,coffee