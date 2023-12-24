export default class SideWindows{
    constructor(jsml, parent, iframe) {
        this.top_z = 1;
        this.jsml = jsml;

        let sideBar = jsml.elementFromHtml(`<div class="side-bar"></div>`);
        let sideBarArray = [];

        let Iframe = this.createSideWindow('Iframe', iframe);
        sideBarArray.push(Iframe)

        sideBarArray.forEach(sideWindow=>{
            let sideBarWindow = jsml.elementFromHtml(`<button class="side-bar-window">`+ sideWindow.id +`</button>`);
            sideBarWindow.addEventListener('click', ()=>{
                let windowPin = document.getElementsByClassName('pin');
                for (let i = 0; i < windowPin.length;i++){
                    if (windowPin[i] !== sideWindow){
                        windowPin[i].style.display = 'none';
                    }
                }
                if (sideWindow.style.display === 'none'){
                    sideWindow.style.display = 'inline';
                }else {
                    sideWindow.style.display = 'none';
                }
            })
            parent.appendChild(sideBarWindow)
        })
    }
    moveWindow(element, window){
        let offsetX, offsetY;
        window.addEventListener('mousedown', (e)=>{
            if (parseInt(window.style.zIndex) !== this.top_z){
                window.style.zIndex = ++this.top_z;
            }
        })
        const move = (e) =>{
            window.style.left = `${e.clientX - offsetX}px`;
            window.style.top = `${e.clientY - offsetY}px`;
        }
        element.addEventListener('mousedown', (e)=>{
            offsetX = e.clientX - window.offsetLeft;
            offsetY = e.clientY - window.offsetTop;
            document.addEventListener('mousemove', move);
        })
        document.addEventListener('mouseup', ()=>{
            document.removeEventListener('mousemove', move)
        })
    }
    createSideWindow(title, iframe){
        let window = this.jsml.elementFromHtml(`<div id="`+ title +`" class="window pin" style="display: none"></div>`);
        let windowTop = this.jsml.elementFromHtml(`<div class="window-top"></div>`);
        let windowBottom = this.jsml.elementFromHtml(`<div class="window-bottom"></div>`);
        windowBottom.appendChild(this.jsml.elementFromHtml(`<iframe class="walt" src="`+iframe+`">`));
        let dragBar = this.jsml.elementFromHtml(`<div class="drag-bar"></div>`);
        dragBar.innerHTML = title;
        let closeWindow = this.jsml.elementFromHtml(`<div class="close-window"></div>`);
        closeWindow.innerHTML = 'close';
        windowTop.appendChild(dragBar)

        windowTop.appendChild(closeWindow)
        closeWindow.addEventListener('click', ()=>{
            window.style.display = 'none';
        })

        this.moveWindow(dragBar, window)


        window.appendChild(windowTop)
        window.appendChild(windowBottom)
        document.body.appendChild(window)
        return window;
    }
}