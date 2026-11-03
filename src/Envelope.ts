import Coordinate from "./Coordinate";

export default class Envelope {
    private bottomLeft?: Coordinate;
    private topRight?: Coordinate;

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate){
        this.bottomLeft = bottomLeft? bottomLeft : [] ;
        this.topRight = topRight? topRight : [] ;
    }

    isEmpty(): Boolean{
        return this.topRight.length === 0 
            || this.bottomLeft.length === 0; //true si vide
    }

    getXmin(): number {
        if(!this.isEmpty()){
            return Math.min(this.topRight[0], this.bottomLeft[0]);

        }else{
            return Number.NaN;
        }
    }
    getYmin(): number {
        if(!this.isEmpty()){
            return Math.min(this.topRight[1], this.bottomLeft[1]);

        }else{
            return Number.NaN;
        }
    }
    getXmax(): number {
        if(!this.isEmpty()){
            return Math.max(this.topRight[0], this.bottomLeft[0]);

        }else{
            return Number.NaN;
        }
    }
    getYmax(): number {
        if(!this.isEmpty()){
            return Math.max(this.topRight[1], this.bottomLeft[1]);

        }else{
            return Number.NaN;
        }
    }

    toString(): String {
        if(!this.isEmpty()){
            return "[" + this.getXmin() + ","
                        + this.getYmin() + ","
                        + this.getXmax() + ","
                        + this.getYmax() + "]"
        }else{
            return "[]"
        }
    }
}