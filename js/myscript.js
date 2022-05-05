//setInterval(myTimer, 1000);
var audio1 = new Audio('sound.wav');
var audio2 = new Audio('sound2.wav');
var audio3 = new Audio('sound3.wav');
let tempo = 60;
let lp1 = 8000;
let lp2 = 8000;
let mzone1 = 0;
let mzone2 = 0;
let mzone3 = 0;
let mzone4 = 0;
let mzone5 = 0;
let mzone6 = 0;
let stzone1 = 0;
let stzone2 = 0;
let stzone3 = 0;
let stzone4 = 0;
let stzone5 = 0;
let stzone6 = 0;
let deck1 = 40;
let deck2 = 40;
let gy1 = 0;
let gy2 = 0;
let extra1 = 15;
let extra2 = 15;
let ban1 = 0;
let ban2 = 0;
let phase =1;
var mydata = JSON.parse(data);
function load(){
	alert(mydata[0].name);
}
function search(cardpic){
	let aux = cardpic.slice(10, 12);
	let card = parseInt(aux)-1;
	return(mydata[card]);
}
function mainphase(){
  $("#log").append('<br>>Player 1 Main Phase!');
  phase =1;
}
function battlephase(){
  $("#log").append('<br>>Player 1 Battle Phase!');
  phase =2;
}
function endphase(){
  $("#log").append('<br>>Player 1 End Phase!');
  phase =3;
  $("#log").append('<br><span style="color:grey;">--Turn change</span>');
  callbot();
}
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function givehand(){
  $("#log").append('<br>>Player 1 draw!');
  audio1.play();
  tempo=61;
  if (deck1 == 0) {alert('deck out!')}
  $("#hand1").attr('src',"img/cards/"+randomIntFromInterval(1, 40)+".png");
  $("#hand2").attr('src',"img/cards/"+randomIntFromInterval(1, 40)+".png");
  $("#hand3").attr('src',"img/cards/"+randomIntFromInterval(1, 40)+".png");
  $("#hand4").attr('src',"img/cards/"+randomIntFromInterval(1, 40)+".png");
  $("#hand5").attr('src',"img/cards/"+randomIntFromInterval(1, 40)+".png");
  $(".myhand").css("width", "75px");
  $(".myhand").css("heigth", "110px");
  $("img").show();
  deck1 = deck1 -5;
  $('#c8').html(deck1);
}
function myTimer() {
  if (tempo<1) {
    alert("timeout!");
    location.reload();
  }
  tempo--;
  $('#tempo').html(tempo); 
}
function hit(id){
	let damage = 0;
	audio3.play();  
	switch(id){
		case 'mzone1':
			damage = m1obj.atk;
			break;
		case 'mzone2':
			damage = m2obj.atk;
			break;
		case 'mzone3':
			damage = m3obj.atk;
			break;
	}
  lp2 = lp2 - damage;
  $('#c9').html("LP "+lp2); 
  $("#log").append('<br><span style="color:red;">>Monster x hits, -'+damage+' LP!</span>');
  if (lp2<0){ 
    alert("You won!");
    location.reload();
  }
}
function flip(who){
	switch(who){
		case 'mzone1':
			$("#mzone1").attr('src','img/cards/'+m1obj.id+'.png'); 
			break;
		case 'mzone2':
			$("#mzone2").attr('src','img/cards/'+m2obj.id+'.png'); 
			break;
		case 'mzone3':
			$("#mzone3").attr('src','img/cards/'+m3obj.id+'.png'); 
	}
  $("#log").append('<br><span style="color:red;">>Monster x flips!</span>');
}
function summon(scard){
	$("#log").append('<br><span style="color:white;">>Monster x summoned!');
  audio2.play();
  if  (mzone1 == 0){ 
    $("#mzone1").attr('src','img/cards/'+scard.id+'.png'); 
    m1obj = scard;
    mzone1++;
  } else if (mzone2 == 0){ 
    //$("#mzone2").attr('src',$(this).parent().prev("img").attr('src'));
    $("#mzone2").attr('src','img/cards/'+scard.id+'.png');  
    m2obj = scard;
    mzone2++;
  } else if (mzone3 == 0){ 
    $("#mzone3").attr('src','img/cards/'+scard.id+'.png'); 
    m3obj = scard;
    mzone3++;
  } else {
    alert("cant");
  }
}
function set(scard, cardt){
	if (cardt<2){
		$("#log").append('<br><span style="color:white;">>Monster x set!');		
		if  (mzone1 == 0){ 
    	$("#mzone1").attr('src','img/c3.png'); 
    	m1obj = scard;
    	mzone1++;
  	} else if (mzone2 == 0){ 
    	//$("#mzone2").attr('src',$(this).parent().prev("img").attr('src'));
    	$("#mzone2").attr('src','img/c3.png');  
    	m2obj = scard;
    	mzone2++;
  	} else if (mzone3 == 0){ 
    	$("#mzone3").attr('src','img/c3.png'); 
    	m3obj = scard;
    	mzone3++;
  	} else {
    	alert("cant");
  	}
	}
	else{
		$("#log").append('<br><span style="color:white;">>st set!');
		if  (stzone1 == 0){ 
    	$("#stzone1").attr('src','img/c1.png'); 
    	stzone1++;
  	} else if (stzone2 == 0){ 
    	//$("#mzone2").attr('src',$(this).parent().prev("img").attr('src'));
    	$("#stzone2").attr('src','img/c1.png');  
    	stzone2++;
  	} else if (stzone3 == 0){ 
    	$("#stzone3").attr('src','img/c1.png'); 
    	stzone3++;
  	} else {
    	alert("cant");
  	}
	}
}
function handoptions(cardt){
	switch(cardt){
		case 1:
			$('.summon').show();	
			$('.activate').show();
			$('.set').show();
			break;
		case 2:
		 $('.summon').hide();	
			$('.activate').show();
			$('.set').show();
		 break;
		default:
			$('.summon').hide();	
			$('.activate').hide();
			$('.set').show();
	}
}