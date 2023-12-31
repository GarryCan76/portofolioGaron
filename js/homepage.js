import Jsml from './jsml.js';

const jsml = new Jsml();

export function homePage (){
    let elements = [];
    let container =  document.getElementById('container');
    jsml.deleteChildren(container)
//     skeleton
    container.appendChild(jsml.elementFromHtml('<div id="title"></div>'))
    container.appendChild(jsml.elementFromHtml('<div id="about-me"></div>'))
    container.appendChild(jsml.elementFromHtml('<div id="my-projects"></div>'))
    container.appendChild(jsml.elementFromHtml('<div id="testimonials"></div>'))
    container.appendChild(jsml.elementFromHtml('<div id="contact-me">'))

// title
    elements.push(jsml.createHTMLElement('h1', document.getElementById('title'), 'Garon el Malli', 'inside'))
    elements.push(jsml.createHTMLElement('h2', document.getElementById('title'), 'Welcome to my homepage name', 'inside'))

// about me
    let aboutH2 = jsml.createHTMLElement('h2', document.getElementById('about-me'), 'About me', 'inside');
    let aboutH3 = jsml.createHTMLElement('h3', false, 'About me', 'inside');
    let aboutP = jsml.createHTMLElement('p', false,
        `Hello, I'm Garon el Malli 20 years old and I am a web developer. I live in Apeldoorn with my family and my cat Hector.
        I like to listen to music, watch movies and play games. My favorite artist is beethoven :) and my favorite movie director is Stanley Kubric.
        I tend to be relatively quiet when I'm working, but if I'm working in a group I have no problem communicating. I have heard people say I am more of a programmer than a web
         developer, so yea if you need so code dont mind asking me.`);
    let about1 = jsml.createHTMLElement('div', false, '', false, false, [aboutH3, aboutP]);

    aboutH3 = jsml.createHTMLElement('h3', false, 'My goals and skills', 'inside');
    aboutP = jsml.createHTMLElement('p', false,
        `I wish to reach my maximum potential when it comes to programming, I really have a passion for it and I like to learn new things and improve my own work style.
        I would say that I am quite well versed in JavaScript and python. I really enjoy JavaScript and I like to find new ways to make my code more efficient. I think one of my skills is also:
        being able to adapt to different work styles.`);
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