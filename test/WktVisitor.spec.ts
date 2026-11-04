import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";
import WktVisitor from "../src/WktVisitor";

describe("test WktVisitor", () => {
    it("test visitor Point", () => {
        const visitor = new WktVisitor();
        const geometry = new Point([3.0,4.0]);
        geometry.accept(visitor);
        expect(visitor.getResult()).to.equal("POINT(3.0 4.0)")

    })
    it("test visitor LineString", () => {
        const visitor = new WktVisitor();
        const a = new Point([0.0, 1.0]);
        const b = new Point([4.0, 2.0]);
        const c = new Point([5.0, 4.0]);
        const l = new LineString([a,b,c]);
        l.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING(0.0 1.0,4.0 2.0,5.0 4.0)");
    })
})