



var resultOne = null;
var resultTwo = null;
var fileInputOne = document.getElementById('matlabgames');
var fileInputTwo = document.getElementById('matlabteams');
var rawBtn = document.getElementById('DisplayRaw');
var processedBtn = document.getElementById('DisplayProcessed');



function Entry(NewName) {

    this.name = NewName;
    this.isChecked = false;

}

function processFunction(matlabgames, matlabteams) {
    let teams = matlabteams.match(/\d{1,4},\s[A-Z]{1}\S+/g);//split the teams up line by line
    for (let i = 0; i < teams.length; i++) {//remove the numbers and bullshit from the team name
        teams[i] = teams[i].replace(/\d{1,4}[,]\s/g, "");
    }

    let games = matlabgames.match(/\d{1,4},\s{1,3}[-]?\d,\s{1,5}\d{1,3},\s{1,5}\d{1,4},\s{1,5}[-]?\d,\s{1,5}\d{1,3}/g);
    console.log(games.length);
    for (let i = 0; i < games.length; i++) {

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
        let f = new Array();
        //let f = " T1 "+teams[p[0]] + " S1 " + p[2] + " T2 " + teams[p[3]] + " S2 " + p[5];
        f.push(teams[p[0]]);
        f.push(p[2]);
        f.push(teams[p[3]]);
        f.push(p[5]);
        games[i] = f;
    }

    //find people who have beaten the champion Villanova index# 988
    let Entries = new Array();
    let newEntry = new Entry("Villanova");
    Entries.push(newEntry);
    Entries = newFunction(Entries);




    return Entries;

    //let DoWeContinue = true;
    //while (DoWeContinue) {

    //    for (let i = 0; i < transitoryWinners.length; i++) {
    //        if (transitoryWinners[i][transitoryWinners[i].length - 1] !== "*") {
    //            console.log("WORKSE!~");
    //            DoWeContinue = false;
    //        }
    //        else {
    //            DoWeContinue = true;
    //        }
    //    }

    //    for (let i = 0; i < transitoryWinners.length; i++) {
    //        if (transitoryWinners[i][transitoryWinners[i].length - 1] === "*") {
         
    //            transitoryWinners.push
    //            DoWeContinue = false;
    //        }
    //    }
    //}





    /////////functions
    function newFunction(Entries) {

        //find a loser
        
        //find the games that involve the loser
        //find the people who beat the loser && make sure peopleWhoBeatTheLoser isn't already in the Entries 
        



        Entries[0].isChecked = true;

        console.log(Entries);

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




//function FindWhoBeat(x, Entries) {
//    //input string -- name of a team
//    //return Array of strings -- people who beat the input string



//    let loser = x;
//    let winners = new Array();

//    let gamesThatInvolveTheLoser = [];
//    for (let i = 0; i < games.length; i++) {//find the games that involve the loser
//        if ((games[i][0] === loser.name) || (games[i][2] === loser.name)) {
//            gamesThatInvolveTheLoser.push(i);
//        }
//    }

//    let peopleWhoBeatTheLoser = [];
//    for (let i = 0; i < gamesThatInvolveTheLoser.length; i++) {//find the people who beat the loser
//        if (games[gamesThatInvolveTheLoser[i]][0] === loser.name) {
//            if (parseInt(games[gamesThatInvolveTheLoser[i]][1], 10) < parseInt(games[gamesThatInvolveTheLoser[i]][3], 10)) {
//                peopleWhoBeatTheLoser.push(games[gamesThatInvolveTheLoser[i]][2]);
//            }
//        }
//        if (games[gamesThatInvolveTheLoser[i]][2] === loser.name) {
//            if (parseInt(games[gamesThatInvolveTheLoser[i]][3], 10) < parseInt(games[gamesThatInvolveTheLoser[i]][1]), 10) {
//                peopleWhoBeatTheLoser.push(games[gamesThatInvolveTheLoser[i]][0]);
//            }
//        }
//    }


//    //console.log(gamesThatInvolveTheLoser)



//    if (list !== null) {//make sure peopleWhoBeatTheLoser isn't already in list 

//        let finalList = new Array();
//        for (let i = 0; i < peopleWhoBeatTheLoser.length; i++) {
//            if (list.includes(peopleWhoBeatTheLoser[i])) {
//                //do nothing
//            }
//            else {
//                finalList.push(peopleWhoBeatTheLoser[i]);
//            }
//        }

//        for (let i = 0; i < finalList.length; i++) {
//            finalList[i] = finalList[i] + "*";
//        }

//        return finalList;
//    }

//    for (let i = 0; i < peopleWhoBeatTheLoser.length; i++) {
//        peopleWhoBeatTheLoser[i] = peopleWhoBeatTheLoser[i] + "*";
//    }
//    return peopleWhoBeatTheLoser;
//}
//function GetIndexFromName(x) {
//    //input string -- name of team
//    //return number -- index of the name of the team from the teams Array
//    for (let i = 0; i < teams.length; i++) {
//        if (teams[i] === x) {
//            return i;
//        }
//    }

//    alert("!Warning! teams Array did not have: " + x);
//}