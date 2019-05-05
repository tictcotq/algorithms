function count(arr) {
	let sum = 0;
	for (let i=0; i<arr.length; i++)
  	for (let j=0; j<arr[i].length; j++)
    	sum += !!check(arr, i, j);
      
  return sum;
}

function check(arr, i, j) {
	if (!arr[i] || !arr[i][j]) 
  	return false;
    
  arr[i][j] -= 1;
    
  for (let k=-1; k<2; k++)
    for (let l=-1; l<2; l++)
      check(arr, i+k, j+l);
      
  return true;
}

module.exports = count;