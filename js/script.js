/*global $*/
let isPlayerOne = true;
let turnsTaken = 0;

$("button").click(function(event) {
    $('#'+this.id).hide();
    if (isPlayerOne === true){
        $(this.parentElement).html("X");
    } else {
        $(this.parentElement).html("O");
    }
    ifVerticalWin();
    ifHorizontalWin();
    ifDiagonalWin();
    isPlayerOne = !isPlayerOne;
    console.log(isPlayerOne);
    turnsTaken++;
    if (turnsTaken === 9){
        alert("Game over! Please refresh!");
    }
});
function ifVerticalWin(){
    if ($('#tile1').text() === $('#tile4').text() && $('#tile1').text() === $('#tile7').text() && isValid("#tile7")) {
        if (isPlayerOne){
            alert("Player One wins!");
        } else {
            alert("Player Two wins!");
        }
    }
    if ($('#tile2').text() === $('#tile5').text() && $('#tile2').text() === $('#tile8').text() && isValid("#tile8")){
        if (isPlayerOne){
            alert("Player One wins!");
        } else {
            alert("Player Two wins!");
        }
    }
    if ($('#tile3').text() === $('#tile6').text() && $('#tile3').text() === $('#tile9').text() && isValid("#tile9")){
        if (isPlayerOne){
            alert("Player One wins!");
        } else {
            alert("Player Two wins!");
        }
    }
}
function ifHorizontalWin(){
    if ($('#tile1').text() === $('#tile2').text() && $('#tile1').text() === $('#tile3').text() && isValid("#tile3")) {
        if (isPlayerOne){
            alert("Player One wins!");
        } else {
            alert("Player Two wins!");
        }
    }
    if ($('#tile4').text() === $('#tile5').text() && $('#tile4').text() === $('#tile6').text() && isValid("#tile6")){
        if (isPlayerOne){
            alert("Player One wins!");
        } else {
            alert("Player Two wins!");
        }
    }
    if ($('#tile7').text() === $('#tile8').text() && $('#tile7').text() === $('#tile9').text() && isValid("#tile9")){
        if (isPlayerOne){
            alert("Player One wins!");
        } else {
            alert("Player Two wins!");
        }
    }
}
function ifDiagonalWin(){
    if ($('#tile1').text() === $('#tile5').text() && $('#tile1').text() === $('#tile9').text() && isValid("#tile9")) {
        if (isPlayerOne){
            alert("Player One wins!");
        } else {
            alert("Player Two wins!");
        }
    }
    if ($('#tile3').text() === $('#tile5').text() && $('#tile3').text() === $('#tile7').text() && isValid("#tile7")){
        if (isPlayerOne){
            alert("Player One wins!");
        } else {
            alert("Player Two wins!");
        }
    }
}
function isValid(tile){
    if ($(tile).text() === "X" || $(tile).text() === "O"){
        return true;
    } else {
        return false;
    }
}