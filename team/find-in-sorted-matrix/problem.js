function find(mtx, s) {
	for (let i=0; i<mtx.length; i++)
  	if (bin_search(mtx[i], s) >= 0)
    	return true;
      
  return false;
}

function bin_search(arr, s) {
	let [i, j] = [0, arr.length];
  while (i !== j) {
  	const m = Math.floor((j - i) / 2) + i;
    [i, j] = arr[m] >= s
    	? [i, m]
      : [m + 1, j];
  }
  
  return arr[i] === s
  	? i
    : -1;
}

module.exports = find;