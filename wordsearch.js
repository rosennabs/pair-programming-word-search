const transpose = require('../matrix_transposition');

const wordSearch = (letters, word) => {
    //Checks for an empty matrix
    if (letters.length === 0) {
        return false;
    }

    //Checks for horizontal presentation of the word
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    //Checks for vertical presentation of the word
    const transposedLetters = transpose(letters);
    const verticalJoin = transposedLetters.map(ls => ls.join(''))
    
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    return false;
}

module.exports = wordSearch;