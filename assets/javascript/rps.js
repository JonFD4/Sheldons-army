function inputNames(){ 
    let firstPlayerName= prompt("Enter your name, first player");
    return document.getElementById("playerName").innerHTML=` ${firstPlayerName} :`;
}
inputNames ();

