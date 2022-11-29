function showResult () {
    let result = [];
    for(let i=20; i<=30; i+=0.5) {
        result.push(i);
    };
    const p = document.querySelector('.result');
    p.textContent = result.join(', ');
};

showResult();