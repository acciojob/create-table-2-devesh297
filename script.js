function createTable() {
    //Write your code here
    let rn = prompt("Input number of rows", "3");
    let cn = prompt("Input number of columns", "3");

    if (rn === null || cn === null || isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    rn = parseInt(rn);
    cn = parseInt(cn);

    let table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear existing table content

    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.innerHTML = Row-${i} Column-${j};
        }
    }
}