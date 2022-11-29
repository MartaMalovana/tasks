function showResult () {
    let rate = 27;
    //Create table
    const table = document.createElement('table');
    // Create head
    const head = document.createElement('thead');    
    const rowHead = document.createElement('tr');
    const cell1 = document.createElement('th');
    cell1.textContent = 'USD';
    const cell2 = document.createElement('th');
    cell2.textContent = 'UAH';
    rowHead.append(cell1, cell2);
    head.append(rowHead);
    // Create body
    const body = document.createElement('tbody');
    for(let i=10; i<=100; i+=10) {
        const rowBody = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = i;
        rowBody.append(cell1);
        const cell2 = document.createElement('td');
        cell2.textContent = i * rate;
        rowBody.append(cell2);
        body.append(rowBody);
    }
    // Add table to DOM
    table.append(head, body);
    document.querySelector('.result').append(table);
};

showResult();