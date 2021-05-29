// Solution 1
// O(2n)
function findOutlier(integers){
  let even = integers.filter(num => num % 2 === 0);
  let odd = integers.filter(num => num % 2 !== 0);
  let n = 0;
  
  if (even.length > 1) {
    n = odd[0];
  } else if (odd.length > 1) {
    n = even[0];
  }
  
  return n;
}

// Solution 2 - shorter
// O(2n)
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}