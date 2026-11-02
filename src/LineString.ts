import Point from "./Point";
import Geometry from "./Geometry";

export default class LineString implements Geometry {
    private points?: Point[];

    constructor(points?: Point[]) {
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
}