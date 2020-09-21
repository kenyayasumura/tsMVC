import http, { IncomingMessage, ServerResponse } from 'http'
import { Controller, Core, Database } from './bootstrap'
import urlParser from 'url'
import fs from 'fs'
import handlebars from 'handlebars'
import { parse } from 'path'
import { loadavg } from 'os'

class Server {
    public rooting(request: { url: string; }) {
        var url = urlParser.parse(request.url)
    }

    constructor() {
        const port = process.env.PORT || 3000
        const server = http.createServer(
            (req: IncomingMessage, res: ServerResponse) => {
                this.requestHandler(req, res)
            })
        server.listen(port, ()=> {
            console.log('To view your app, open this link in your browser: http://localhost:' + port)
        })
    }



    private requestHandler(req: IncomingMessage, res: ServerResponse):void {

        // https://www.youtube.com/watch?v=utI4tU7q-HE

        let parsedURL = urlParser.parse(req.url!, true)
        let path = parsedURL.pathname!
        path = path.replace(/^\/+|\/+$/g, '')
        console.log(path)
        let qs = parsedURL.query
        let headers = req.headers
        let method = req.method?.toLowerCase()


        req.on('data', () => {
            console.log('got some data')
        })

        req.on('end', () => {
            console.log('send response')
            let route =
                typeof routes[path] != 'undefined' ? routes[path] : routes['notFound']
            let data:object = {
                path: path,
                queryString: qs,
                headers: headers,
                method: method,
                buffer: ''
            }

            route(data, res)
        })

        // fs.readFile('app/views/index.hbs', 'utf-8', (err, data) => {
        //     if (err) {
        //         console.log(err)
        //         res.writeHead(404)
        //         res.write('file not found')
        //         res.end()
        //     } else {
        //         let source = data
        //         let template = handlebars.compile(source)
        //         res.writeHead(200, {'Content-Type': 'text/html'})
        //         // var source = data.toString();
        //         // renderToString(source, data);

        //         var dummy = [
        //             {
        //               "id": 0,
        //               "name": "Erik Raymond",
        //               "work": "ForeTrust",
        //               "email": "erik.raymond@foretrust.net",
        //               "dob": "1941",
        //               "address": "31 Hill Street",
        //               "city": "Fresno",
        //               "optedin": true
        //             }
        //         ]

        //         res.write(template(dummy))
        //         res.end()
        //     }
        // })


        // let controller = new Controller()
        // let targetView = controller.view('index', [])
        // fs.readFile(targetView, 'utf-8', function (_error: any, data: any) {
        //     res.writeHead(200, {'Content-Type' : 'text/html'});
        //     res.write(data);
        //     res.end();
        // })
    }

    // function renderToString(source, data) {
    //     var template = handlebars.compile(source);
    //     var outputString = template(data);
    //     return outputString;
    // }
}

const routes:any = {
    kenny: (data:object,res:ServerResponse)=> {
        let payload = {
            name: "Kenny"
        }
        let payloadStr = JSON.stringify(payload)
        res.setHeader('Content-Type', 'Application/Json')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.writeHead(200)
        res.write(payloadStr)
        res.end('\n')
    },
    kenny2: (data:object,res:ServerResponse)=> {
    },
    kenny3: (data:object,res:ServerResponse)=>{
    },
    notFound: (data:object,res:ServerResponse)=> {
        let payload = {
            message: 'File Not Found',
            code: 404
        }
        let payloadStr = JSON.stringify(payload)
        res.setHeader('Content-Type', 'Application/Json')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.writeHead(404)
        res.write(payloadStr)
        res.end('\n')
    }
}

const server:Server = new Server()
