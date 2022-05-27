"use strict";

/**takes an array of nums and a target average and tests if any
 * pairs nums has that average. retutrns true or false */
// add whatever parameters you deem necessary & write docstring

function averagePair(nums, targetAvg) {

  let left = 0;
  let right = nums.length - 1;

  while(left < right){
    const avg = (nums[right] + nums[left]) / 2;

    if (avg === targetAvg){
      return true
    } else if (avg > targetAvg){
      right --;
    } else {
      left ++;
    }
  }
  return false;
}

