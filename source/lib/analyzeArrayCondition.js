function analyzeArrayCondition(arr) {
  const n = arr.length;
  if (n <= 1) return "Array is too small to analyze";

  let ascendingCount = 0;    
  let descendingCount = 0;   
  let uniqueValues = new Set(arr);

  for (let i = 1; i < n; i++) {
    if (arr[i][1] > arr[i - 1][1]) ascendingCount++;    
    else if (arr[i][1] < arr[i - 1][1]) descendingCount++; 
  }

  const ascendingPercentage = ascendingCount / (n - 1);
  const descendingPercentage = descendingCount / (n - 1);
  const uniquePercentage = uniqueValues.size / n;

  
  if (ascendingPercentage >= 0.8) return "nearly-sorted"; 
  else if (descendingPercentage >= 0.8) return "reversed";     
  else if (uniquePercentage <= 0.3) return "few-unique";          
  else return "random";                                  
}

module.exports = analyzeArrayCondition;