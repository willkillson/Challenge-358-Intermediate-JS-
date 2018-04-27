



var resultOne = null;
var resultTwo = null;
var fileInputOne = document.getElementById('matlabgames');
var fileInputTwo = document.getElementById('matlabteams');
var rawBtn = document.getElementById('DisplayRaw');
var processedBtn = document.getElementById('DisplayProcessed');

function processFunction(matlabgames, matlabteams) {
    let teams = matlabteams.match(/\d{1,4},\s[A-Z]{1}\S+/g);//split the teams up line by line
    for (let i = 0; i < teams.length; i++) {//remove the numbers and bullshit from the team name
        teams[i] = teams[i].replace(/\d{1,4}[,]\s/g, "");
    }

    let games = matlabgames.match(/\d{6}[,]\d{8}[,]\s\d{1,4}[,]\s\d[,]\s\d{1,3}[,]\s\d{1,4}[,]\s\d[,]\s\d{1,3}/g);
    for (let i = 0; i < games.length; i++) {
        games[i] = games[i].match(/\d{1,4}[,]\s\d[,]\s\d{1,3}[,]\s\d{1,4}[,]\s\d[,]\s\d{1,3}/g);
        games[i] = games[i].toString();
        let p = games[i];
        p = p.match(/\d{1,4}/g);


        //convert strings to ints
        for (let i = 0; i < p.length; i++) {
            p[i] = parseInt(p[i], 10);
        }
 
        p[0] = p[0] - 1;//fix indexs for teams because they start off at 1 instead of zero
        p[3] = p[3] - 1;//fix indexs for teams because they start off at 1 instead of zero

        for (let i = 0; i < p.length; i++) {
            p[i] = p[i].toString();
        }

        //convert ints back into strings

        let f = teams[p[0]] + " " + p[2] + " " + teams[p[3]] + " " + p[5];
        games[i] = f;
    }

    //find people who have beaten the champion Villanova index# 988
    let input = FindWhoBeat(teams[988]);


    return input;





    /////////functions

    function FindWhoBeat(x) {
        //input string -- name of a team
        //return Array of strings -- people who beat the input string

        let loser = x;
        let winners = new Array();

        console.log(loser);
        


        return winners;
    }


}




window.onload = function () {
    fileInputOne.addEventListener('change', function (e) {
        var file = fileInputOne.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();


            reader.onload = function (e) {
                resultOne = reader.result;
                console.log("resultOne loaded");
            }
            reader.readAsText(file);
        }
        else {
            fileDisplayArea.innerText = "File not supported!"
        }



    });
    fileInputTwo.addEventListener('change', function (e) {
        var file = fileInputTwo.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();


            reader.onload = function (e) {
                resultTwo = reader.result;
                console.log("resultTwo loaded");
            }
            reader.readAsText(file);
        }
        else {
            fileDisplayArea.innerText = "File not supported!"
        }



    });

}

processedBtn.onclick = function () {
    if ((resultOne === null) && (resultTwo === null)) {
        alert("no input or you didn't upload both!");
    }
    else {
        let out = processFunction(resultOne, resultTwo);
        let display_p = document.getElementById('processedInput');
        display_p.innerText = out;
    }
};
