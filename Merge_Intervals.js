function mergeIntervals(intervals) {
    // Sorting intervals by the starting time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    for (const interval of intervals) {
        // If merged array is empty or the current interval doesn't overlap with the previous
        if (!merged.length || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval);
        } else {
            // Otherwise, there is overlap, so mering the intervals
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
        }
    }

    return merged;
}


const intervals1 = [[1,3],[2,6],[8,9],[9,11],[8,10],[2,4],[15,18],[16,17]];
console.log(mergeIntervals(intervals1)); 

const intervals2 = [[1, 4], [4, 5]];
console.log(mergeIntervals(intervals2)); 
