inputTeams = document.getElementById('input-teams');

inputTeam1.value = '...'; // testdata
inputTeam2.value = '...'; // testdata

game = { 
    serving : 0,
    team1points : 0,
    team2points : 0,
}

function updateLayout(){
    if (game.serving == 1){
        counterTeam1.classList.add("serving")
        counterTeam2.classList.remove("serving")
    } else{
        counterTeam2.classList.add("serving")
        counterTeam1.classList.remove("serving")
    }


    counterTeam1.innerText = game.team1points;
    counterTeam2.innerText = game.team2points;


}
function start(event){
    if (nameTeam1.innerText == "..." || nameTeam2.innerText == ".." ){
        alert("voer de namen van de teams ")
        return;
    }

    if (! servingTeam1.checked && servingTeam2.checked ){
        alert("wlke team moet beginne ?")
        return;
    }


    {
    counterTeam1.setAttribute('disabled', true);
    counterTeam2.setAttribute('disabled', true);
    return;
    }
        
        



    game.serving = 2;
    if (servingTeam1.checked){
        game.serving = 1;
    }
    input_teams.style.display = "none";
    updateLayout();

    
}
startButton.addEventListener('click',start);

function count(event){
    if (this.id=="counterTeam1"){
        game.team1points +=1;
        game.serving = 1;
    }else{
        game.team2points +=1;
        game.serving = 2;

    }

    updateLayout();
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event){

    nameTeam1.innerText = inputTeam1.value;
    nameTeam2.innerText = inputTeam2.value;
}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);