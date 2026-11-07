import Point from "./Point";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";
console.log("AbstractGeometry =", AbstractGeometry);

export default class LineString extends AbstractGeometry {
    private points?: Point[];

    constructor(points?: Point[]) {
        super();
        this.points = points ? points : [];
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point {
        return this.points[n];
    }

    getType(): String {
        return "LineString";
    }

    isEmpty(): Boolean {
        return this.points.length === 0; //true si vide
    }
    translate(dx: number, dy: number): void {
        if(!this.isEmpty()){
            for (let i=0; i < this.getNumPoints(); i++){
                this.getPointN(i).translate(dx, dy);
            }
        }
    }

    clone(): LineString {
        let list = []
        for (let i=0; i < this.getNumPoints(); i++){
            list.push(this.getPointN(i).clone());
        }
        return new LineString(list);
        
    }

    accept(visitor: GeometryVisitor): void {
        visitor.visitLineString(this);
    }
}