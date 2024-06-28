function equableTriangle(a, b, c) {
    const perimeter = a + b + c;
    const s = perimeter / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area === perimeter;
}

// Example usage

 // This should print true if the triangle is equable

console.log(equableTriangle(9,10,17))