
const setOfWords = [
	"Yuvraj Singh also known as Yuvi, the entire Nation would take a pleasure to call out, was the master-man behind India winning the World Cup in the year 2011 and World Cup T20 in the year 2007. He was ornamented as the Player of the Tournament for the cause of his marvellous performance in the ICC World Cup 2011. As Yuvraj turned 30, he faced a bigger challenge of life in the form and name of cancer. Although the tumour was cancerous, Singh was lucky to have it detected in the preliminary stage of the otherwise fatal disease. Despite being struck with cancer, Yuvraj Singh is still one of the finest batsmen who has an extra bowler to deal with, his cancer. "
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
	let randomNumber = Math.floor(Math.random()*setOfWords.length);
	msg.innerText = setOfWords[randomNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Done";
}

const endPlay = () => {
	let date = new Date();
	endTime = date.getTime();
	let totalTime = ((endTime - startTime)/ 1000);
	let totalStr = typeWords.value;
	let wordCount = wordCounter(totalStr);
	let speed = Math.round((wordCount/totalTime)*60);

	let finalMsg = " You typed "+wordCount+ " words. Your typing speed per minute is "+ speed+ ". " ;
	finalMsg += compareWords(msg.innerText, totalStr);

	msg.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
	let words1 = str1.split(" ");
	let words2 = str2.split(" ");
	let count = 0;

	words1.forEach(function(item, index){
		if (item == words2[index]) {
			count++;
		}
	})

	let errorWords = ( words1.length - count);

	return( count + " correct out of "+ words1.length+ " words and the total number of errors are "+ errorWords+ ". ")	
}

const wordCounter = (str) => {
	let response = str.split( " ").length;
	return response;
}


btn.addEventListener('click', function(){
	if (this.innerText == 'Start') {
		typeWords.disabled = false;
		playGame();
	}
	else if(this.innerText == "Done"){
		typeWords.disabled = true;
		btn.innerText = "Start";
		endPlay();
	}
});
