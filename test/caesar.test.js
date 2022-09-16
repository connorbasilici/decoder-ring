const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;


describe("ceasar()", () => {
    it("should return false if the shift value is equal to 0", () => {
        const actual = caesar("test", 0);
        const expected = false; 
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is less than -25", () => {
        const actual = caesar("test", -26);
        const expected = false; 
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is greater than 25", () => {
        const actual = caesar("test", 26);
        const expected = false; 
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is not present", () => {
        const actual = caesar("test");
        const expected = false; 
        expect(actual).to.equal(expected);
    });


    it("ignores capital letters", () => {
        const actual = caesar("TEST", 1);
        const expected = "uftu";
        expect(actual).to.equal(expected);

    });

    it("handles shifts that go past the end of the alphabet", () => {
        const actual = caesar("z", 2);
        const expected = "b";
        expect(actual).to.equal(expected);
    });

    it("handles shifts that go past the beginning of the alphabet", () => {
        const actual = caesar("a", 2, false);
        const expected = "y";
        expect(actual).to.equal(expected);
    });

    it("maintains spaces and other nonalphabetic symbols in the message after encoding", () => {
        const actual = caesar("ab c!", 1);
        const expected = "bc d!";
        expect(actual).to.equal(expected);
    });

    it("maintains spaces and other nonalphabetic symbols in the message after decoding", () => {
        const actual = caesar("bc d!", 1, false);
        const expected = "ab c!";
        expect(actual).to.equal(expected);
    });
})