import LineString from "./LineString";
import Point from "./Point";
import Geometry from "./Geometry";

export default class WktWriter {

    write(geom: Geometry): string {
        if ( geom instanceof Point ){
            if(geom.isEmpty()){
                return "POINT EMPTY";
            } else{
                return "POINT(" + geom.x() + " " + geom.y() + ")";
            }
        }else if ( geom instanceof LineString ){
            if(geom.isEmpty()){
                return "LINESTRING EMPTY";
            } else{
                let str = "LINESTRING(";
                const n = geom.getNumPoints()
                for(let i = 0; i<n-1; i++){
                    str += geom.getPointN(i).x() + " " + geom.getPointN(i).y() + ",";
                }
                str += geom.getPointN(n-1).x() + " " + geom.getPointN(n-1).y() +")";
                return str;
            }
        }else{
            throw new TypeError("geometry type not supported");
        }
    }
}