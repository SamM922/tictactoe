/*global $*/
let isPlayerOne = true;
$("button").click(function(event) {
    $('#'+this.id).hide();
    if (isPlayerOne === true){
        $(this.parentElement).html("X");
    } else {
        $(this.parentElement).html("O");
    }
    isPlayerOne = !isPlayerOne;
});
function ifWin(){
    
}