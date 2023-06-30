//get the text of the target element

let homeScore = document.getElementById("scorehome")
let guestScore = document.getElementById("scoreguest")

//Score count variable

let countHome = 0
let countGuest = 0

// Home score increment functions

function homeadd1() {
    countHome += 1
    homeScore.textContent = countHome
}
function homeadd2() {
    countHome += 2
    homeScore.textContent = countHome
}
function homeadd3() {
    countHome += 3
    homeScore.textContent = countHome
}

// Guest score increment functions

function guestadd1() {
    countGuest += 1
    guestScore.textContent = countGuest
}
function guestadd2() {
    countGuest += 2
    guestScore.textContent = countGuest
}
function guestadd3() {
    countGuest += 3
    guestScore.textContent = countGuest
}

//reset score

function resetScores() {
    countHome = 0
    countGuest = 0
    homeScore.textContent = countHome
    guestScore.textContent = countGuest
    
}

