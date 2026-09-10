class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const orderedS = s.split('').sort();
        const orderedT = t.split('').sort();
        if(s.length !== t.length) return false;
        for(let i = 0; i < s.length; i++){
            if (orderedS[i] != orderedT[i]) return false
        }
        return true;
    }
}
