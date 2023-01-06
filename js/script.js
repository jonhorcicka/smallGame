// zakladni promene
var totalScore, roundScore, activePlayer, dice, playGame;

// totalScore = [0,0];
// roundScore = 0;
// activeScore = 0;

// // vynulovani a odstraneni kostky
// document.getElementById("totalScorePlayer-0").textContent = 0;
// document.getElementById("totalScorePlayer-1").textContent = 0;
// document.getElementById("currentScore-0").textContent = 0;
// document.getElementById("currentScore-1").textContent = 0;

// document.querySelector(".diceImage").style.display = "none";
newStart();

function newStart() {
    totalScore = [0,0];
    roundScore = 0;
    activeScore = 0;
    activePlayer= 0;
    playGame = true;
    
//VYNULOVANI A ODSTANENI KOSTKY
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    //skryti kostky
    document.querySelector(".diceImage").style.display = "none";

    //texty do puvodniho stavu
    document.querySelector("#name-0").textContent = "Skóre 1. Hráče";
    document.querySelector("#name-1").textContent = "Skóre 2. Hráče";

    //vratime zvyrazneni aktivniho hrace k prvnimu a u druhemu odstranime
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");
}









//menime obrazek kostky dle nahodneho cisla
document.querySelector(".rollDice").addEventListener("click", function(){
    if(playGame){   
        // 1. generujeme nahodne cislo mezi 1 a 6 
        var dice = Math.ceil(Math.random()*6);
    
        // 2. zobrazit spravny obrazek
        var diceElement = document.querySelector(".diceImage");
        diceElement.style.display = "block";
        console.log(diceElement.src = "img/" + dice + ".png");
    
        // 3. nacitame cisla z kostky
        if (dice !== 1){
        roundScore = roundScore + dice;
        console.log(roundScore);
        console.log(activePlayer);
        document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
        } else {
            // hrat bude dalsi hrac
            console.log("next player");
            nextPlayer();
            }
    }
});

function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    roundScore = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");
}

document.querySelector(".holdScore").addEventListener("click", function(){
    if(playGame){ 
        //celkove skore se vyplni soucasnym skore
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
    
        //
        document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];
    
        if(totalScore[activePlayer] >= 30){
            document.querySelector("#name-" + activePlayer).textContent = "Vítěz!";
            document.querySelector(".diceImage").style.display = "none";
            playGame = false;
        } else {
        nextPlayer();
        }
    }
});

document.querySelector(".newGame").addEventListener("click", newStart);