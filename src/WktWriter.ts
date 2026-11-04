import LineString from "./LineString";
import Point from "./Point";
import Geometry from "./Geometry";

export default class WktWriter {

    write(geom: Geometry): string {
        if (geom.getType() == "Point"){
            const p = geom as Point;
            if(geom.isEmpty()){
                return "POINT EMPTY";
            } else{
                return "POINT(" + p.x().toFixed(1) + " " + p.y().toFixed(1) + ")";
            }
        }else if (geom.getType() == "LineString"){
            const l = geom as LineString;
            if(geom.isEmpty()){
                return "LINESTRING EMPTY";
            } else{
                let str = "LINESTRING(";
                const n = l.getNumPoints();
                for(let i = 0; i<n-1; i++){
                    str += l.getPointN(i).x().toFixed(1) + " " + l.getPointN(i).y().toFixed(1) + ",";
                }
                str += l.getPointN(n-1).x().toFixed(1) + " " + l.getPointN(n-1).y().toFixed(1) +")";
                return str;
            }
        }else{
            throw new TypeError("geometry type not supported");
        }
    }
}