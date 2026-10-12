nums=[1,2,3,3,4,5,6,6,6]
for(let i=0;i<nums.length;i++){
    if(nums[i]!=nums[i+1])
        nums[i]*=2
}
console.log(nums)