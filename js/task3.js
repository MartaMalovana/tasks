function showResult () {
    const form = document.querySelector('form');
    form.addEventListener('submit', checkNumber);

    function checkNumber(e) {
        e.preventDefault();
        const inputNumber = document.querySelector('input').value;
        let numbers = [];
        for(let i=1; i<=100; i+=1) {
            if(Math.pow(i,2) < inputNumber) numbers.push(i);
        }; 
        document.querySelector('.result').textContent = numbers.join(', ');   
    }
};

showResult();