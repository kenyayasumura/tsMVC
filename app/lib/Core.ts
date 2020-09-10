import { existsSync } from 'fs'
import { ucwords, getClass, isset } from '../helpers'

export class Core {
    protected currentController = 'Pages'
    protected currentMethod = 'index'
    protected $params = []

    public constructor() {
        let url: string[] = this.getUrl()

        if (existsSync(`../app/controllers/${ucwords(url[0])}.ts`)) {
            this.currentMethod = ucwords(url[0])
            // delete(url[0])
            url.splice(0,1)
        }

        require(`../app/controllers/${this.currentController}.ts`)
        let newController = getClass(this.currentController)
        this.currentController = new newController()

        if (isset(url[1])) {
            if (this.currentController, url[1]) {
                this.currentMethod = url[1]
                // delete(url[1])
                url.splice(1,1)
            }
        }
    }

    public getUrl() {
        // if (isset($_GET['url'])) {
        //     $url = rtrim($_GET['url'], '/');
        //     $url = filter_var($url, FILTER_SANITIZE_URL);
        //     $url = explode('/', $url);
        //     return $url;
        // }

        return ["aa","ii"]
    }
}
