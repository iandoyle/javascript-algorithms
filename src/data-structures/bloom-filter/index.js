const BloomFilter = require('./BloomFilter');

const bloomFilter = new BloomFilter();

// console.log(typeof bloomFilter.insert); // function
// console.log(typeof bloomFilter.mayContain); // function

const store = bloomFilter.createStore(18);

// console.log(typeof store.getValue); // function
// console.log(typeof store.setValue); // function

const str1 = 'apple';

// console.log(bloomFilter.hash1(str1)); // 14
// console.log(bloomFilter.hash2(str1)); // 43
// console.log(bloomFilter.hash3(str1)); // 10

const str2 = 'orange';

// console.log(bloomFilter.hash1(str2)); // 0
// console.log(bloomFilter.hash2(str2)); // 61
// console.log(bloomFilter.hash3(str2)); // 10

// console.log(bloomFilter.getHashValues('abc')); // [66,63,54]

const people = ['Bruce Wayne', 'Clark Kent', 'Barry Allen'];

people.forEach(person => bloomFilter.insert(person));

console.log(bloomFilter.getHashValues('Bruce Wayne')); // [66,63,54]
console.log(bloomFilter.mayContain('Bruce Wayne')); // true

// console.log(bloomFilter.mayContain("Tony Stark")); // false
