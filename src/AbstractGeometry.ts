import type Geometry from "./Geometry";
import type GeometryVisitor from "./GeometryVisitor";
import type Envelope from "./Envelope";
import WktVisitor from "./WktVisitor";

export default abstract class AbstractGeometry implements Geometry {
    abstract getType(): String;
    abstract isEmpty(): Boolean;
    abstract translate(dx: number, dy: number): void;
    abstract clone(): Geometry;
    abstract getEnvelope(): Envelope;
    abstract accept(visitor: GeometryVisitor): void;

    asText(): string {
        const visitor = new WktVisitor();
        this.accept(visitor);
        return visitor.getResult();
    }
    

}