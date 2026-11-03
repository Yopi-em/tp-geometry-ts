import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder.ts";

describe("test EnvelopeBuilder", () => {
    
    it("test without coord", () => {
        const builder = new EnvelopeBuilder();
        const result = builder.build();

        expect(Number.isNaN(result.getXmax())).to.be.true;
        expect(Number.isNaN(result.getYmax())).to.be.true;
        expect(Number.isNaN(result.getXmin())).to.be.true;
        expect(Number.isNaN(result.getYmin())).to.be.true;
        expect(result.isEmpty()).to.be.true;
        expect(result.toString()).to.equal("[]");
    });
    it("test with coord", () => {
        const builder = new EnvelopeBuilder();
        //  Test insert
        builder.insert([0.0,1.0]);
        builder.insert([2.0,0.0]);
        builder.insert([1.0,3.0]);
        const result = builder.build();

        expect(result.getXmin()).to.equal(0.0);
        expect(result.getXmax()).to.equal(2.0);
        expect(result.getYmin()).to.equal(0.0);
        expect(result.getYmax()).to.equal(3.0);
        expect(result.toString()).to.equal("[0,0,2,3]");
        expect(result.isEmpty()).to.be.false;        
    })
})