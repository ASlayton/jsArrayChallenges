console.log("Hello");

// CHALLENGE 1



//.charCodeAt
var challengeOneInput = "jumbo shrimp";
var SchallengeOneInput = challengeOneInput.split(" ");
var input1 = SchallengeOneInput[0].split("");
var input2 = SchallengeOneInput[1].split("");
var score1;
var score2;

for(var i = 0; i < input1.length; i++){
  score1 += input1[i].charCodeAt();
};

for(var j = 0; i < input2.length; i++){
  score2 += input2[i].charCodeAt();
};

if (score1 > score2){
  document.getElementById("challenge-1").innerHTML("<h1>" + input1 + "</h1>");
  console.log(input1.join(""));
}else {
  document.getElementById("challenge-1").innerHTML("<h1>" + input2 + "</h1>");
  console.log(input2.join(""));
};




// CHALLENGE 4
// var challengeFourInputA = [1,2,3];
// var challengeFourInputB = [3,8,1,2,4,12];
// for (var i = 0; i < challengeFourInputA.length; i++){
//   challengeFourInputA[i] = challengeFourInputA[i] * 2;
// }
// console.log(challengeFourInputA);

