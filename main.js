console.log("Hello");

// CHALLENGE 1

// var challengeOneInput = "jumbo shrimp";
// var SchallengeOneInput = challengeOneInput.split(" ");
// var input1 = SchallengeOneInput[0].split("");
// var input2 = SchallengeOneInput[1].split("");
// var score1;
// var score2;

// for(var i = 0; i < input1.length; i++){
//   score1 += input1[i].charCodeAt();
// };

// for(var j = 0; i < input2.length; i++){
//   score2 += input2[i].charCodeAt();
// };

// if (score1 > score2){
//   document.getElementById("challenge-1").innerHTML("<h1>" + input1 + "</h1>");
//   console.log(input1.join(""));
// }else {
//   document.getElementById("challenge-1").innerHTML("<h1>" + input2 + "</h1>");
//   console.log(input2.join(""));
// };

// CHALLENGE 2
// var challengeTwoInputA = [1,2,3,4,5,6,3,8,9];
// var challengeTwoInputB = [12,13,14];
// var challengeTwoInputC = [9,2,4,7,3];

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
// console.log(challengeTwoInputB);

// CHALLENGE 3
var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ]; 
var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];
var maxInput = Math.max.apply(Math,challengeThreeInputA);
console.log(maxInput);
var minInput = Math.min.apply(Math,challengeThreeInputA);
console.log(minInput);

for(var i = 0; i < challengeThreeInputA; i++){
  if (maxInput === challengeThreeInputA[i]){
    var exists += 1;
  };
};



// CHALLENGE 4
// var challengeFourInputA = [1,2,3];
// var challengeFourInputB = [3,8,1,2,4,12];
// for (var i = 0; i < challengeFourInputA.length; i++){
//   challengeFourInputA[i] = challengeFourInputA[i] * 2;
// }
// console.log(challengeFourInputA);


