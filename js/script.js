// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

/* global $ */


// DOCUMENT READY FUNCTION BELOW

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = calculateActivityScore(q1Result) + calculateDisappearScore(q2Result) + calculateAnimalScore(q3Result);
        var housePlacement = placement(totalScore, name);
        console.log(housePlacement);
        console.log(totalScore);
        displayResult(housePlacement,name,imgSrc);
    });
    
    function displayResult(housePlacement,name,imgSrc){
        return $(".result").html("<h2>Congratulations, " + name + " you're a " + housePlacement + "</h2>"+"<img src=" +imgSrc+">");

    }
        function calculateActivityScore(activity) {
            if (activity === "Reading" || activity === "reading") {
                return 5;
            }
            else if (activity === "Sports" || activity === "sports") {
                return 4;
            }
            else if (activity === "Hiking" || activity === "hiking") {
                return 3;
            }
            else if (activity === "coding" || activity === "Coding") {
                return 2;
            }
            else {
                return 0;
            }
    }
    function calculateDisappearScore(activity) {
            if (activity === "Ignorance" || activity === "Ignorance") {
                return 5;
            }
            else if (activity === "War" || activity === "war") {
                return 4;
            }
            else if (activity === "Poverty" || activity === "poverty") {
                return 2;
            }
            else if (activity === "Hunger" || activity === "hunger") {
                return 3;
            }
            else {
                return 0;
            }
    }
    
    function calculateAnimalScore(animal) {
        if (animal.length > 2) {
            return 3;
        }
        else if (animal.length > 4 && animal.length <= 6) {
            return 4;
        }
        else if (animal.length > 6) {
            return 5;
        }
        else {
            return 0;

        }
    }
    
    function placement(totalScore,name) {
        var housePlacement;
        var imgSrc;
        if (totalScore > 13) {
            housePlacement = "Ravenclaw";
            imgSrc="#";
            displayResult(housePlacement,name,imgSrc);
        }
        else if (totalScore >11 && totalScore <= 13) {
            housePlacement = "Gryffindor";
            imgSrc="https://media.giphy.com/media/l41lX2yEwhnD6QrLi/giphy.gif";
            displayResult(housePlacement,name,imgSrc);
        }
        else if (totalScore > 9 && totalScore <= 11) {
            housePlacement = "Hufflepuff";
            imgSrc="https://media.giphy.com/media/zWyv9xtsEfXQQ/giphy.gif";
            displayResult(housePlacement,name,imgSrc);
        }
        else if (totalScore >7  && totalScore <= 9) {
            housePlacement = "Slytherin";
            imgSrc="https://media.giphy.com/media/RUvPszdoBXWIU/giphy.gif";
            displayResult(housePlacement,name,imgSrc);
        }

        else{
            $(".result").html("<h2>Make sure to answer all of the questions, " + name + " We want to make sure we get this right!</h2>");
        }
    }
    return housePlacement;
});
