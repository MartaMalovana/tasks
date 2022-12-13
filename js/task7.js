function showPhoto () {
    const button = document.querySelector('.submitPhoto');
    button.addEventListener('click', showRandomPhoto);

    function showRandomPhoto (e) {
        e.preventDefault();
        // Get random number
        let randomNumber = null;
        randomNumber= Math.floor(Math.random() * 10);
        if(randomNumber === 0) {
            randomNumber = 1;
        };
        // Show random number in DOM
        const title = document.querySelector('.randomNumber');
        title.textContent = `Рандомне число: ${randomNumber}`;
        // Show result photo in DOM
        const result = document.querySelector('.resultPhoto');
        result.setAttribute('src', `../images/${randomNumber}.jpg`);
    }
};

showPhoto();