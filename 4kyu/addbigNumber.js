function add(a, b) {
    let result = '';
    let carry = 0;
    a = a.toString();
    b = b.toString();
    while (a.length < b.length) a = '0' + a;
    while (b.length < a.length) b = '0' + b;
    for (let i = a.length - 1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    if (carry) result = carry + result;

    return result;
}

