class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        const n = nums.length

        let snowballLeft = 1
        for(let i = 0; i < n; i++) {
            output[i] = snowballLeft;
            snowballLeft *= nums[i]
        }

        let snowBallRight = 1
        for(let i = n - 1; i >= 0; i--) {
            output[i] *= snowBallRight
            snowBallRight *= nums[i]
        }

        return output;
    }
}
