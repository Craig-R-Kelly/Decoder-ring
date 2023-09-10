// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

// testing for valid input

describe("(Caesar) Checking for presence of shift", () => {
    it("should return false if no shift inputted.", () => {
        const input = ["thinkful"];
        const expected = false;
        const actual = caesarModule.caesar(input[0]);
        expect(actual).to.equal(expected);
    });
});

describe("(Caesar) Checking for return on shift of 0", () => {
    it("should return false if shift is equal to zero.", () => {
        const input = ["thinkful", 0];
        const expected = false;
        const actual = caesarModule.caesar(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Caesar) Checking for return on shift < -25", () => {
    it("should return false if shift is less than -25.", () => {
        const input = ["thinkful", -26];
        const expected = false;
        const actual = caesarModule.caesar(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Caesar) Checking for return on shift > 25", () => {
    it("should return false if shift is greater than 25.", () => {
        const input = ["thinkful", 99];
        const expected = false;
        const actual = caesarModule.caesar(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

// testing for correct output with the simplest input

describe("(Caesar) Checking for correct return on simple input (1 of 4)", () => {
    it("should encode correctly with positive shift.", () => {
        const input = ["monkey", 1];
        const expected = "npolfz";
        const actual = caesarModule.caesar(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Caesar) Checking for correct return on simple input (2 of 4)", () => {
    it("should encode correctly with negative shift.", () => {
        const input = ["monkey", -1];
        const expected = "lnmjdx";
        const actual = caesarModule.caesar(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Caesar) Checking for correct return on simple input (3 of 4)", () => {
    it("should decode correctly with positive shift.", () => {
        const input = ["npolfz", 1, false];
        const expected = "monkey";
        const actual = caesarModule.caesar(input[0], input[1], input[2]);
        expect(actual).to.equal(expected);
    });
});

describe("(Caesar) Checking for correct return on simple input (4 of 4)", () => {
    it("should decode correctly with negative shift.", () => {
        const input = ["lnmjdx", -1, false];
        const expected = "monkey";
        const actual = caesarModule.caesar(input[0], input[1], input[2]);
        expect(actual).to.equal(expected);
    });
});

// testing for the correct output with more complicated input

describe("(Caesar) Checking for correct positive alphabet wrapping", () => {
    it("should correctly return messages requiring shifting past the end of the alphabet.", () => {
        const input = ["zigzag", 1];
        const expected = "ajhabh";
        const actual = caesarModule.caesar(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Caesar) Checking for correct negative alphabet wrapping", () => {
    it("should correctly return messages requiring shifting past the start of the alphabet.", () => {
        const input = ["avocado", -1];
        const expected = "zunbzcn";
        const actual = caesarModule.caesar(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Caesar) Checking for retention of spacing", () => {
    it("should keep the same spaces.", () => {
        const input = ["this is a secret message", 8];
        const expected = "bpqa qa i amkzmb umaaiom";
        const actual = caesarModule.caesar(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

describe("(Caesar) Checking for disregard of capitalization", () => {
    it("should return all lowercase letters.", () => {
        const input = ["BPQA qa i amkzmb umaaiom", 8, false];
        const expected = "this is a secret message";
        const actual = caesarModule.caesar(input[0], input[1], input[2]);
        expect(actual).to.equal(expected);
    });
});

describe("(Caesar) Checking for retention of nonalphabetic characters", () => {
    it("should maintain numerals and punctuation.", () => {
        const input = ['"I said, "Heinz has 57 varieties!"', 7];
        const expected = '"p zhpk, "olpug ohz 57 chyplaplz!"';
        const actual = caesarModule.caesar(input[0], input[1]);
        expect(actual).to.equal(expected);
    });
});

