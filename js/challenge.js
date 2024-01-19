// A Counter that increases by 1 each second
// Plus and Minus buttons that increment or decrement the counter
// A "like" button (❤️) that adds a "like" for the number that is currently displayed by the timer
// A comment box that adds comments when submitted

// As a user, I can:

// See the timer increment every second once the page has loaded.
// Manually increment and decrement the counter using the plus and minus buttons.
// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// Click the "resume" button to restart the counter and re-enable the buttons.
// Leave comments on my gameplay, such as: "Wow, what a fun game this is."


// add a clickEvent to the pause button 
// the click event should pause the timer AND change the word "pause" to "resume" AND grey out the other buttons so they can't function

const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")

function automaticIncrementor() {
    currentNumLikes = 0
    counter.textContent++
}

let timer 
const init = () => {
    timer = setInterval(automaticIncrementor, 1000)
}

document.addEventListener("DOMContentLoaded", init)


const freeze = document.querySelector("button#pause")
freeze.addEventListener("click", () => {
    clearInterval(timer)
    if (freeze.textContent === "resume") {
        freeze.textContent = "pause"
        minus.disabled = !true;
        plus.disabled = !true;
        heart.disabled = !true;
        timer = setInterval(automaticIncrementor, 1000)
    } else {
        
        clearInterval(timer)
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    pause.textContent = "resume"
    }
})

const restart = document.querySelector("button#pause")
restart.addEventListener("click", () => {
   
})



// push .includes 

// const liked = document.querySelector("button#heart")

heart.addEventListener("click", () => {
    currentNumLikes++
    // when you hit like button check to see if li with an id of that number exists 
    // if it doesnt exist make it exist with appropriate text
    // if it does exists all we need to do is update the text
    const ul = document.querySelector('ul');
    const li = document.createElement("li");
     
    li.id = counter.textContent
    const likeText = `${counter.textContent} has been liked ${currentNumLikes} times`
    const numLike = document.createTextNode(likeText);
    li.appendChild(numLike); 
    ul.appendChild(li);

})

minus.addEventListener("click", () => {
    counter.textContent--
})

plus.addEventListener("click", () => {
    counter.textContent++
})

const inputForm = document.querySelector("#comment-form");

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const comments = document.querySelector('#list')
    const commentForm = document.querySelector("#comment-input")
    comments.textContent = commentForm.value
    
})

