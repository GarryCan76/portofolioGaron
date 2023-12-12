import Jsml from './jsml.js';

const jsml = new Jsml();

export function homePage (){
    let elements = [];
// welcome
    elements.push(jsml.createHTMLElement('h1', document.getElementById('welcome'), 'title', 'inside'))
    elements.push(jsml.createHTMLElement('h2', document.getElementById('welcome'), 'Welcome to my homepage name', 'inside'))

// about me
    let aboutH2 = jsml.createHTMLElement('h2', document.getElementById('about-me'), 'About me', 'inside');
    let aboutH3 = jsml.createHTMLElement('h3', false, 'Who am I', 'inside');
    let aboutP = jsml.createHTMLElement('p', false,
        'Lorem ipsum dolor sit amet. Qui quaerat nostrum qui facilis culpa rem cumque amet quo ' +
        'nihil commodi vel iste alias aut velit soluta. Aut dicta facilis ab modi Quis ea ' +
        'velit officiis At soluta exercitationem aut magni quia At debitis corporis ea nemo quae.',
        'around');
    let about1 = jsml.createHTMLElement('div', false, '', false, false, [aboutH3, aboutP]);

    aboutH3 = jsml.createHTMLElement('h3', false, 'My goals', 'inside');
    aboutP = jsml.createHTMLElement('p', false,
        'Lorem ipsum dolor sit amet. Qui quaerat nostrum qui facilis culpa rem cumque amet quo ' +
        'nihil commodi vel iste alias aut velit soluta. Aut dicta facilis ab modi Quis ea ' +
        'velit officiis At soluta exercitationem aut magni quia At debitis corporis ea nemo quae.',
        'around');
    let about2 = jsml.createHTMLElement('div', false, '', false, false, [aboutH3, aboutP]);
    let aboutSplit = jsml.createHTMLElement('div', document.getElementById('about-me'), '', 'around', {'classList':'split'}, [about1, about2]);

//my projects
    let projectH2 = jsml.createHTMLElement('h2', document.getElementById('my-projects'), 'My projects', 'inside');
    function project(title, image, url){
        let projectH3 = jsml.createHTMLElement('h3', false, title, 'inside');
        let projectImage = jsml.createHTMLElement('img', false, false, 'inside', {'src':image});
        let projectButton = jsml.createHTMLElement('button', false, 'Go to project', 'inside', {'addEventListener':['click', ()=>{
                window.location = url;
            }]});
        return jsml.createHTMLElement('li', false, '', false, false, [projectH3, projectImage, projectButton]);
    }
    let project1 = project('Project 1', 'https://picsum.photos/200/200', 'http://localhost:63342/portofolio/index.php')
    let project2 = project('Project 2', 'https://picsum.photos/200/200', 'http://localhost:63342/portofolio/index.php')
    let project3 = project('Project 3', 'https://picsum.photos/200/200', 'http://localhost:63342/portofolio/index.php')
    let split = jsml.createHTMLElement('ul', document.getElementById('my-projects'), '', 'around', {'classList':'projects'}, [project1, project2, project3]);

// testimonials
    let testimonialH2 = jsml.createHTMLElement('h2', document.getElementById('testimonials'), 'Testimonials', 'inside');

    let testimonialH3 = jsml.createHTMLElement('h3', false, 'testimonial 1', 'inside');
    let testimonialWriter = jsml.createHTMLElement('h4', false, 'Written by walter', 'inside');
    let testimonialP = jsml.createHTMLElement('p', false,
        'Lorem ipsum dolor sit amet. Qui quaerat nostrum qui facilis culpa rem cumque amet quo ' +
        'nihil commodi vel iste alias aut velit soluta. Aut dicta facilis ab modi Quis ea ' +
        'velit officiis At soluta exercitationem aut magni quia At debitis corporis ea nemo quae.',
        'around');
    let testimonial1 = jsml.createHTMLElement('div', false, '', false, false, [testimonialH3, testimonialWriter, testimonialP]);

    testimonialH3 = jsml.createHTMLElement('h3', false, 'testimonial 2', 'inside');
    testimonialWriter = jsml.createHTMLElement('h4', false, 'Written by walter', 'inside');
    testimonialP = jsml.createHTMLElement('p', false,
        'Lorem ipsum dolor sit amet. Qui quaerat nostrum qui facilis culpa rem cumque amet quo ' +
        'nihil commodi vel iste alias aut velit soluta. Aut dicta facilis ab modi Quis ea ' +
        'velit officiis At soluta exercitationem aut magni quia At debitis corporis ea nemo quae.',
        'around');
    let testimonial2 = jsml.createHTMLElement('div', false, '', false, false, [testimonialH3, testimonialWriter, testimonialP]);
    let testimonialSplit = jsml.createHTMLElement('div', document.getElementById('testimonials'), '', 'around', {'classList':'split'}, [testimonial1, testimonial2]);

}