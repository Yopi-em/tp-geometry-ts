import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";

describe("test WktWriter", () => {
    it("test writer Point", () => {
        const p = new Point([3.0,4.0]);
        const writer = new WktWriter();
        expect(writer.write(p)).to.equal("POINT(3.0 4.0)");
        // Empty
        const p2 = new Point();
        const writer2 = new WktWriter();
        expect(writer2.write(p2)).to.equal("POINT EMPTY");

    })
    it("test writer LineString", () => {
        const a = new Point([0.0, 1.0]);
        const b = new Point([4.0, 2.0]);
        const c = new Point([5.0, 4.0]);
        const l = new LineString([a,b,c]);
        const writer = new WktWriter();
        expect(writer.write(l)).to.equal("LINESTRING(0.0 1.0,4.0 2.0,5.0 4.0)");
        //Empty
        const l2 = new LineString();
        const writer2 = new WktWriter();
        expect(writer2.write(l2)).to.equal("LINESTRING EMPTY");

    })
    it("test writer in other geom", () => {
        // A Tester avec une autre geometry (pas crée)
    })
})