function sumStrings(a, b) {
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');
    while (a.length < b.length) {
        a += '0';
    }
    while (b.length < a.length) {
        b += '0';
    }

    let carry = 0;
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }
    if (carry) {
        result.push(carry);
    }
    return result.reverse().join('').replace(/^0+/, '') || '0';
}