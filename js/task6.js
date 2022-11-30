function showArray () {
    const form = document.querySelector('form');
    form.addEventListener('submit', getArray);
    let numberArr = [];

    function getArray(e) {
        e.preventDefault();
        const inputNumber = document.querySelector('input').value;
        if(inputNumber !== "") {
            //Change string from input to array of numbers
            const arr = inputNumber.split(",");
            arr.map(element => numberArr.push(Number(element)));
            //Create <p> to show customer's array as a string
            const showArr = document.createElement('p');
            showArr.textContent = `Ваш масив: [${numberArr.join(', ')}]`;
            document.querySelector('.result').append(showArr); 
            //Sort array 
            const sortedArr = numberArr.sort(function(a, b){return a - b});
            //Create <p> to show sorted array
            const showSortedArr = document.createElement('p');
            showSortedArr.textContent = `Ваш відсортований масив: [${sortedArr.join(', ')}]`;
            //Cut 2-4 elements
            const cutArr = sortedArr.splice(1, 3);
            //Create <p> to show array after cutting
            const showCutArr =  document.createElement('p');
            showCutArr.textContent = `Ваш відсортований масив без 2-4 елементів:   [${sortedArr.join(', ')}]`;
            // Add result to DOM (replace old result)
            document.querySelector('.result').innerHTML = '';
            document.querySelector('.result').append(showArr, showSortedArr, showCutArr); 
        };

    }
};

showArray();