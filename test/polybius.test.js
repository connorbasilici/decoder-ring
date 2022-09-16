const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("polybius()", () => {
    it("translates the letters i and j to 42 when encoding", () => {
        const actual = polybius("ij");
        const expected = "4242";
        expect(actual).to.equal(expected);
    });

    it("translates 42 to (i/j) when decoding", () => {
        const actual = polybius("42", false);
        const expected = "(i/j)";
        expect(actual).to.equal(expected);
    });

    it("ignores capital letters when encoding", () => {
        const actual = polybius("A");
        const expected = "11"; 
        expect(actual).to.equal(expected);
    });

    it("maintains spaces in the message after encoding", () => {
        const actual = polybius("a b");
        const expected = "11 21";
        expect(actual).to.equal(expected);
    });

    it("maintains spaces in the message after decoding", () => {
        const actual = polybius("11 21", false);
        const expected = "a b";
        expect(actual).to.equal(expected);
    });
})