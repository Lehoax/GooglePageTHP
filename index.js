const submitBtn = document.getElementById('grs');
const btnmove = document.getElementById('btnmove');


submitBtn.addEventListener("click", function () {
    const inputtxt = document.getElementById('req').value;
    window.location.replace("https://www.google.com/search?q="+inputtxt);
})


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

function displayeffect() {
    const btnmove = document.getElementById('btnmove');
    let text = ['Résultats adaptés', 'J\'aime l\'aventure ', 'Tarte concombres', 'Stack overflow !?'];
    let randomchoiceText = shuffle(text)
    randomchoiceText.forEach((element, i )=> {
        setTimeout(
            function(){
                btnmove.innerHTML = '<button id="" class="btnSearch" > <p id="glitchP" > '+element+'</p></button>'; 
            }
        , i * 1000);
    });
}
btnmove.addEventListener("mouseleave", function () {
    displayeffect();
})

