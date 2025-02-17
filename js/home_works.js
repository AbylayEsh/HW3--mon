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

function handleMove(offset, operation, position) {
    position += speed;
    childBlock.style[offset] = `${position}px`;
    requestAnimationFrame(moveBlock);
}

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

//HW 3 PART 1
fetch('../data/persons.json')
    .then(response => response.json())
    .then(data => {

        const container = document.querySelector('.characters-list');
        container.classList.add('characters-list');

        data.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('character-card');


            card.innerHTML =  `
                <div class="character-photo">
                    <img src="${person.person_photo}" alt="${person.name}">
                </div>
                <h3>${person.name}</h3>
                <p><strong>Возраст: ${person.age}</strong> </p>
                
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));



//HW 3 PART 2
const request  = new XMLHttpRequest();
request.open('GET', '../data/persons.json');

request.onload = () => {
    if (request.status === 200) {
        console.log(JSON.parse(request.responseText));
    }

};

request.onerror = function () {
    console.error('Ошибка запроса');
};
console.log(request.responseText);

request.send();
