//function startCount
let count = 0;
function startCount(count){
    let intervalID;
    count += 1;
    timerText.textContent = count;

}

document.addEventListener('DOMContentLoaded',(event)=>{
    intervalID = setInterval(startCount,1000);
})

const pause = document.getElementById('pause')

//grab all the buttons
const buttons = document.getElementsByTagName('button')
let buttonsArr = []

for(let i = 0; i<buttons.length; i+=1){
    if(buttons[i].id !== "pause"){
        buttonsArr.push(buttons[i])
    }
}
function disableButton(button){
    button.setAttribute("disabled", true)
};
pause.addEventListener("click", function(){
    clearInterval(intervalID)
    buttonsArr.forEach(button => disableButton(button))

})

//adding a line into the pause click event’s callback function to switch the inner text of the pause button to “resume.”

function replacePause(){
    pause.textContent ="Resume"
};
pause.addEventListener("click", function(){
    clearInterval(intervalID);
    buttonsArr.forEach(button => disableButton(button))
    replacePause();
})

//make this a real resume button that clears all the disabled texts and restarts the count
pause.addEventListener("click",function(){
    if(pause === false){
        clearInterval(intervalID)

        buttonsArr.forEach(button => {
            disableButton(button)
        })
        replacePause()
    }
    if(paused){
        console.log('you are resuming!')
        //resume count
        intervalID = setInterval(startCount,1000);
        //replace button language
        replacePause()
        //enable the buttons in for loop
        buttonsArr.forEach(button =>{
            enableButton(button)
        })
    }

    function disableButton(button){
        button.setAttribute('disabled',true);
    };

    function enableButton(button){
        button.removeattribute("disabled");
    }

    function replacePause(){
        if(!paused){
            pause.textContent ="resume";
        }
        if(paused){
            pause.textContent="pause"
        }
    }
})
