const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let started = false;

$("#start").click(function(){
    if(!started){
        $("#level").text("LEVEL: " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    document.getElementById(userChosenColour).classList.add("pressed");
    playSound(userChosenColour);
    setTimeout(function(){
        document.getElementById(userChosenColour).classList.remove("pressed");
    }, 500);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){
            console.log("Correct");
            setTimeout(function(){
                nextSequence()
            }, 1000);
        }
    }
    else{
        console.log("Wrong");
        var wrong = new Audio("./sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Start button to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
    
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level").text("LEVEL: " + level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    document.getElementById(randomChosenColour).classList.add("pressed");
    playSound(randomChosenColour)
    setTimeout(function(){
        document.getElementById(randomChosenColour).classList.remove("pressed");
    }, 500);
}

function playSound(name){
    switch(name){
        case "red":
            var red = new Audio("./sounds/red.mp3");
            red.play();
            break;
    
        case "blue":
            var blue = new Audio("./sounds/blue.mp3");
            blue.play();
            break;
    
        case "green":
            var green = new Audio("./sounds/green.mp3");
            green.play();
            break;
    
        case "yellow":
            var yellow = new Audio("./sounds/yellow.mp3");
            yellow.play();
            break;
    
        default:
            console.log(randomChosenColour);
    }
}



