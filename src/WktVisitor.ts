import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";
import WktWriter from "./WktWriter";

export default class WktVisitor implements GeometryVisitor {
    private buffer: string = "";

    visitPoint(point: Point): void {
        let wkt = new WktWriter();
        this.buffer = wkt.write(point);
    }

    visitLineString(linestr: LineString): void {
        let wkt = new WktWriter();
        this.buffer = wkt.write(linestr);
    }

    getResult(): string {
        return this.buffer;
    }
}