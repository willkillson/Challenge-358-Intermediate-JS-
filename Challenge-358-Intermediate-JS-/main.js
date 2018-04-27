



var resultOne = null;
var resultTwo = null;
var fileInputOne = document.getElementById('matlabgames');
var fileInputTwo = document.getElementById('matlabteams');
var rawBtn = document.getElementById('DisplayRaw');
var processedBtn = document.getElementById('DisplayProcessed');

function processFunction(matlabgames, matlabteams) {

    let teams = matlabteams.match(/\d{1,4},\s[A-Z]{1}\S+/g);

    for (let i = 0; i < teams.length; i++) {
        console.log(teams[i]);
    }





    let input = 1337;
    return input;
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
