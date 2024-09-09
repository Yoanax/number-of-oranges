// grab the count-el element, store it in a countEl variable
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    // set countEl's innerText to the count
    countEl.innerText = count
}

function substract() {
    count -= 1
    // set countEl's innerText to the count
    countEl.innerText = count
}

function save() {
    let enteries = " " + count + " - "
    saveEl.innerText += enteries /* You can change innerText to textContent check MDN */
    console.log(count)
    count = 0
    countEl.innerText = count
}

function reset() {
    count = 0
    countEl.innerText = count
    saveEl.innerText = "Previous enteries: "
}