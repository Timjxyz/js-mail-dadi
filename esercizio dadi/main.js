alert("Gioco dei dadi con numeri casuali")
    
let numeroCasuale = Math.floor(Math.random() * 6) + 1;;
document.getElementById("player1").innerHTML="Il tuo numero è :" + numeroCasuale;


let numeroComputer = Math.floor(Math.random() * 6) + 1;
document.getElementById("pc").innerHTML="Il numero del computer è :" + numeroComputer;



    if(numeroCasuale < numeroComputer){

        alert("Ritenta!!!");
        document.getElementById("risultato").innerHTML="Hai perso!!!";

    }else if (numeroCasuale > numeroComputer){

        alert("Hai vinto!!!!");
        document.getElementById("risultato").innerHTML="Hai vinto!!!";

    }else{

        alert("Hai pareggiato!!!")
        document.getElementById("risultato").innerHTML="Hai pareggiato!!";
    }
    

