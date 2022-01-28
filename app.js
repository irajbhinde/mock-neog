// const inputText = document.querySelector(".input-text")
// const btnCheck = document.querySelector(".btn-check")
// const outputDiv = document.querySelector(".output")

// var vowelList = ['A', 'E', 'I', 'O', 'U']

// btnCheck.addEventListener('click', clickHandler)


// function clickHandler(){
//     var vowelCounter = 0;
//     var consonantCounter = 0;
//     var text = inputText.value.toUpperCase();
    
//     for(i=0; i<text.length;i++){
      
//         if(vowelList.includes(text.charAt(i))){
//           vowelCounter++;
//           outputDiv.innerText = "Vowel Count : " +vowelCounter
//         }
//         else{
//           consonantCounter++;
//           outputDiv.innerText = "Consonant Count : " +consonantCounter 
//         }

//         outputDiv.innerText = "Vowel Count : " +vowelCounter + " Consonant Count : " +consonantCounter
        
//         }
//     }
// Create a web app, which you have to create two btns one is start, second is stop, and input text on clicking of start btn the text color should change in every 1 sec and on clicking stop it should stop at a particular color.

const inputText = document.querySelector(".input-text");
const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const outputDiv = document.querySelector(".output");
var handler;

var colorList = ['red', 'blue', 'green', 'yellow', 'violet', 'black', 'maroon', 'pink'];



function randomColor(){
  var number = Math.random();
  number = Math.floor(number*colorList.length)
  return number;
} 


const startHandler = () => {
      var text = inputText.value;
      handler = setInterval(function (){
      outputDiv.style.color = colorList[randomColor()]
    }, 1000)
    
    outputDiv.innerText = text;
    
      
   }

   btnStart.addEventListener("click",  startHandler)
   btnStop.addEventListener('click', () => {
  clearInterval(handler)
})

   




    // timer = setInterval(function(){
    //   outputDiv.style.color = colorList[number];
    // },)
    // console.log(text)
    //   outputDiv.innerHTML = text;  
    
   
   











