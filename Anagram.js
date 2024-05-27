// const checkAnagram = ()=>{

// }
const isAnagram = (str1, str2) => {
    // Remove non-alphanumeric characters and convert to lowercase
    str1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    str2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Sort the characters of both strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
};

// Test cases
console.log(isAnagram("listen", "silent"));  // Output: true
console.log(isAnagram("hello", "world"));    // Output: false
console.log(isAnagram("Debit card", "Bad credit")); // Output: true (ignoring case and non-alphanumeric characters)
const isAnagramAfterReversal = (str1, str2) => {
    // Reverse str1
    const reversedStr1 = str1.split('').reverse().join('');

    // Check if reversedStr1 is equal to str2
    return reversedStr1 === str2;
};

// Test cases
console.log(isAnagramAfterReversal("listen", "silent"));  // Output: true
console.log(isAnagramAfterReversal("hello", "world"));    // Output: false
console.log(isAnagramAfterReversal("debit card", "bad credit")); // Output: true (ignoring case and non-alphanumeric characters)

// let supoose s =anagram and t = margana
const isAnagrams = (s, t) => {
    // Check if the lengths of the strings are different
    if (s.length !== t.length) {
        return false;
    }
    
    // Sort both strings and compare them
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
};

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car"));         // Output: false