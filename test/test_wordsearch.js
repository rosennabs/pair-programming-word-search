const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function () {
    const result = wordSearch([
      ['L', 'W', 'C', 'L', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'I', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'N', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'G', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'E', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'T', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'T', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'E', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'S', 'Q', 'U', 'A', 'L'],
    ], 'LINGETTES')

    assert.isTrue(result);
  });

  it("should return false if the matrix is an empty array", function () {
    const result = wordSearch([], [])
    assert.isFalse(result);
  });

});
