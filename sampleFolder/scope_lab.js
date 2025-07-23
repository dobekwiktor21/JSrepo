// Zakres globalny
var globalVar = "Jestem zmienną globalną";
let globalLet = "Jestem również globalny, ale z zakresem let";
const globalConst = "Jestem globalną stałą";


{
// Zakres bloku
var blockVar = "Jestem zmienną var z zakresem bloku";
let blockLet = "Jestem zmienną let z zakresem bloku";
const blockConst = "Jestem stałą const z zakresem bloku";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

function show(){
var functionVar = "Jestem zmienną o zakresie bloku";
let functionLet = "Jestem let o zakresie bloku";
const functionConst = "Jestem const o zakresie bloku";
}
show();

console.log(functionVar); // Zgłasza ReferenceError
console.log(functionLet); // Zgłasza ReferenceError
console.log(functionConst); // Zgłasza ReferenceError