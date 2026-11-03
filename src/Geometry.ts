import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Envelope from "./Envelope";

export default interface geometry{
    getType(): String;
    isEmpty(): Boolean;
    translate(dx: number, dy: number): void;
    clone(): geometry;
    getEnvelope(): Envelope;
}