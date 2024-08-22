const add = (a, b) => (b ? add(a ^ b, (a & b) << 1) : a);
