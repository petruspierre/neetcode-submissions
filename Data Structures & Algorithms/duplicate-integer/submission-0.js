class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const frequency = {};
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if(frequency[num]) return true;

            frequency[num] = 1;
        }
        return false;
    }
}
