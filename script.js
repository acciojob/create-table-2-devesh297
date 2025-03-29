function createTable() {
    let rn = prompt("Input number of rows", "3");
    let cn = prompt("Input number of columns", "3");

    // Convert input to numbers
    rn = parseInt(rn);
    cn = parseInt(cn);

    // Validate input
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    let table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear existing table content

    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.innerHTML = `Row-${i} Column-${j}`; // ✅ Corrected Template String
        }
    }
}
