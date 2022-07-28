function lengthOfLongestSubstring(s: string): number {
    let length = s.length;

    if (length === 0) {
        return 0;
    }
    if (length === 1) {
        return 1;
    }
    let sub: string = "";
    let start: number = 0;
    let longest: number = 0;
    let end: number = 1;
    sub = s[start] + s[end];
    while (end < length) {
        console.log("SUB", start, end, sub);
        if (sub.includes(s[end + 1])) {
            console.log("RESET");
            start = end + 1;
            end += 2;
            sub = s[start] + s[end];
        } else {
            sub += s[end];
            end++;
        }
        longest = end - start + 1 > longest ? end - start + 1 : longest;
    }
    return longest;
}

interface e {
    string: string;
    expected: number;
}
const s: e[] = [
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

s.forEach((x, i) => {
    // console.log(x.string, isVailidSubstring(x.string));
    let length = lengthOfLongestSubstring(x.string);
    console.log("exp:", x.expected, "fn:", length, "|", `'${x.string}'`);
    if (x.expected !== length) {
        console.log(
            "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );
    }
    console.log("________________________________________");
});
