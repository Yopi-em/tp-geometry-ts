export default interface geometry{
    getType(): String;
    isEmpty(): Boolean;
    translate(dx: number, dy: number): void;
    clone(): geometry;
}