import { existsSync } from 'fs'

export class Controller {
    public model(model: string) {
        var Model = require(`../app/models/${model}.ts`)
        var initModel = new Model()
        return initModel
    }

    public view(view: string, data: []){
        let filePath = `../app/views/${view}.ts`
        if (existsSync(filePath)) {
            require(filePath)
        } else {
            throw new Error('view does not exist')
        }
    }
}