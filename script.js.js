document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            let value = e.target.innerText;

            if (value === 'C') {
                display.value = '0';
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else if (display.value === '0') {
                display.value = value;
            } else {
                display.value += value;
            }
        });
    });
});