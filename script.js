const mainPlayer = document.querySelector(".main-player");
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
    let topPosition = getComputedStyle(mainPlayer).getPropertyValue('top');
    if(topPosition === "25px") {
        return;
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        mainPlayer.style.top = `${position}px`;
    }
}

function moveDown() {
    let topPosition = getComputedStyle(mainPlayer).getPropertyValue('top');
    if(topPosition === "525px"){
        return;
    } else {
        let position = parseInt(topPosition);
        position += 50;
        mainPlayer.style.top = `${position}px`;
    }
}

function shoot(){
    let shootLaser = createLaseElement();
    spaceArea.appendChild(shootLaser);
    moveLaser();
};

function createLaserElement(){
    let xLaserPosition = parseInt(window.getComputedStyle(mainPlayer).getPropertyValue("left"));
    let yLaserPosition = parseInt(window.getComputedStyle(mainPlayer).getPropertyValue("top"));
    let newLaser = document.createElement("img");
    newLaser.src = "img/shoot.jpg";
    newLaser.classList.add("laser");
    newLaser.style.left = `${xLaserPosition}px`;
    newLaser.style.top = `${yLaserPosition - 10}px`
    return newLaser;
}

function moveLaser(){
    
}

window.addEventListener("keydown", shipMovimentation);