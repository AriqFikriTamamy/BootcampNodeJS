function circleArea(){
    const phi = 3.14;
    let radius = 7;
    let radiusDoubled = radius * radius;
    let area;
    return area = phi * radiusDoubled;
}

console.log('luas lingkaran:',circleArea());

let number = [2, 4, 6, 8, 12];

const doubledNumber = () => {
    let doubled = number.map(num => num * 2);
    console.log(doubled)
}

doubledNumber();
