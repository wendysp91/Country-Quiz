//Peticion Api restcountries.com
async function getCountry() {
    try {
        var countries = await getData();
        createArray(countries);

    } catch (error) {
        console.log(error)
    }
}
function getData() {
    return fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => json);
}
var countryArray = [];
function createArray(countries) {
    for (let i = 0; i < 10; i++) {
        const countryCount = 250
        var random = Math.floor(Math.random() * countryCount);
        try {
            var selectedCountry = countries[random]
        } catch (error) {
            debugger
        }
        countryArray.push(selectedCountry)
    }
    return countryArray;
}

function shuffle(answers) {
    let currentIndex = answers.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        var temp = answers[currentIndex]
        answers[currentIndex] = answers[randomIndex]
        answers[randomIndex] = temp;
    }
    return answers;
}
function showQuestion(question, shuffled) {
    var questionElement = document.getElementById('question');
    questionElement.innerText = question;
    var answersElement = document.getElementById('answers');
    answersElement.innerHTML = "";

    for (let i = 0; i < shuffled.length; i++) {
        var div = document.createElement('div');
        div.classList.add("mb-7", "rounded-2xl", "border-solid", "border-violet", "border-2", "p-3", "cursor-pointer");
        var p = document.createElement('p');
        p.classList.add("text-violet", "text-2xl");
        p.innerText = Object.values(shuffled[i]);
        div.appendChild(p);
        answersElement.appendChild(div)
        //var contain = document.getElementById('contain');
        questionElement.parentNode.insertBefore(answersElement, questionElement.nextSibling);
        // contain.appendChild(div);
    }
    // questionElement.parentNode.replaceChild(div, questionElement.nextSibling)
}
//Question 1
function question1() {
    var n = 0;
    var answers = [];
    var question = `The capital of ${countryArray[n].name.common} is:`
    answers.push({ true: countryArray[n].capital[0] })

    for (let i = n; i < 3; i++) {
        if (n + 1 < countryArray.length) {
            answers.push({ false: countryArray[n + 1].capital[0] })

        } else {
            answers.push({ false: countryArray[n - i].capital[0] })
        }
        n++;
    }
    var shuffled = shuffle(answers);
    showQuestion(question, shuffled);
}

//Question 2
function question2() {
    var n = 0;
    var answers = [];
    var question = `The languaje of ${countryArray[n].name.common} is:`
    answers.push({ true: Object.values(countryArray[n].languages) })

    for (let i = n; i < 3; i++) {
        if (n + 1 < countryArray.length) {
            answers.push({ false: Object.values(countryArray[n + 1].languages) })

        } else {
            answers.push({ false: Object.values(countryArray[n - i].languages) })
        }
        n++;
    }
    var shuffled = shuffle(answers);
    showQuestion(question, shuffled);
}
//Question 3
function question3() {
    var n = 0;
    var answers = [];
    var question = `The currency of ${countryArray[n].name.common} is:`
    answers.push({ true: Object.values(countryArray[n].currencies)[0].name })
    for (let i = n; i < 3; i++) {
        if (n + 1 < countryArray.length) {
            answers.push({ false: Object.values(countryArray[n + 1].currencies)[0].name })

        } else {
            answers.push({ false: Object.values(countryArray[n - i].currencies)[0].name })
        }
        n++;
    }
    var shuffled = shuffle(answers);
    showQuestion(question, shuffled);
}
//Question 4
function question4() {
    var n = 0;
    var continents = ["America", "Europe", "Africa", "Asia", "Oceania"];
    var answers = [];
    var question = `What continent does ${countryArray[n].name.common} belong to:`
    answers.push({ true: countryArray[n].continents[0] })

    for (let i = 0; i < 5; i++) {
        if (Object.values(answers[0])[0] !== continents[i]) {
            answers.push({ false: continents[i] })
        }
        i++;
    }
    var shuffled = shuffle(answers);
    showQuestion(question, shuffled);
}

async function calls() {
    await getCountry();
    var next = document.getElementById('next');
    var numero = 2;
    next.addEventListener('click', function () {
        window["question" + numero]()
        numero++
    })
    question1();
}
calls();

