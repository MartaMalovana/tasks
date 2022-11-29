function showResult () {
    const form = document.querySelector('form');
    form.addEventListener('submit', checkNumber);

    function checkNumber(e) {
        e.preventDefault();
        const inputNumber = document.querySelector('input').value;
        for(let i=1; i<inputNumber; i+=1) {
            const a = Math.pow(3, i);
            if(a === Number(inputNumber)) {
                document.querySelector('.result').textContent = 'Так';
                return;
            };

            if(a > inputNumber) {
                document.querySelector('.result').textContent = 'Ні';
                return;
            };
        };
    }
};

showResult();