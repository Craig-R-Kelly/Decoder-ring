// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

// testing encoder

describe("(Polybius) Checking encoder for both correct encryption and correct output type", () => {
    it("should achieve correct answer, and return it as a string (not a number).", () => {
        const input = ["string"];
        const expected = "344424423322"; // enclosed in quotes, ergo a string
        const actual = polybiusModule.polybius(input[0]);
        expect(actual).to.equal(expected);
    });
});

describe("(Polybius) Checking for encoder's maintenance of spaces between words", () => {
    it("should keept all spacing between words intact.", () => {
        const input = ["this kept the spacing"];
        const expected = "44324234 52515344 443251 34531131423322";
        const actual = polybiusModule.polybius(input[0]);
        expect(actual).to.equal(expected);
    });
});

describe("(Polybius) Checking for encoder's disregard of capitalization", () => {
    it("should encode all letters, whether lowercase or capital.", () => {
        const input = ["camelCasedSampleWord"];
        const expected = "3111235113311134514134112353135125432441";
        const actual = polybiusModule.polybius(input[0]);
        expect(actual).to.equal(expected);
    });
});

describe("(Polybius) Checking for rendering of 'i' and 'j'", () => {
    it("should encode both 'i' and 'j' as '42'.", () => {
        const input = ["Ian loves Jan"];
        const expected = "421133 1343155134 421133";
        const actual = polybiusModule.polybius(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

// testing decoder

describe("(Polybius) Checking for decoder's rejection of incorrect string length", () => {
    it("should return false if length of string, minus its spaces, is odd.", () => {
        const input = ["5433113131515344112113511", (encode = false)];
        const expected = false;
        const actual = polybiusModule.polybius(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Polybius) Checking for correct decoding of a word", () => {
    it("should correctly decode a word.", () => {
        const input = ["31432424513144", (encode = false)];
        const expected = "correct";
        const actual = polybiusModule.polybius(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Polybius) Checking for decoder's maintenance of spaces between words", () => {
    it("should keept all spacing between words intact.", () => {
        const input = ["345311315134 25512451 52515344", (encode = false)];
        const expected = "spaces were kept";
        const actual = polybiusModule.polybius(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Polybius) Checking for decoder's representation of both 'i' and 'j'", () => {
    it("should display both letters when decoding from '42'.", () => {
        const input = ["421133 1343155134 421133", (encode = false)];
        const expected = "(i/j)an loves (i/j)an";
        const actual = polybiusModule.polybius(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Polybius) Checking for decoder's handling of numbers not on the polybius square", () => {
    it("should decode all numeral pairs except those containing a digit with value greater than five.", () => {
        const input = ["56 113341 65 311133 334344 2151 41513143415141", (encode = false)];
        const expected = "56 and 65 can not be decoded";
        const actual = polybiusModule.polybius(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});


