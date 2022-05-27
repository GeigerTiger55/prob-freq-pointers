"use strict";

// add whatever parameters you deem necessary & write docstring

/**
 * Function accepts array of non-zero numbers, returns the same array with all of the positive numbers on the left and the negative 
 * numbers on the right. Does not need to be sorted.
 * 
 * EXAMPLE: separatePositive([2, -1, -3, 6]);         // [2, 6, -3, -1]
 */
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] < 0 && nums[right] > 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        } else if (nums[left] < 0) {
            right--;
        } else if (nums[right] > 0) {
            left++;
        } else {
            left++;
            right--;
        }
    }

    return nums;
}
