function openingCeremony(){
    setTimeout(() => {
        console.log("Let the Game begin");
     }, 1000);
     var scoreObj = {red:0,blue:0,green:0,yellow:0};
     race100M(scoreObj,longJump);
}

function race100M(scoreObj,longJump){
    setTimeout(() => {
        console.log("100 m Race Started..");
        console.log("Score is ==>",scoreObj);
        
    }, 2000);
    setTimeout(() => {
        let times = {};
        for(let color in scoreObj )
        {
            times[color] = Math.random()*6 +10;
        }
        //console.log(times);
        let sortedTimes = Object.keys(times).sort(function(a,b){
            return times[a] - times[b];
        })
       // console.log(sortedTimes);
       scoreObj[sortedTimes[0]] += 50;
       scoreObj[sortedTimes[1]] += 25;

        console.log('The 100m race has ended');
        console.log("Updated Score is-->", scoreObj);
        console.log(sortedTimes[0]+" "+ "won 100m Race!");
        longJump(scoreObj,highJump);
            
    }, 3000);

}

function longJump(scoreObj, highJump){
    console.log("Starting LongJump...");
    console.log("Score till now==>",scoreObj);
    setTimeout(() => {
        let selectedColor = ["red", "yellow", "blue", "green"][
            Math.floor(Math.random() * 4)
          ];
          scoreObj[selectedColor] += 150;
          console.log(selectedColor+" "+ "won the LongJump!");
          console.log("LongJump finished with scores:",scoreObj);
          highJump(scoreObj,awardCeremony);

        
    }, 2000);


}

function highJump(scoreObj,awardCeremony){
    console.log("Starting HighJump...");
    console.log("Score till now==>",scoreObj);

    let highestJumpColor = prompt(
        "Which colour secured the highest jump? (Red, Yellow, Blue, Green)"
      );
      if (
        highestJumpColor &&
        ["red", "yellow", "blue", "green"].includes(highestJumpColor.toLowerCase())
      ) {
        scoreObj[highestJumpColor.toLowerCase()] += 100;
        console.log(highestJumpColor.toLowerCase()+" "+"won the HighJump!!");
      } else {
        console.log("Event was cancelled.");
      }
      
      console.log("HighJump finished with scores:", scoreObj);
      awardCeremony(scoreObj);


}

function awardCeremony(scoreObj){
    console.log("Award Ceremony:");
  let sortedScores = Object.entries(scoreObj).sort((a, b) => b[1] - a[1]);
  console.log(
    `${sortedScores[0][0].toUpperCase()} came first with ${sortedScores[0][1]} points.`
  );
  console.log(
    `${sortedScores[1][0].toUpperCase()} came second with ${sortedScores[1][1]} points.`
  );
  console.log(
    `${sortedScores[2][0].toUpperCase()} came third with ${sortedScores[2][1]} points.`
  );
}

openingCeremony(race100M);