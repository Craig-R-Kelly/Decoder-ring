// Write your tests here!
const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

// testing for valid module input

describe("(Substitution) Checking if substitution alphabet is too short", () => {
    it("should return false if substitution alphabet is shorter than 26 characters.", () => {
        const input = ["input", "abcdefghijklmnopqrstuvwxy"];
        const expected = false;
        const actual = substitutionModule.substitution(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Substitution) Checking if substitution alphabet is too long", () => {
    it("should return false if substitution alphabet is longer than 26 characters.", () => {
        const input = ["input", "1abcdefghijklmnopqrstuvwxyz"];
        const expected = false;
        const actual = substitutionModule.substitution(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Substitution) Checking for unique characters in substitution alphabet", () => {
    it("should return false if any characters are duplicates.", () => {
        const input = ["input", "abcdefghijklmmopqrstuvwxyz"];
        const expected = false;
        const actual = substitutionModule.substitution(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

// tests on encoder

describe("(Substitution) Checking encoder for correct encoding of a word", () => {
    it("should return a word correctly encoded with the sustitute alphabet.", () => {
        const input = ["encoded", "zyxwvutsrqponmlkjihgfedcba"];
        const expected = "vmxlwvw";
        const actual = substitutionModule.substitution(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Substitution) Checking encoder for maintaining of spaces", () => {
    it("should return encoded message with spaces preserved.", () => {
        const input = ["several spaces are in this message", "zyxwvutsrqponmlkjihgfedcba"];
        const expected = "hvevizo hkzxvh ziv rm gsrh nvhhztv";
        const actual = substitutionModule.substitution(input[0], input[1], input[2]);
        expect(actual).to.equal(expected);
    });
});

describe("(Substitution) Checking encoder for disregard of capitalization", () => {
    it("should return an encoded message in all lowercase.", () => {
        const input = ["John Jacob Jingleheimer Schmidt", "zyxwvutsrqponmlkjihgfedcba"];
        const expected = "qlsm qzxly qrmtovsvrnvi hxsnrwg";
        const actual = substitutionModule.substitution(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Substitution) Checking encoder for functionality with non-letters in substitution alphabet", () => {
    it("should return a correctly encoded message.", () => {
        const input = ["the quick brown fox jumps over the lazy dog","z1x!v2t@r3p#n4$k5i%g6e^c7a"];
        const expected = "g@v 56rxp 1i$^4 2$c 36nk% $evi g@v #za7 !$t";
        const actual = substitutionModule.substitution(input[0], input[1], input[2]);
        expect(actual).to.equal(expected);
    });
});

// tests on decoder

describe("(Substitution) Checking decoder for correct decoding of a word", () => {
    it("should return a word correctly decoded from the substitute alphabet.", () => {
        const input = ["wvxlwvw","zyxwvutsrqponmlkjihgfedcba", (encode = false)];
        const expected = "decoded";
        const actual = substitutionModule.substitution(input[0], input[1], input[2]);
        expect(actual).to.equal(expected);
    });
});

describe("(Substitution) Checking decoder for maintaining of spaces", () => {
    it("should return decoded message with spaces preserved.", () => {
        const input = ["hvevizo hkzxvh ziv rm gsrh nvhhztv", "zyxwvutsrqponmlkjihgfedcba"];
        const expected = "several spaces are in this message";
        const actual = substitutionModule.substitution(input[0], input[1], input[2]);
        expect(actual).to.equal(expected);
    });
});

describe("(Substitution) Checking decoder for disregard of capitalization", () => {
    it("should return a decoded message in all lowercase.", () => {
        const input = ["Qlsm Qzxly Qrmtovsvrnvi Hxsnrwg", "zyxwvutsrqponmlkjihgfedcba", (encode = false)];
        const expected = "john jacob jingleheimer schmidt";
        const actual = substitutionModule.substitution(input[0], input[1], input[2]);
        expect(actual).to.equal(expected);
    });
});

describe("(Substitution) Checking decoder for functionality with non-letters in substitution alphabet", () => {
    it("should return a correctly decoded message.", () => {
        const input = ["g@v 56rxp 1i$^4 2$c 36nk% $evi g@v #za7 !$t", "z1x!v2t@r3p#n4$k5i%g6e^c7a", (encode = false)];
        const expected = "the quick brown fox jumps over the lazy dog";
        const actual = substitutionModule.substitution(input[0], input[1], input[2]);
        expect(actual).to.equal(expected);
    });
});