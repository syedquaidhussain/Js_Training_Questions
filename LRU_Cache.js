class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; // Maximum capacity of the cache
        this.cache = new Map(); // Using a Map to store key-value pairs in insertion order
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1; // Key does not exist in the cache
        }

        
        const value = this.cache.get(key);

        this.cache.delete(key); // Removing the key



        this.cache.set(key, value); // Reinserting the key-value pair to update its order

        return value;
    }

    put(key, value) {

        if (this.cache.has(key)) {

            this.cache.delete(key); // If key exists, remove it to update its order

        } 
        else if (this.cache.size === this.capacity) {

            // If cache is full then remove the least recently used (first) key
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }

        // Add the new key-value pair
        this.cache.set(key, value);
    }
}

// Example usage
const cache = new LRUCache(2);
cache.put(1, 1); 
cache.put(2, 2); 
console.log(cache.get(1)); 
cache.put(3, 3); 
console.log(cache.get(2)); 
cache.put(4, 4); 
console.log(cache.get(1)); 
console.log(cache.get(3)); 
console.log(cache.get(4)); 
