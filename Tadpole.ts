class Tadpole {
    div = document.createElement('div');
    #positionX : number = 100;
    #positionY : number = 50;    
    #evolution : string = "img/tadpole-left.png";
    #alive : boolean = true;

    constructor(x : number, y : number, evolution : string, alive : boolean)
    {
        this.#positionX = x;
        this.#positionY = y;
        this.#evolution = evolution;
        this.#alive = alive;
    }

    show()
    {
        main.appendChild(this.div);
        this.div.style.width = this.#positionX+"px";
        this.div.style.height = this.#positionY+"px";
        this.div.setAttribute("id", "tadpole");
        this.div.style.backgroundImage = this.#evolution;
    }

    moveTadpole()
    {
        "ola"
    }
}