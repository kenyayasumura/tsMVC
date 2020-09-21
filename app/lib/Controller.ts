import fs from 'fs'
var path = require('path');


export class Controller {
    public model(model: string) {
        var Model = require(`../app/models/${model}.ts`)
        var initModel = new Model()
        return initModel
    }

    // public view(req: IncomingMessage, res: ServerResponse) {

    // }

    // public viewold(view: string, data: any[]){
    //     // let filePath = `/app/views/${view}.hbs`
    //     let filePath = `/Users/yasumurakenya/Documents/tsMVC/dist/views/index.html`

    //     try {
    //         if (fs.statSync(filePath)) {
    //             return filePath
    //         }
    //         return
    //     } catch (err) {
    //         console.log(path.dirname(__filename))
    //         if (err.code =='ENOENT')
    //             console.log('file not found' + `\n filepath: ${filePath}`)

    //         // throw new Error('view does not exist')
    //     }
    // }
}