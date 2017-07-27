function add(a, b) {
    return a + b;
}

const add5 = add.bind(null, 5);

console.log(add5(2));
