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

//HW1 Part 2
const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");

let positionX = 0;

const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth;

const moveBlock = () => {
    if (positionX < 90) {
            positionX++;
            childBlock.style.left = `${positionX}%`;
            requestAnimationFrame(moveBlock)
    }
}

moveBlock ();
