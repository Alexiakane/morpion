const case1 = document.querySelector('.case1')
const case2 = document.querySelector('.case2')
const case3 = document.querySelector('.case3')
const case4 = document.querySelector('.case4')
const case5 = document.querySelector('.case5')
const case6 = document.querySelector('.case6')
const case7 = document.querySelector('.case7')
const case8 = document.querySelector('.case8')
const case9 = document.querySelector('.case9')

let choixJoueur = true
let verifyCase1 = false
let verifyCase2 = false
let verifyCase3 = false
let verifyCase4 = false
let verifyCase5 = false
let verifyCase6 = false
let verifyCase7 = false
let verifyCase8 = false
let verifyCase9 = false
// True représente le joueur avec les croix

let usagi = document.getElementById("img")
usagi.src = "lapin.jpg"

let neko = document.getElementById("img")
neko.src = "chat.jpg"


case1.addEventListener('click', () => {
    if (verifyCase1 == false){
        if (choixJoueur == true){
            document.body.appendChild(usagi)
            choixJoueur = false;
            verifyCase1 = true;
        }
        else {
            document.body.appendChild(neko)
            choixJoueur = true;
            verifyCase1 = true;
        }
    }
})

case2.addEventListener('click', () => {
    if (verifyCase2 == false){
        if (choixJoueur == true){
            case2.style.backgroundColor = "red"
            case2.image
            choixJoueur = false
            verifyCase2 = true
        }
        else {
        case2.style.backgroundColor = "blue"
        choixJoueur = true
        verifyCase2 = true
        }
    }
})

case3.addEventListener('click', () => {
    if (verifyCase3 == false){
        if (choixJoueur == true){
            case3.style.backgroundColor = "red"
            choixJoueur = false
            verifyCase3 = true
        }
        else {
        case3.style.backgroundColor = "blue"
        choixJoueur = true
        verifyCase3 = true
        }
    }
})

case4.addEventListener('click', () => {
    if (verifyCase4 == false){
        if (choixJoueur == true){
            case4.style.backgroundColor = "red"
            choixJoueur = false
            verifyCase4 = true
        }
        else {
        case4.style.backgroundColor = "blue"
        choixJoueur = true
        verifyCase4 = true
        }
    }
})

case5.addEventListener('click', () => {
    if (verifyCase5 == false){
        if (choixJoueur == true){
            case5.style.backgroundColor = "red"
            choixJoueur = false
            verifyCase5 = true
        }
        else {
        case5.style.backgroundColor = "blue"
        choixJoueur = true
        verifyCase5 = true
        }
    }
})

case6.addEventListener('click', () => {
    if (verifyCase6 == false){
        if (choixJoueur == true){
            case6.style.backgroundColor = "red"
            choixJoueur = false
            verifyCase6 = true
        }
        else {
        case6.style.backgroundColor = "blue"
        choixJoueur = true
        verifyCase6 = true
        }
    }
})

case7.addEventListener('click', () => {
    if (verifyCase7 == false){
        if (choixJoueur == true){
            case7.style.backgroundColor = "red"
            choixJoueur = false
            verifyCase7 = true
        }
        else {
        case7.style.backgroundColor = "blue"
        choixJoueur = true
        verifyCase7 = true
        }
    }
})

case8.addEventListener('click', () => {
    if (verifyCase8 == false){
        if (choixJoueur == true){
            case8.style.backgroundColor = "red"
            choixJoueur = false
            verifyCase8 = true
        }
        else {
        case8.style.backgroundColor = "blue"
        choixJoueur = true
        verifyCase8 = true
        }
    }
})

case9.addEventListener('click', () => {
    if (verifyCase9 == false){
        if (choixJoueur == true){
            case9.style.backgroundColor = "red"
            choixJoueur = false
            verifyCase9 = true
        }
        else {
        case9.style.backgroundColor = "blue"
        choixJoueur = true
        verifyCase9 = true
        }
    }
})