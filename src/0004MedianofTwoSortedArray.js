/**
 * 第一思路：归并排序
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArraysNormal = function(nums1, nums2) {
    let p1 = 0, p2 = 0, len1=nums1.length, len2=nums2.length, sorted=[];
    for(let i=0; i<len1+len2; i++) {
      if(p1<len1 && p2<len2) {
        sorted.push(nums1[p1]<nums2[p2]?nums1[p1++]:nums2[p2++]);
      } else if (p1<len1) {
        sorted.push(nums1[p1++]);
      } else if (p2<len2) {
        sorted.push(nums2[p2++]);
      }
    }

    return (len1+len2)%2===0? (sorted[(len1+len2)/2]+sorted[(len1+len2)/2-1])/2.0 : sorted[Math.floor((len1+len2)/2)];
};

/**
 * 优化思路：双指针法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArraysBetter = function(nums1, nums2) {
  let p1 = 0, p2 = 0, len1=nums1.length, len2=nums2.length;
  let medianIndex = Math.floor((len1+len2)/2);
  let choice = 1, median1, median2;
  for(let i=0; i<=medianIndex; i++) {
    choice = 1;
    if(p1<len1 && p2<len2) {
      if (nums1[p1]<nums2[p2]) {
        p1++;
      } else {
        p2++;
        choice = 2;
      }
    } else if (p1<len1) {
      p1++;
    } else if (p2<len2) {
      p2++;
      choice = 2;
    }
    if (i === medianIndex) {
      median2 = choice==1?nums1[p1-1]:nums2[p2-1];
    } else if (i === medianIndex-1) {
      median1 = choice==1?nums1[p1-1]:nums2[p2-1];
    }
  }

  return (len1+len2)%2==0? (median1+median2)/2.0 : median2;
};

/**
 * 高票思路
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArraysVoted = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  if (len1 > len2) {
    [nums1, nums2, len1, len2] = [nums2, nums1, len2, len1];
  }
  let imin = 0, imax = len1, half_len = parseInt((len1 + len2 + 1) / 2);
  let max_of_left, min_of_right;
  while (imin <= imax) {
    const i = parseInt((imin + imax) / 2);
    const j = half_len - i;
    if (i < len1 && nums2[j-1] > nums1[i]) {
      imin = i + 1;
    } 
    else if (i > 0 && nums1[i-1] > nums2[j]) {
      imax = i - 1;
    }
    else {
      if (i == 0 ) {
        max_of_left = nums2[j-1];
      } else if (j == 0) {
        max_of_left = nums1[i-1];
      }
      else {
        max_of_left = nums1[i-1]>nums2[j-1] ? nums1[i-1] : nums2[j-1];
      }
      if ((len1 + len2) % 2 == 1) {
        return max_of_left;
      }
      if (i == len1) {
        min_of_right = nums2[j];
      } else if (j == len2) {
        min_of_right = nums1[i];
      } else {
        min_of_right = nums1[i]<nums2[j] ? nums1[i] : nums2[j];
      }
      
      return (max_of_left + min_of_right) / 2.0;
    }
  }
};

