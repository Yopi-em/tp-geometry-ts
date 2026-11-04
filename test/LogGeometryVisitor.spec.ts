import { describe, it, vi, expect } from "vitest";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {
    it('calls console.log Point', () => {
        // methode trouvé sur https://vitest.dev/api/vi, car je n'était pas sûr de la méthode demandée.
        using spy = vi.spyOn(console, 'log').mockImplementation(() => {});
        const visitor = new LogGeometryVisitor();
        const geometry = new Point([3.0,4.0]);
        geometry.accept(visitor);
        let str = "Je suis un point avec x=3.0 et y=4.0.\n"
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(str);
    });
    it('calls console.log LineString', () => {
        using spy = vi.spyOn(console, 'log').mockImplementation(() => {});
        const visitor = new LogGeometryVisitor();
        const a = new Point([4.0,2.0]);
        const geometry = new LineString([a]);
        geometry.accept(visitor);
        let str = "Je suis une polyligne définie par 1 point(s).\n"
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(str);
    });
    it('calls console.log Vide', () => {
        using spy = vi.spyOn(console, 'log').mockImplementation(() => {});
        const visitor = new LogGeometryVisitor();
        const geometry = new Point();
        geometry.accept(visitor);
        let str = "Je suis un point vide.\n"
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(str);

        const visitor2 = new LogGeometryVisitor();
        const geometry2 = new LineString();
        geometry2.accept(visitor2);
        let str2 = "Je suis une polyligne vide.\n"
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(str2);
    });
})