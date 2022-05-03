const mainShip = document.querySelector(".main-player");
const spaceArea = document.querySelector("#space-area");


function shipMovimentation(event) {
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if(event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if(event.key === " ") {
        event.preventDefault();
        fireLaser();
    }
}

//function to up the ship
function moveUp() {
    let topPosition = getComputedStyle(mainShip).getPropertyValue('top');
    if(topPosition === "0px") {
        return;
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        mainShip.style.top = `${position}px`;
    }
}

function moveDown() {
    let topPosition = getComputedStyle(mainShip).getPropertyValue('top');
    if(topPosition === "550px"){
        return;
    } else {
        let position = parseInt(topPosition);
        position += 50;
        mainShip.style.top = `${position}px`;
    }
}

window.addEventListener("keydown", shipMovimentation);