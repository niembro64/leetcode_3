function lengthOfLongestSubstring(s) {
    var longest = 0;
    var curr = "";
    for (var start = 0; start < s.length - 1; start++) {
        for (var end = start + 1; end < s.length; end++) {
            curr = s.slice(start, end);
            if (isVailidSubstring(curr) && curr.length > longest) {
                longest = curr.length;
            }
        }
    }
    return longest;
}
var isVailidSubstring = function (s) {
    for (var i = 0; i < s.length - 1; i++) {
        for (var j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                return false;
            }
        }
    }
    return true;
};
var s = [
    { string: "abcabcbb", expected: 3, output: 3 },
    { string: "pwwkew", expected: 3, output: 3 },
    { string: " ", expected: 1, output: 0 },
    { string: "au", expected: 2, output: 1 },
    { string: "bbbbb", expected: 1, output: 1 },
    { string: "bwf", expected: 3, output: 2 },
];
s.forEach(function (x, i) {
    console.log("exp:", x.expected, "fn:", lengthOfLongestSubstring(x.string), "out", x.output);
    console.log("________________________________________");
});
