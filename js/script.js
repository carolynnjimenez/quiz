$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });
    
        function calculateActivityScore(activity) {
            if (activity === "Reading" || activity === "reading") {
                return 2;
            }
            else if (activity === "Sports" || activity === "sports") {
                return 3;
            }
            else if (activity === "Hiking" || activity === "hiking") {
                return 4;
            }
            else if (activity === "coding" || activity === "Coding") {
                return 5;
            }
            else {
                return 0;
            }
    }
    function calculateDisappearScore(activity) {
            if (activity === "Ignorance" || activity === "Ignorance") {
                return 2;
            }
            else if (activity === "War" || activity === "war") {
                return 3;
            }
            else if (activity === "Poverty" || activity === "poverty") {
                return 4;
            }
            else if (activity === "Hunger" || activity === "Hunger") {
                return 5;
            }
            else {
                return 0;
            }
    }
});
