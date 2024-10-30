let number = 6;

if(number % 2 === 0){
    console.log('Genap')
}else if(number % 2 === 1){
    console.log('Ganjil')
}

let day;

switch (number) {
    case 1:
        day = 'Senin';
        break;
    case 2:
        day = 'Selasa';
        break;
    case 3:
        day = 'Rabu';
        break;
    case 4:
        day = 'Kamis';
        break;
    case 5:
        day = 'Jumat';
        break;
    case 6:
        day = 'Sabtu';
        break;
    case 7:
        day = 'Minggu';
        break;
    default:
        day = 'Masukkan angka yang benar'
        break;
}

console.log(day);