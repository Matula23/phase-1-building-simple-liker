// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  errorHide()
  clickListener()
})

function clickListener(){
  document.addEventListener("click", (event) => {
    const glyphElement = event.target
    if(glyphElement.classList.value === "like-glyph" && glyphElement.innerText === EMPTY_HEART){
      mimicServerCall()
        .then(resp => {
          glyphElement.textContent = FULL_HEART
          glyphElement.classList.add("activated-heart")
        })
        .catch(error => {
          errorShow()
          setTimeout(errorHide, 3000);
        })
    } else if (glyphElement.classList.contains("like-glyph") && glyphElement.innerText === FULL_HEART){
      glyphElement.textContent = EMPTY_HEART
      glyphElement.classList.remove("activated-heart")
    }
  })
}

function FullHeartClick(){
  document.addEventListener("click", (event) => {
    // if(event.target.classList.value === "like-glyph" && event.target.value)
    console.log(event.target.value)
  })
}

function errorHide(){
  const errorModal = document.querySelector("#modal")
  errorModal.className = "hidden"
}

function errorShow(){
  const errorModal = document.querySelector("#modal")
  errorModal.className = ""
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
