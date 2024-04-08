document.addEventListener('DOMContentLoaded', function(){
    const chars = {
        '_seven': '7',
        '_eight': '8',
        '_nine': '9',
        '_four': '4',
        '_five': '5',
        '_six': '6',
        '_one': '1',
        '_two': '2',
        '_three': '3',
        '_zero': '0',
        '_plus': '+',
        '_minus': '-',
        '_multiply': '*',
        '_division': '/',
    }

    const tablet = document.querySelector('.tablet div');
    let eq = '';

    function showTablet(){
        tablet.innerHTML = eq;
    }

    document.addEventListener('click', clickEvent);

    function clickEvent(event) {
        if (event.target.closest('.key_digit')) {
            let digitKey = event.target.closest('.key_digit').classList;
            let digitKeyChar = digitKey[digitKey.length - 1];
            resChar = chars[digitKeyChar];
            eq += resChar;
        }
        showTablet();
    }

});