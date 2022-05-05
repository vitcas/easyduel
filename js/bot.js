const fruits = [1,2,3,4,5,6,7,8,9,10,
11,12,13,14,15,16,17,18,19,20,
21,22,23,24,25,26,27,28,29,30,
31,32,33,34,35,36,37,38,39,40];
const bothand = [];
let monstro = "";
let botmonster = 0;
let botst = 0;
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
shuffle(fruits);
function botbattle(){
	$("#log").append('<br><span style="color:yellow;">>Player 2 Battle Phase!</span>');
	$("#log").append('<br><span style="color:red;">>Monster x hits, -1500 LP!</span>');
}
function botmain(){
	$("#log").append('<br><span style="color:yellow;">>Player 2 Main Phase!</span>');
	monstro = "img/cards/" + bothand.pop() + ".png";
	$("#log").append('<br><span style="color:orange;">>Monster x effect!</span>');
	$("#mzone5").attr('src',monstro); 
  $("#radio2").prop( "disabled", false );
	$("#log").append('<br><span style="color:white;">>Monster x summoned!</span>');
	$("#log").append('<br><span style="color:green;">>Uses spell x!</span>');
	$("#log").append('<br><span style="color:pink;">>Uses trap x!</span>');
}
function botstart(){
  bothand.push(fruits.pop());
  bothand.push(fruits.pop());
  bothand.push(fruits.pop());
  bothand.push(fruits.pop());
  let text = bothand.toString();
  $('#bhtxt').html(text);
}
function botdraw(){
	$("#log").append('<br><span style="color:yellow;">>Player 2 draw!</span>');
	if (deck2 == 0) {
		alert('deck out!')
	}
	switch (bothand.length) {
  case 0:
    bothand.push(fruits.pop());
    bothand.push(fruits.pop());
    bothand.push(fruits.pop());
    bothand.push(fruits.pop());
    bothand.push(fruits.pop());
    deck2 = deck2 -5;
    break;
  case 1:
    bothand.push(fruits.pop());
    bothand.push(fruits.pop());
    bothand.push(fruits.pop());
    bothand.push(fruits.pop());
    deck2 = deck2 -4;
    break;
  case 2:
    bothand.push(fruits.pop());
    bothand.push(fruits.pop());
    bothand.push(fruits.pop());
    deck2 = deck2 -3;
    break;
  case 3:
    bothand.push(fruits.pop());
    bothand.push(fruits.pop());
    deck2 = deck2 -2;
    break;
  default:
    bothand.push(fruits.pop());
    deck2 = deck2 -1;
	}
	$('#c1').html(deck2);
  let text = bothand.toString();
  $('#bhtxt').html(text); 
}
function callbot(){
	tempo = 61;
	botdraw();
	botmain();
	if (botmonster>0)
		botbattle();
	$("#log").append('<br><span style="color:yellow;">>Player 2 End Phase!</span>');
	$("#log").append('<br><span style="color:grey;">--Turn change</span>');
	givehand();
}