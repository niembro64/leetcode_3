function lengthOfLongestSubstring(s) {
    var length = s.length;
    if (length === 0) {
        return 0;
    }
    if (length === 1) {
        return 1;
    }
    var sub = "";
    var start = 0;
    var longest = 0;
    var end = 1;
    sub = s[start] + s[end];
    while (end < length) {
        console.log("SUB", start, end, sub);
        if (sub.includes(s[end + 1])) {
            console.log("RESET");
            start = end + 1;
            end += 2;
            sub = s[start] + s[end];
        }
        else {
            sub += s[end];
            end++;
        }
        longest = end - start + 1 > longest ? end - start + 1 : longest;
    }
    return longest;
}
var s = [
    { string: "abcabcbb", expected: 3 },
    { string: "pwwkew", expected: 3 },
    { string: " ", expected: 1 },
    { string: "au", expected: 2 },
    { string: "bbbbb", expected: 1 },
    { string: "bwf", expected: 3 },
    { string: "bwwfxx", expected: 3 },
    { string: "bwwfxxasdff", expected: 5 },
    { string: "abcdefg", expected: 5 },
];
s.forEach(function (x, i) {
    // console.log(x.string, isVailidSubstring(x.string));
    var length = lengthOfLongestSubstring(x.string);
    console.log("exp:", x.expected, "fn:", length, "|", "'".concat(x.string, "'"));
    if (x.expected !== length) {
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    }
    console.log("________________________________________");
});
