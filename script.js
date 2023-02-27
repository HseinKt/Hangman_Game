
const hangman = document.getElementById("hangman")
const hint = document.getElementById("hint")
const guess = document.getElementById("guess")
const characters = document.getElementById("characters")
const play = document.getElementById("play")
const alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
const dict = {
    Players: ['Messi','Ronaldo','Neymar','Maradona','Pele','Ronaldinho'],
    Cities: ['Tokyo','Moscow','Berlin','Nairobi','Rio','Denver']
};

function guess_word() {
    const l = dict.Players.length
    const l2 = dict.Cities.length
    const r = Math.floor((Math.random() * 2) )
    
    if (r == 0){
        const r2 = Math.floor((Math.random() * l))
        const ply = dict.Players[r2]
        hint.innerHTML = "Famous Football Players ("+ply.length+" letters)"
        return ply
    }
    else{
        const r2 = Math.floor((Math.random() * l2))
        const ply = dict.Cities[r2]
        hint.innerHTML = "Cities famous of la casa de papel ("+ply.length+" letters)"
        return ply
    }
}

guess_word()

for (let i=0 ; i<alphabetArray.length ; i++) {
    const btn = document.createElement('button')
    btn.innerHTML = alphabetArray[i]
    btn.className = "btn_char"
    btn.id = "btn_char"
    btn.addEventListener('click',() => {
        console.log(alphabetArray[i])
    })
    characters.appendChild(btn)
}

play.addEventListener('click', () => {
    hangman.setAttribute("src","hangman.png")
    const c = guess_word()
    console.log(c)
})






