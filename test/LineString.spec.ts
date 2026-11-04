import { describe, it, expect } from "vitest";
import LineString from "../src/LineString";
import Point from "../src/Point";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        // get num
        expect(l.getNumPoints()).to.equal(0);
        // get point N
        expect(l.getPointN(3)).to.equal(undefined);
        // isEmpty 
        expect(l.isEmpty()).to.be.true;
        // translate 
        l.translate(4.0, 2.0);
        expect(l.getPointN(3)).to.equal(undefined);
    });
    it("test constructor with points", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([4.0, 2.0]);

        const l = new LineString([a,b]);
        // clone
        const lCopy = l.clone();
        // get num
        expect(l.getNumPoints()).to.equal(2);
        // get point N
        expect(l.getPointN(0)).to.equal(a);
        expect(l.getPointN(1)).to.equal(b);
        expect(l.getPointN(3)).to.equal(undefined);
        // translate 
        lCopy.translate(4.0, 2.0);
        expect(l.getPointN(0)).to.equal(a);
        expect(l.getPointN(1)).to.equal(b);
        expect(lCopy.getPointN(0)).not.equal(a);
        expect(lCopy.getPointN(1)).not.equal(b);
        // isEmpty 
        expect(l.isEmpty()).to.be.false;
    });
    it("should return 'Point' for getType()", () => {
        const l = new LineString();
        expect(l.getType()).to.equal("LineString");
    })
    it("test envelope", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([4.0, 2.0]);
        const l = new LineString([a,b]);
        const e = new EnvelopeBuilder();
        e.insert([3.0,4.0]);
        e.insert([4.0,2.0]);
        const result = e.build();
        expect(l.getEnvelope()).to.deep.equal(result);

    });
});