import { Database } from '../bootstrap'

export class Common {
    private db = new Database();

    public getAll(tableName:String) {
        return new Promise((resolve, reject) => {
            this.db.connection.query('SELECT * FROM ? ', [tableName], (err:any, results:any) => {
                if (err)
                    return reject(err)
                else
                    return resolve(results)
            })
        })
    }
}
