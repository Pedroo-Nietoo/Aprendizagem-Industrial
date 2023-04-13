async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg')
    const pool = new Pool({
        connectionString: 'postgres://qtnfbqsb:v7h-uRaXkSFWNwEeNR1qAB9lcN5R-Dct@kesavan.db.elephantsql.com/qtnfbqsb'
    });

    const client = await pool.connect();
    console.log("Criou pool de conex~es no PostgreSQL!")

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //Guardando pra isar sempre o mesmo pool de conexão

    global.connection = pool;
    return pool.connect();
}

async function selectCustomers() {
    const client = await connect();
    const res = await client.query('SELECT * FROM clientes');
    return res.rows;
}

// module.exports{ selectCustomers };