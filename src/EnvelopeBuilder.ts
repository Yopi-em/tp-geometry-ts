import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private coordonnes: Coordinate[] = [];
    private xmax: number = Number.NaN;
    private xmin: number = Number.NaN;
    private ymax: number = Number.NaN;
    private ymin: number = Number.NaN;

    insert(coord: Coordinate): void {
        if(this.coordonnes.length === 0){
            this.xmin = coord[0];
            this.xmax = coord[0];
            this.ymin = coord[1];
            this.ymax = coord[1];
        } else {
            this.xmin = Math.min(coord[0], this.xmin);
            this.xmax = Math.max(coord[0], this.xmax);
            this.ymin = Math.min(coord[1], this.ymin);
            this.ymax = Math.max(coord[1], this.ymax);
        }
        this.coordonnes.push(coord);
    }

    build(): Envelope{
        if(this.coordonnes.length === 0){
            return new Envelope();
        }else{
            return new Envelope([this.xmin, this.ymin], [this.xmax, this.ymax]);
        }
    }
}