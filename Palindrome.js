function isPalindrome(number) {
    const numstr = number.toString();
    const numstrinv = numstr.split('').reverse().join('');

    if (numstr=== numstrinv) {
        return true
    }

    else {
        return false
    }
}

console.log(isPalindrome(121))