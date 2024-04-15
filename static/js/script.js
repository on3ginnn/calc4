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

    document.addEventListener('click', clickEvent);

    function showTablet(){
        (!eq) ? eq = '0' : (eq === 'Infinity') ? eq = 'ERROR' : eq;

        tablet.innerHTML = eq;
    }
    function _eq(value) {
        return eval(value);
    }

    function clickEvent(event) {
        (eq === 'ERROR') ? eq = '0' : eq;

        if (event.target.closest('.key_digit')) {
            (eq === '0') ? eq = '' : eq;

            let digitKey = event.target.closest('.key_digit').classList;
            let digitKeyChar = digitKey[digitKey.length - 1];
            resChar = chars[digitKeyChar];
            eq += resChar;
        }
        if (event.target.closest('._plus')) {
            let opKey = event.target.closest('._plus').classList;
            let opKeyChar = opKey[opKey.length - 1];
            resChar = chars[opKeyChar] + '';
            eq += resChar;
        }
        if (event.target.closest('._minus')) {
            let opKey = event.target.closest('._minus').classList;
            let opKeyChar = opKey[opKey.length - 1];
            resChar = chars[opKeyChar] + '';
            eq += resChar;
        }
        if (event.target.closest('._multiply')) {
            let opKey = event.target.closest('._multiply').classList;
            let opKeyChar = opKey[opKey.length - 1];
            resChar = chars[opKeyChar] + '';
            eq += resChar;
        }
        if (event.target.closest('._division')) {
            let opKey = event.target.closest('._division').classList;
            let opKeyChar = opKey[opKey.length - 1];
            resChar = chars[opKeyChar] + '';
            eq += resChar;
        }
        if (event.target.closest('._eq')) {
            eq = _eq(eq) + '';
        }
        if (event.target.closest('.key_delete')){
            eq = '0';
        }
        if (event.target.closest('._backcspace')) {
   
            eq = (eq + '').slice(0, eq.length - 1);
        }
        showTablet();
    }

});