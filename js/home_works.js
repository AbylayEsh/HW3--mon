// HW1 PART 1

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector("#gmail_input ");
    const submitButton = document.querySelector("#gmail_button ");
    const errorMessage = document.querySelector("#gmail_result ");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (!gmailRegex.test(email)) {
            errorMessage.textContent = "Введите корректный Gmail адрес!";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "Correct email address";
            errorMessage .style.color = "green";
            emailInput.classList.remove("input-error");


        }
    });
});

//HW1 Part 2 || HW2 Part 1
const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");

let positionX = 0;
let positionY = 0;

const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth;
const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight;

const speed = 2;

const moveBlock = () => {
    if (positionX < offsetWidth && positionY === 0) {
        positionX += speed;
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock);
    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY += speed;
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock);
    } else if (positionY >= offsetHeight && positionX > 0) {
        positionX -= speed;
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock);
    } else if (positionX === 0 && positionY > 0) {
        positionY -= speed;
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock);
    } else {
        requestAnimationFrame(moveBlock);
    }
};

moveBlock()

// HW2 Part2

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const counterDisplay = document.querySelector("#seconds");

let counter = 0;
let intervalId;
let isRunning = false;

const updateCounterDisplay = () => {
    counterDisplay.textContent = counter;
};

updateCounterDisplay();

startBtn.addEventListener("click",() => {
    if (!isRunning) {
        intervalId = setInterval (() => {
            counterDisplay.style.color = "green";
            counter++;
            updateCounterDisplay();
        },1000)
        isRunning = true;
    }
})

stopBtn.addEventListener("click",() => {
    if (isRunning) {
        counterDisplay.style.color = "red";
        clearInterval(intervalId);
        isRunning = false;
    }
})

resetBtn.addEventListener("click", () => {
    counterDisplay.style.color = "white";
    clearInterval(intervalId);
    counter = 0;
    updateCounterDisplay();
    isRunning = false;
});
