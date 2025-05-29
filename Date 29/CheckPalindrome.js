function palindrome(str) {
    const length = str.length;
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - i - 1])
            return "Not palindrome"
    }
    return "Palindrome"
}

console.log(palindrome("apapa"))