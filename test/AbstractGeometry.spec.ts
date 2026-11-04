import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test AbstractGeometry", () => {
    it("test asText Point", () => {
        const geometry = new Point([3.0,4.0]);
        expect(geometry.asText()).to.equal("POINT(3.0 4.0)")

    })
    it("test asText LineString", () => {
        const a = new Point([0.0, 1.0]);
        const b = new Point([4.0, 2.0]);
        const c = new Point([5.0, 4.0]);
        const l = new LineString([a,b,c]);
        expect(l.asText()).to.equal("LINESTRING(0.0 1.0,4.0 2.0,5.0 4.0)");
    })
})