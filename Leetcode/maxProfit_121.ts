function maxProfit(prices: number[]): number {
  let prev: number = 0;
  let next: number = 0;
  let maxProf: number = 0;
  let profit: number = 0;

  while (next < prices.length) {
    if (prices[prev] < prices[next]) {
      profit = prices[next] - prices[prev];
      if (profit > maxProf) {
        maxProf = profit;
      }
    } else {
      prev = next;
    }
    next += 1;
  }

  return maxProf;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([2, 1, 2, 0, 1]));
