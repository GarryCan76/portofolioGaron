import Jsml from './jsml.js';
import SideWindows from './windows.js';
const jsml = new Jsml();

export default class Project{
    constructor(projectData) {
        console.log(projectData)
        const container = document.getElementById('container');
        jsml.deleteChildren(container)
        let skeleton = jsml.elementFromHtml(`<div id="title"></div>`)
        container.appendChild(skeleton)
        if (projectData.iframe){
            const windows =  new SideWindows(jsml, container, projectData.iframe);
        }
        jsml.createHTMLElement('h1', document.getElementById('title'), projectData.name, 'inside')

        projectData.items.forEach(item=>{
            let childArray = []

            childArray.push(jsml.createHTMLElement('h2', false, item.title, 'inside'))
            if (item.text){
                childArray.push(jsml.createHTMLElement('p', false, item.text, 'around'))
            }
            // display images
            if (item.images){
                let imgs = [];
                item.images.forEach(image=>{
                    imgs.push(jsml.createHTMLElement('li', false, false, false, false, [jsml.createHTMLElement('img', false, false, false, {'src':image})]))
                })
                if (imgs.length > 1){
                    childArray.push(jsml.createHTMLElement('ul', false, false, 'around', {'classList':'split-image'}, imgs))
                }else {
                    childArray.push(jsml.createHTMLElement('ul', false, false, false, {'classList':'split-image'}, imgs))
                }
            }

            let itemDiv = jsml.createHTMLElement('div', container, false, 'around', false, childArray)
        })
    }

}