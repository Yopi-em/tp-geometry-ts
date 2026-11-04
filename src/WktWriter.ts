import LineString from "./LineString";
import Point from "./Point";
import Geometry from "./Geometry";

export default class WktWriter {

    write(geom: Geometry): string {
        if ( geom instanceof Point ){
            if(geom.isEmpty()){
                return "POINT EMPTY";
            } else{
                return "POINT(" + geom.x().toFixed(1) + " " + geom.y().toFixed(1) + ")";
            }
        }else if ( geom instanceof LineString ){
            if(geom.isEmpty()){
                return "LINESTRING EMPTY";
            } else{
                let str = "LINESTRING(";
                const n = geom.getNumPoints()
                for(let i = 0; i<n-1; i++){
                    str += geom.getPointN(i).x().toFixed(1) + " " + geom.getPointN(i).y().toFixed(1) + ",";
                }
                str += geom.getPointN(n-1).x().toFixed(1) + " " + geom.getPointN(n-1).y().toFixed(1) +")";
                return str;
            }
        }else{
            throw new TypeError("geometry type not supported");
        }
    }
}