(async () => {
    const db = require("./db");
    console.log("Começou");

    console.log('INSERT INTO CLIENTS');
    const result = await db.insertCustomer({ nome: "Zé", idade: 18, UF: "SP" });
    console.log(result.rowCount);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(1, { nome: "Zé José", idade: 19, UF: "SC" });
    console.log(result2.rowCount);

    console.log('DELETE FROM CLIENTES');
    const result3 = await db.updateCustomer(1);
    console.log(result3.rowCount);
})