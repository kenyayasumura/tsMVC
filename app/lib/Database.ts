import mysql from 'mysql2'

export class Database {

    public connection: any

    private db_setting = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        multipleStatements: true
    }

    constructor() {
        try {
            this.connection = mysql.createConnection(this.db_setting)
            this.connection.connect((err:any) => {
                if (!err)
                    console.log('MYSQL CONNECTED')
                else
                    console.log('ERROR OCCURED : ' + JSON.stringify(err, undefined, 2))
            })
        } catch (err) {
            console.log(err)
        }
    }
}
