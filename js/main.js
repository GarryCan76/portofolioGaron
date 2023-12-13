import Jsml from './jsml.js';
import Project from './project.js';
import {homePage} from './homepage.js';
const jsml = new Jsml();
let projectCreator;


let fileExplorer = document.getElementById('file-explorer')


let home = createFile(false, 'home', false)

let projectsData = [
    {
        'name': '0SCILLATRON MK-1',
        'items':[
            {'title':'wow',
                'text':'wewefewef wefwe wfio iofmwef ewfiofomfew fewoi',
                'images':[]
            }
        ],
        'iframe':'path',
    },
    {
        'name': 'Game Project',
        'items':[
            {'title':'wow',
                'text':'wewefewef wefwe wfio iofmwef ewfiofomfew fewoi',
                'images':[]
            }
        ],
        'iframe':'path',
    }
];

let projectsList = [];
projectsData.forEach(projectData=>{
    let p = createFile(false, projectData.name, false, true, projectData)
    projectsList.push(p)
})
let projects = createFile(false, 'projects', projectsList)

let portfolio = createFile(fileExplorer, 'portfolio', [home, projects])




function createFile(parent, text, children, projectPage, projectData){
    if (projectPage){
        let e = jsml.createHTMLElement('div', parent, false, false, {'classList':'file'}, [
            jsml.createHTMLElement('p', false, text, false, {'classList':'text', 'addEventListener':['click', ()=>{projectCreator = new Project(jsml, projectData);}]}),
            document.createElement('div')
        ])
        e.children[0].innerHTML = '<i class="fa fa-file-code-o" style="color: #869299"></i>' + text;
        return e;
    }else {
        let e = jsml.createHTMLElement('div', parent, false, false, {'classList':'file'}, [
            jsml.createHTMLElement('p', false, text, false, {'classList':'text', 'addEventListener':['click', ()=>{fileStruct(e, children);}]}),
            document.createElement('div')
        ])
        if (children){
            e.children[0].innerHTML = '<i class="fa fa-folder" style="color: #869299"></i>' + text;
            e.children[0].innerHTML = '<i class="fa fa-angle-right" style="color: #869299"></i>' + e.children[0].innerHTML;
        }
        return e;
    }
}
function fileStruct(element, children){
    let container = element.children[1];
    let fileState = element.children[0].children[0];
    if (children){
        if (container.children.length > 0){
            jsml.deleteChildren(container)
            fileState.classList.remove('fa-angle-down');
            fileState.classList.add('fa-angle-right');
        }else {
            fileState.classList.remove('fa-angle-right');
            fileState.classList.add('fa-angle-down');
            children.forEach(child=>{
                container.appendChild(child)
            })
        }

    }
}
homePage()
