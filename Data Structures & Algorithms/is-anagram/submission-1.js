class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        const countMap = new Map();
        
        for (let i = 0; i < s.length; i++) {
            const charS = s[i];
            const charT = t[i];

            countMap.set(charS, (countMap.get(charS) || 0) + 1);
            countMap.set(charT, (countMap.get(charT) || 0) - 1);
        }

        for (const count of countMap.values()) {
            if (count !== 0) return false;
        }
        return true
    }
}
