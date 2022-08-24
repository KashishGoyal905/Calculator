let string = "";
let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
buttons.forEach((x) => {
    x.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            display.innerHTML = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            display.innerHTML = string;
        } else {
            string = string + e.target.innerHTML;
            display.innerHTML = string;
        }

    })
})      