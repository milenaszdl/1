//задача 1
function convertSpeed(speed, method) {
  if (method == "toMS") {
    return `${speed * (5 / 18)} м/с`;
  } else if (method == "toKMH") {
    return `${speed / (5 / 18)} км/ч`;
  }
}

let km1 = 23;
console.log(convertSpeed(km1, "toMS"));
let metr1 = 34;
console.log(convertSpeed(metr1, "toKMH"));

//задача 2
function absValue(a) {
  if (a >= 0) {
    return a;
  } else {
    return 0 - a;
  }
}
let ch1 = 5;
let ch2 = 6;
let ch3 = -100;
console.log(absValue(ch1));
console.log(absValue(ch2));
console.log(absValue(ch3));

//задача 3
let student = {
    group: 326,
    last_name: "Суздалова",
    first_name: "Милена"
};
for (let key in student){
    console.log(key);
}
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);

//задача 4
function getrandom(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(getrandom(20,50));

//задача 5
function sampleArray(arr,k){
    let rand;
    let mass = new Array();
    for (let i=0; i<k; i++){
        rand = Math.floor(Math.random() * arr.length);
        mass.push(rand);
    }
    return mass;
}

let arr = [1,2,3,4,5,6,7];
console.log(sampleArray(arr,3));