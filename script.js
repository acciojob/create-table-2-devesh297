function createTable() {
    let rn = prompt("Input number of rows:");
    let cn = prompt("Input number of columns:");
    
    console.log("Rows:", rn, "Columns:", cn); 
    
    // Validate input
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }
    
    rn = parseInt(rn);
    cn = parseInt(cn);
    
    const table = document.getElementById("myTable");
    if (!table) {
        console.error("Table element not found!"); 
        return;
    }
    
    table.innerHTML = ""; // Clear previous table
    
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
    
    console.log("Table created successfully!"); // Debugging step
}
