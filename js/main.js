import Jsml from './jsml.js';
import {homePage} from './homepage.js';
const jsml = new Jsml();

let fileExplorer = document.getElementById('file-explorer')


let aboutMe = createFile(false, 'About me', false)
let example = createFile(false, 'example', false)
let testimonials = createFile(false, 'Testimonials', [example])
let home = createFile(false, 'home', [testimonials, aboutMe])



let project1 = createFile(false, 'project 1', false)
let project2 = createFile(false, 'project 2', false)
let project3 = createFile(false, 'project 3', false)
let project4 = createFile(false, 'project 4', false)
let projects = createFile(false, 'projects', [project1, project2, project3, project4])

let portfolio = createFile(fileExplorer, 'portfolio', [home, projects])


function createFile(parent, text, children){
    let e = jsml.createHTMLElement('div', parent, false, false, {'classList':'file'}, [
        jsml.createHTMLElement('p', false, text, false, {'classList':'text', 'addEventListener':['click', ()=>{fileStruct(e, children);}]}),
        document.createElement('div')
    ])
    return e;
}
function fileStruct(element, children){
    let container = element.children[1];

    if (children){
        if (container.children.length > 0){
            jsml.deleteChildren(container)
        }else {
            children.forEach(child=>{
                container.appendChild(child)
            })
        }

    }
}
homePage()