import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";

export default class Point implements Geometry {
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate? coordinate : [] ;
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate.length > 0 ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return this.coordinate.length > 1 ? this.coordinate[1] : Number.NaN ;
  }

  getType(): String {
    return "Point";
  }

  isEmpty(): Boolean {
        return this.coordinate.length === 0; //true si vide
    }

  translate(dx: number, dy: number): void {
    if(! this.isEmpty()){
      this.coordinate[0] += dx;
      this.coordinate[1] += dy;
    }
  }

  clone(): Point {
    return new Point([...this.coordinate]);
  }

  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    builder.insert(this.coordinate);
    return builder.build()
  }

  accept(visitor: GeometryVisitor): void {
    visitor.visitPoint(this);
  }
}
