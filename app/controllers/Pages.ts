import { Controller } from "../lib/Controller";
import { Session } from "inspector";

class Pages extends Controller {
    public constructor() {
        super();
    }

    public index() {
        // local storage
        // localStorage.setItem('key', 'value')
        // localStorage.getIten('key')
        // localStorage.removeItem('key')

        // // session storage
        // sessionStorage.setItem('key', 'value')
        // sessionStorage.getItem('key')
        // sessionStorage.removeItem('key')

        // //cookie
        // document.cookie = 'key=value'
    }
}