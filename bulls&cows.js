let start = document.querySelector('.js-start');
let input = document.querySelector('.js-input');
let btn = document.querySelector('.js-check');
let result = document.querySelector('.js-result');
let warning = document.querySelector('.js-warning');
let currentTry;
let bulls;
let cows;

start.addEventListener('click', function () {
    result.innerHTML = '';
    secret = '';
    let rand = '';
    while (secret.length < 4) {
        rand = Math.floor(Math.random() * 10);
        if (!secret.includes(rand)) {
            secret += rand;
        }
    }
    console.log(secret);
    return secret;
});

btn.addEventListener('click', function () {
    // if (!input.value) break;
    if (input.value.length == 4 && !isNaN(input.value)) {
        // for (let i = 0; i < input.value.length; i++) {
        //     console.log(input.value)
        //     if (input.value.includes(input.value[i], i + 1)) {
        //         break;
        //     }
        // }
        currentTry = input.value;
        warning.style.opacity = "0";
        currentBulls = getBulls(secret, currentTry);
        currentCows = getCows(secret, currentTry);

        if (currentBulls == 4) {
            result.innerHTML = "Congratulations! You win!";
            input.value = '';
        } else {
            result.innerHTML += `<br> ${currentTry}  &nbsp;&nbsp;&nbsp;  || &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${currentBulls}  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; ${currentCows}`;
        }
    } else {
        currentTry = '';
        warning.style.opacity = "1";
    }
    console.log(currentBulls, currentCows);
});

function getBulls(secret, current) {
    bulls = 0;
    for (let i = 0; i < 4; i++) {
        if (secret[i] === current[i]) {
            bulls++;
        }
    }
    return bulls;
}

function getCows(secret, current) {
    cows = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (secret[i] === current[j]) {
                cows++;
            }
        }
    }
    return cows;
}