/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    return sentences.reduce((acc, cur) => {
        return cur.split(' ').length > acc 
            ? cur.split(' ').length
            : acc;
    }, 0);
};