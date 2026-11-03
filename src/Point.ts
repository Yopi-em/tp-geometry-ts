import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

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
    const x = this.x();
    const y = this.y();
    return new Point([x,y]);
  }

}
