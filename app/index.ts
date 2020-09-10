import http, {IncomingMessage, ServerResponse} from 'http'
import { Controller, Core, Database } from './bootstrap'

class Server {
    constructor() {
        const server = http.createServer(
            (req: IncomingMessage, res: ServerResponse) => {
                this.requestHandler(req, res)
            })
        server.listen('3000')
    }

    private requestHandler(req: IncomingMessage, res: ServerResponse):void {
        let core = new Core("aaaa")
        res.end(core.name)
    }
}

const server:Server = new Server()