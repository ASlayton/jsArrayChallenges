// console.log("Hello");

// CHALLENGE 1

var challengeOneInput = "jumbo shrimp";
var SchallengeOneInput = challengeOneInput.split(" ");
var input1 = SchallengeOneInput[0].split("");
var input2 = SchallengeOneInput[1].split("");
var score1;
var score2;
var challenge1Element = document.getElementById("challenge-1");
for(var i = 0; i < input1.length; i++){
  score1 += input1[i].charCodeAt();
};

for(var j = 0; i < input2.length; i++){
  score2 += input2[i].charCodeAt();
};

if (score1 > score2){
  challenge1Element.innerHTML += ("<h1>" + input1.join("") + "</h1>");
}else {
  challenge1Element.innerHTML += ("<h1>" + input2.join("") + "</h1>");
};



// // CHALLENGE 2
var challengeTwoInputA = [1,2,3,4,5,6,3,8,9];
var challengeTwoInputB = [12,13,14];
var challengeTwoInputC = [9,2,4,7,3];
var challenge2Element = document.getElementById("challenge-2");
for(var i = 0; i < challengeTwoInputB.length; i++){
  var changeMe = challengeTwoInputB[i].toString();
  if (changeMe.includes('3')){
    challengeTwoInputB[i] = changeMe.replace(/[3]/g, 7) * 1;
  }else if (changeMe.includes('7')){
    challengeTwoInputB[i] = changeMe.replace(/[7]/g, 3) * 1;
  }else {
    challengeTwoInputB[i]=changeMe * 1;
  };
};
challenge2Element.innerHTML += ("<h1>" + challengeTwoInputB + "</h1>");



// CHALLENGE 3
var theArray = [1,1,1,1,2,1,1,1];
var maxArray = Math.max.apply(Math, theArray);

var minArray = Math.min.apply(Math, theArray);

var countMeMax = 0;
var countMeMin = 0;
for(var i = 0; i < theArray.length; i++){
  if(maxArray === theArray[i]){
    countMeMax += 1;
  }else if (minArray === theArray[i]){
    countMeMin += 1;
  };
};

if(countMeMax > countMeMin){
  document.getElementById("challenge-3").innerHTML += "<h1>" + minArray + "</h1>";
}else{
  document.getElementById("challenge-3").innerHTML += "<h1>" + maxArray + "</h1>";
};


// CHALLENGE 4
var challengeFourInputA = [1,2,3];
var challengeFourInputB = [3,8,1,2,4,12];
for (var i = 0; i < challengeFourInputA.length; i++){
  challengeFourInputA[i] = challengeFourInputA[i] * 2;
}
document.getElementById('challenge-4').innerHTML += "<h1>" + challengeFourInputA + "</h1>";

// CHALLENGE 5
var array1 = [1,2,4,7,5,9,2,7,3,6,4];
var array2 = [5,9,2];
var matches = [];
for(var i = 0; i < array1.length; i++){
  for (var j = 0; j < array2.length; j++){
    if(array1[i] === array2[j]){
      array1[i] = "";
    };
  };
};
array1 = array1.join("").split("");
for(var n = 0; n < array1.length; n++){
  array1[n] = array1[n] * 1;
};
document.getElementById("challenge-5").innerHTML += "<h1>" + array1 + "</h1>";


// CHALLENGE 6
var test1 = [1,3]; // 2
var test2 = [2,3,4]; // 1
var test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12
var minNum = 1;
var maxNum = test3.length + 1;

for(var i = 1; i < maxNum; i++){
  if (test3.toString().includes(i)){

  }else{
    var missingAnimal = i;
    break;
  };
};
document.getElementById("challenge-6").innerHTML += "<h1>" + i + "</h1>";



// CHALLENGE 7
var numBeggers = 2;
var offerings = [1,2,3,4,5];
var beggers = [];
for(var i = 1; i < numBeggers+1; i++){
  beggers.push("begger" + i);
};

for(var j = 1; j < beggers.length; j++){
  for(var n = 0; n < offerings.length; n++)
    if(offerings[n] % beggers[j] === 0){
      beggers.bucket += offerings[n];
    };
};

for(var m = 0; m < beggers.length; m++){
  console.log(document.getElementById('challenge-7').innerHTML += "<h1>" + beggers[m].bucket + "</h1>");
};




// CHALLENGE 8
var C8test1 = 6815; // Display = '2-7-4'
var arr1 = C8test1.toString().split("");

for (var i=1;i<arr1.length-1;i++){
  if((arr1[i] % 2) > 0){
    arr1[i] = "-" + arr1[i] +"-";
  };
};
arr1 = arr1.join("");
document.getElementById("challenge-8").innerHTML += "<h1>" + arr1 + "</h1>";

//CHALLENGE 9
myPhoneArr = [6,1,5,5,7,1,3,4,9,8];
function myPhone(x){
  var phoneArray = x;
  phoneNumberFirst = "(" + phoneArray[0].toString() +phoneArray[1].toString() + phoneArray[2].toString() + ") ";
  phoneNumberSecond = phoneArray[3].toString() + phoneArray[4].toString() + phoneArray[5].toString();
  phoneNumberThird = phoneArray[6].toString() + phoneArray[7].toString() + phoneArray[8].toString() + phoneArray[9].toString();
  phoneNumber = phoneNumberFirst + phoneNumberSecond + "-" + phoneNumberThird;
  return phoneNumber;
};
document.getElementById("challenge-9").innerHTML += "<h1>" + myPhone(myPhoneArr) + "</h1>";



//CHALLENGE 10
var pinArray = ["pin1","pin2","pin3","pin4","pin5","pin6","pin7","pin8","pin9","pin10"];
var pinsToRemove = [];
var strPinsToRemove=[];
for(var i = 0; i < pinsToRemove.length; i++){
  pinsToRemove[i] = "pin" + pinsToRemove[i];
};

for(var j = 0; j < pinsToRemove.length; j++){
  for (var n = 0; n < pinArray.length; n++){
    if(pinsToRemove[j] === pinArray[n]){
      document.getElementById(pinArray[n]).className = "hiddenPic";
    }
  };
};