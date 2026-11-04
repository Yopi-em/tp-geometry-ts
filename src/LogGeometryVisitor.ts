import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor {
    visitPoint(point: Point): void {
        let str = "Je suis un point"; 
        if(point.isEmpty()){
            console.log(str + " vide.\n");
        } else {
            console.log(str + " avec x="+ point.x().toFixed(1) + " et y="+ point.y().toFixed(1) +".\n");
        }
    }

    visitLineString(linestr: LineString): void {
        let str = "Je suis une polyligne"; 
        if(linestr.isEmpty()){
            console.log(str + " vide.\n");
        } else {
            console.log(str + " définie par "+ linestr.getNumPoints() +" point(s).\n");
        }
        
    }
}