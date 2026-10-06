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
        console.log('input', str)
        const decoded = []
        let index = 0;
        let currentPointer = 0;
        let startingPointer = 0;
        while (index < str.length) {
            if(str[index] !== '#') { 
                currentPointer++ 
                index++;
                continue;
            }

            const length = parseInt(str.substring(startingPointer, currentPointer), 10);

            index += length + 1;

            const decodedWord = str.substring(currentPointer + 1, index);
            decoded.push(decodedWord)
            currentPointer = index;
            startingPointer = index;
        }
        return decoded
    }
}
