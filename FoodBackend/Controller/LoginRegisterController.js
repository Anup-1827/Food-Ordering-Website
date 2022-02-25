const sql = require('mssql/msnodesqlv8');
const config = require('./config')


console.log('starting sql');
const pool = new sql.ConnectionPool(config);
     pool.connect().then(() => { 
        pool.request().query('select * from LoginRegisterDetails', (err, result) => {
            if(err) console.log(err)
            else{
                return console.log({
                    data : result.recordset
                })
            }
        })
        sql.close();
})
    