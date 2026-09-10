// check the distance from current to target
// check if the distance was already seen in the array
// if yes, return
// if no, mark as seen and keep going;

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();

        for (const [i, num] of nums.entries()) {
            const distance = target - num;
            if(seen.get(distance)) return [i, seen.get(distance) - 1];

            seen.set(num, i + 1);
        }

        return [];
    }
}
