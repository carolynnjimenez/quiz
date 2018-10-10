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
        housePlacement = placement(totalScore, name);
        console.log("q1 " + q1Result);
        console.log("q2 " + q2Result);
        console.log("q3 " + q3Result);
        console.log(calculateActivityScore(q1Result));
        console.log(calculateDisappearScore(q2Result));
        console.log(calculateAnimalScore(q3Result));
        console.log(totalScore);
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
            if (activity === "Ignorance" || activity === "ignorance") {
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
        if (animal.length > 6) {
            return 5;
        }
        else if (animal.length > 2 && animal.length <= 4) {
            return 4;
        }
        else if (animal.length < 2) {
            return 3;
        }
        else {
            return 0;

        }
    }
    
    function placement(totalScore, name) {
        var housePlacement;
        var imgSrc;
        if (totalScore > 13) {
            housePlacement = "Ravenclaw";
            imgSrc="https://i1.wp.com/33.media.tumblr.com/4a2f7f773c3ff5aafa163f32da9e43d6/tumblr_n4vb0d9equ1rnp9obo1_500.gif";

        } else if (totalScore > 11 && totalScore <= 13) {
            housePlacement = "Gryffindor";
            imgSrc="https://i.gifer.com/BEr.gif";
        }
        else if (totalScore > 9 && totalScore <= 11) {
            housePlacement = "Hufflepuff";
            imgSrc="https://media.giphy.com/media/dWQK9d18BWbYc/giphy.gif";
        }
        else if (totalScore < 7) {
            housePlacement = "Slytherin";
            imgSrc="https://thumbs.gfycat.com/AnotherEcstaticBuck-size_restricted.gif";
        }
        
        displayResult(housePlacement,name,imgSrc)
    }
});
