
const hangman = document.getElementById("hangman")
const hint = document.getElementById("hint")
const guess = document.getElementById("guess")
const characters = document.getElementById("characters")
const play = document.getElementById("play")
const alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;

for (let i=0 ; i<alphabetArray.length ; i++) {
    const btn = document.createElement('button')
    btn.innerHTML = alphabetArray[i]
    btn.className = "btn_char"
    btn.id = "btn_char"
    characters.appendChild(btn)
}

play.addEventListener('click', () => {
    const c = hangman.getContext("2d")
    c.fillStyle = "black";
    c.fillRect(20, 20, 150, 100);
})