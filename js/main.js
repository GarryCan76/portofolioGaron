import Jsml from './jsml.js';
import Project from './project.js';
import {homePage} from './homepage.js';
const jsml = new Jsml();
let projectCreator;


let fileExplorer = document.getElementById('file-explorer')


let home = createFile(false, 'home', false, homePage)
let projectsData = [
    {
        'name': '0SCILLATRON MK-1',
        'items':[
            {'title':'About 0SCILLATRON',
                'text':"This was the first project I made that I was really proud of. It's a very basic sequencer which allows you to create basic tunes. It lacks a lot of features, that has to do with the amount of time I had and also my programming knowledge. I must say that I still managed to make it a very cool looking project",
                'images':[
                    'projectimages/0SCILLATRONMK-1/0SCILLATRONMK-1.png',
                    'projectimages/0SCILLATRONMK-1/Screenshot_1.png',
                ]
            },
            {'title':'Synthesizer',
                'text':'The synthesizer allowed you do mix multiple oscillators and create interesting sounds',
                'images':[
                    'projectimages/0SCILLATRONMK-1/Screenshot_2.png'
                ]
            }
        ],
        'iframe':'projects/0SCILLATRONMK-1/index.html',
    },
    {
        'name': 'Game Project',
        'items':[
            {'title':'wow',
                'text':'wewefewef wefwe wfio iofmwef ewfiofomfew fewoi',
            }
        ],
    }
];
let tagStyle = jsml.createHTMLElement('style', fileExplorer, 'strong{display: inline-block;}')
let tags = true;
let projectsList = [];
projectsData.forEach(projectData=>{
    let p = createFile(false, projectData.name, false, Project, projectData)
    projectsList.push(p)
})
let projects = createFile(false, 'projects', projectsList)

let portfolio = createFile(fileExplorer, 'portfolio', [home, projects])
jsml.createHTMLElement('button', fileExplorer, 'hide tags', false, {'classList':'hide-tag', 'addEventListener':['click', ()=>{
        if (tags){
            tagStyle.innerHTML = 'strong{display: none;}';
            tags = false;
        }else {
            tagStyle.innerHTML = 'strong{display: inline-block;}';
            tags = true;
        }
        console.log(tags)
    }]})




function createFile(parent, text, children, pageType, pageData){
    if (pageType){
        // page
        let e = jsml.createHTMLElement('div', parent, false, false, {'classList':'file'}, [
            jsml.createHTMLElement('p', false, text, false, {'classList':'text', 'addEventListener':['click', ()=>{new pageType(pageData)}]}),
            document.createElement('div')
        ])
        e.children[0].innerHTML = '<i class="fa fa-file-code-o" style="color: #579142"></i>' + text;
        return e;
    }else if(children){
        // folder
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
// new Project(projectsData[0])