
const hangman = document.getElementById("hangman")
const hint = document.getElementById("hint")
const guess = document.getElementById("guess")
const characters = document.getElementById("characters")
const play = document.getElementById("play")
const win = document.getElementById("win")
const lost = document.getElementById("lost")
const alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
const dict = {
    Players: ['Messi','Ronaldo','Neymar','Maradona','Pele','Ronaldinho'],
    Cities: ['Tokyo','Moscow','Berlin','Nairobi','Rio','Denver']
};
let arr = []

let lose = 0
win.innerHTML = ""
lost.innerHTML = ""

function guess_word() {
    const l = dict.Players.length
    const l2 = dict.Cities.length
    const r = Math.floor((Math.random() * 2) )
    let i =0
    guess.innerHTML = ""
    win.innerHTML = ""
    lost.innerHTML = ""
    if (r == 0){
        const r2 = Math.floor((Math.random() * l))
        const ply = dict.Players[r2]
        hint.innerHTML = "Famous Football Players ("+ply.length+" letters)"
        for ( i=0 ; i<ply.length ; i++) {
            // guess.append(" _")
            guess.innerHTML+= `<div id="${i}">_</div>`
        }
        return ply
    }
    else{
        const r2 = Math.floor((Math.random() * l2))
        const ply = dict.Cities[r2]
        hint.innerHTML = "Cities famous of la casa de papel ("+ply.length+" letters)"
        for ( i=0 ; i<ply.length ; i++) {
            //guess.append(" _")
            guess.innerHTML+= `<div id="${i}">_</div>`

        }
        console.log(guess)
        return ply
    }
}

const g = guess_word()
const words = g.toUpperCase().split("")
console.log("length of the word "+words.length)

function check_Character (n){
    const index = words.indexOf(n)
    console.log(index)
    
    if(words.includes(n)){
        console.log("OK")
        //guess.splice(index, 0, n);
        for ( i=0 ; i<words.length ; i++) {
            let a = words.filter(x => x == n)
            if( i == index){
                if( !arr.includes(n)){
                    arr.splice(i,0,n)
                    document.getElementById(`${i}`).innerHTML = n
                }
                else {
                    console.log("a : "+a.length)
                    let c = 0 
                    console.log("n "+n)
                    for( let j = i+1; j < words.length; j++){
                        console.log(words[j])
                        if( words[j] == n && c < a.length){
                            c++;
                            arr.splice(j,0,n)
                            document.getElementById(`${j}`).innerHTML = n
                        }
                    }
                }
            }
        }
    }
    else {
        lose++
    }
    if (arr.length === words.length){
        win.innerHTML = "YOU WIN "
    }
    
    if (lose == 10){
        lost.innerHTML = "YOU LOSE "
        hangman.setAttribute("src","hangman.png")
    }
}

console.log(g)

for (let i=0 ; i<alphabetArray.length ; i++) {
    const btn = document.createElement('button')
    btn.innerHTML = alphabetArray[i]
    btn.className = "btn_char"
    btn.id = "btn_char"
    btn.addEventListener('click',() => {
        check_Character(alphabetArray[i])
    })
    characters.appendChild(btn)
}



