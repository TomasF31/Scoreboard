let scoreHomeEl = document.getElementById("scoreHome-el")
let scoreGuestEl = document.getElementById("scoreGuest-el")

let homeCount = 0
let guestCount = 0

function homePlus1() {
    homeCount += 1
    scoreHomeEl.textContent = homeCount
}

function homePlus2() {
    homeCount += 2
    scoreHomeEl.textContent = homeCount
}

function homePlus3() {
    homeCount += 3
    scoreHomeEl.textContent = homeCount
}

function guestPlus1() {
    guestCount += 1
    scoreGuestEl.textContent = guestCount
}

function guestPlus2() {
    guestCount += 2
    scoreGuestEl.textContent = guestCount
}

function guestPlus3() {
    guestCount += 3
    scoreGuestEl.textContent = guestCount
}