/*
https://leetcode.com/problems/intersection-of-two-arrays-ii/

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }
  const map = {};
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    if (map[num] === undefined) map[num] = 0;
    map[nums1[i]]++;
  }
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (map[num] !== undefined && map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }
  return result;
};

module.exports = intersect;
