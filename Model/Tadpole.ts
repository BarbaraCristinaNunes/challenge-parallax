class Tadpole 
{
    private positionX: number = 0;
    private positionY: number = 0;
    private evolution: any = ['img/tadpole-left.png', 'img/tadpole-evolution-1.png', 'img/tadpole-evolution-2.png', 'img/tadpole-evolution-3.png'];
    private dead: boolean = false;

    constructor(){

    }

    moveLeft(): number{

        if(this.positionX > 0){
            this.positionX -= 0.5;
            return this.positionX;
        }
    }

    moveRight(): number{
        if(this.positionX < 1400){
            this.positionX += 0.5;
            return this.positionX;
        }
    }

    moveDown(): number{
        if(this.positionY < 650){
            this.positionY += 0.5;
            return this.positionY;
        }
    }

    moveUp(): number{
        if(this.positionY > 0){
            this.positionY -= 0.5;
            return this.positionY;
        }
    }

    deadStatus(status): boolean{
        this.dead = status;
        return this.dead;
    }

    tadpolEvolution(index): string{
        return this.evolution[index];
    }
}