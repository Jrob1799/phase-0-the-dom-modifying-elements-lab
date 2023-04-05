document.querySelector("#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Jake The Snake is the champion";

document.body.appendChild(newHeader);