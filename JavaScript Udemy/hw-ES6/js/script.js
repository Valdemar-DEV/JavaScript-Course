class Options {
    constructor (height, width, bg, fontSize, textAlign, textColor, display, alignItem, jstCenter) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.textColor = textColor;
        this.display = display;
        this.alignItem = alignItem;
        this.jstCenter = jstCenter;
    }
    createDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}; color:${this.textColor}; display:${this.display}; align-items:${this.alignItem}; justify-content:${this.jstCenter} `;
        div.style.cssText = param;
        div.textContent = 'JUST DU IT';
    }
}

const item = new Options (300, 300, 'red', 20, 'center', 'gold', 'flex', 'center', 'center');

item.createDiv();