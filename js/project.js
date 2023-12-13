export default class Project{
    constructor(jsml, projectData) {
        console.log(projectData)
        const container = document.getElementById('container');
        jsml.deleteChildren(container)
        jsml.createHTMLElement('h1', container, projectData.name, 'inside')

        projectData.items.forEach(item=>{
            console.log(item)


            let title = jsml.createHTMLElement('h2', false, item.title, 'inside')
            let text = jsml.createHTMLElement('p', false, item.text, false)
            let itemDiv = jsml.createHTMLElement('div', container, false, 'around', false, [title, text])
        })
    }
}