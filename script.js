"use strict";
document.querySelector("form").addEventListener("submit", displayDogName);

function displayDogName(event) {
    event.preventDefault();
    let doggyname = document.querySelector("#dogname").value;
    document.body.append(doggyname);
}
