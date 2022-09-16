const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;


describe("substitution()", () => {
    it("returns false if the given alphabet is greater than 26 characters in length", () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyza";
        const actual = substitution("test", alphabet);
        const expected = false; 
        expect(actual).to.equal(expected);
    });

    it("returns false if the given alphabet is less than 26 characters in length", () => {
        const alphabet = "abcdefghijklmnopqrstuvwxy";
        const actual = substitution("test", alphabet);
        const expected = false; 
        expect(actual).to.equal(expected);
    });

    it("correctly encodes a given phrase, based on the alphabet given to the function", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution("test", alphabet);
        const expected = "gvhg";
        expect(actual).to.equal(expected);
    });

    it("correctly decodes a given phrase, based on the alphabet given to the function", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution("gvhg", alphabet, false);
        const expected = "test";
        expect(actual).to.equal(expected);
    });

    it("returns false if there are any duplicate characters in the given alphabet", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcaa"
        const actual = substitution("test",alphabet);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("maintains spaces in the message, after encoding", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution("a b", alphabet);
        const expected = "z y";
        expect(actual).to.equal(expected);
    });

    it("maintains spaces in the message, after decoding", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution("z y", alphabet, false);
        const expected = "a b";
        expect(actual).to.equal(expected);
    });

    it("ignores capital letters when encoding", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution("A", alphabet);
        const expected = "z";
        expect(actual).to.equal(expected);
    });

    it("ignores capital letters when decoding", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution("Z", alphabet, false);
        const expected = "a";
        expect(actual).to.equal(expected);
    });
})
