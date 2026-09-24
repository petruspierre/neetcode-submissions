class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if(!freq.get(num)) {
                freq.set(num, 0)
            }

            freq.set(num, freq.get(num) + 1)
        }

        const sorted = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);

        return sorted.slice(0, k).map(entry => entry[0])
    }
}
