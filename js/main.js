import Jsml from './jsml.js';
import {homePage} from './homepage.js'
const jsml = new Jsml();

let fileExplorer = document.getElementById('file-explorer')
let portfolio = jsml.createHTMLElement('p', fileExplorer, 'portfolio', false, {'classList':'file', 'addEventListener':['click', ()=>{
        if (portfolio.children.length === 0){
            jsml.createHTMLElement('p', portfolio, 'home page', false)
        }else {
            jsml.deleteChildren(portfolio)
        }
    }]})

homePage()