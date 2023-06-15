let a = 1, b = 4, c = 6;

if (a <= b && a <= c) {
    if (b <= c) {
        console.log(c, b, a);
    } else {
        console.log(b, c, a);
    }
} else if (b <= a && b <= c) {
    if (a <= c) {
        console.log(c, a, b);
    } else {
        console.log(a, c, b);
    }
} else {
    if (a <= b) {
        console.log(b, a, c);
    } else {
        console.log(a, b, c);
    }
}