function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    let curr = "";
    for (let start = 0; start < s.length - 1; start++) {
        for (let end = start + 1; end < s.length; end++) {
            curr = s.slice(start, end);
            if (isVailidSubstring(curr) && curr.length > longest) {
                longest = curr.length;
            }
        }
    }

    return longest;
}

const isVailidSubstring = (s: string): boolean => {
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                return false;
            }
        }
    }
    return true;
};

interface e {
    string: string;
    expected: number;
    output: number;
}
const s: e[] = [
    { string: "abcabcbb", expected: 3, output: 3 },
    { string: "pwwkew", expected: 3, output: 3 },
    { string: " ", expected: 1, output: 0 },
    { string: "au", expected: 2, output: 1 },
    { string: "bbbbb", expected: 1, output: 1 },
    { string: "bwf", expected: 3, output: 2 },
];

s.forEach((x, i) => {
    console.log(
        "exp:",
        x.expected,
        "fn:",
        lengthOfLongestSubstring(x.string),
        "out",
        x.output
    );
    console.log("________________________________________");
});
