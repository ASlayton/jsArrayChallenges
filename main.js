// console.log("Hello");

// CHALLENGE 1

// var challengeOneInput = "jumbo shrimp";
// var SchallengeOneInput = challengeOneInput.split(" ");
// var input1 = SchallengeOneInput[0].split("");
// var input2 = SchallengeOneInput[1].split("");
// var score1;
// var score2;
// var challenge1Element = document.getElementById("challenge-1");
// for(var i = 0; i < input1.length; i++){
//   score1 += input1[i].charCodeAt();
// };

// for(var j = 0; i < input2.length; i++){
//   score2 += input2[i].charCodeAt();
// };

// if (score1 > score2){
//   challenge1Element.innerHTML = ("<h1>" + input1.join("") + "</h1>");
// }else {
//   challenge1Element.innerHTML = ("<h1>" + input2.join("") + "</h1>");
// };



// // CHALLENGE 2
// var challengeTwoInputA = [1,2,3,4,5,6,3,8,9];
// var challengeTwoInputB = [12,13,14];
// var challengeTwoInputC = [9,2,4,7,3];
// var challenge2Element = document.getElementById("challenge-2");
// for(var i = 0; i < challengeTwoInputB.length; i++){
//   var changeMe = challengeTwoInputB[i].toString();
//   if (changeMe.includes('3')){
//     challengeTwoInputB[i] = changeMe.replace(/[3]/g, 7) * 1;
//   }else if (changeMe.includes('7')){
//     challengeTwoInputB[i] = changeMe.replace(/[7]/g, 3) * 1;
//   }else {
//     challengeTwoInputB[i]=changeMe * 1;
//   };
// };
// challenge2Element.innerHTML = ("<h1>" + challengeTwoInputB + "</h1>");



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
  document.getElementById("challenge-3").innerHTML = minArray;
}else{
  document.getElementById("challenge-3").innerHTML = maxArray;
};


// CHALLENGE 4
// var challengeFourInputA = [1,2,3];
// var challengeFourInputB = [3,8,1,2,4,12];
// for (var i = 0; i < challengeFourInputA.length; i++){
//   challengeFourInputA[i] = challengeFourInputA[i] * 2;
// }
// console.log(challengeFourInputA);


