class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, cur) => {
            return acc + `${cur.length}#${cur}`;
        }, '')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = []
        let index = 0;
        while (index < str.length) {
            const hashIndex = str.indexOf('#', index);
            const length = parseInt(str.substring(index, hashIndex), 10)
            const start = hashIndex + 1;
            const word = str.substring(start, start + length);
            decoded.push(word)
            index = start + length
        }
        return decoded
    }
}
