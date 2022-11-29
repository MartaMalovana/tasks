function showResult () {
    const form = document.querySelector('form');
    form.addEventListener('submit', checkNumber);

    function checkNumber(e) {
        e.preventDefault();
        const inputNumber = document.querySelector('input').value;
        let answer;
        let arr = [];
        for(let i=2; i<inputNumber; i+=1) {
            if(inputNumber === 1) {
                document.querySelector('.result').textContent = 'Так';
                return;
            }
            if(Number.isInteger(inputNumber / i)) {
                arr.push(true);
            };
        }; 
        arr.includes(true) ?  answer = 'Ні' : answer = 'Так';
        document.querySelector('.result').textContent = answer;
    }
};

showResult();