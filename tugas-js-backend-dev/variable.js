var greet = 'Hello';
let name = 'Ariq';
const online = true;

let personal = {age: 24, gender: 'man', job: 'programmer'};

let ageTime = 10;

let futureAge = personal.age + ageTime;

console.log(`${greet}, my name is ${name}, ${personal.age} years old ${personal.gender}. I'm working as ${personal.job}. In the next ${ageTime} years, i'll be ${futureAge}.`);
console.log('online: ', online);
console.log(personal.age > futureAge);

// Perintah:

// 1. Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.
// Deklarasikan variabel var bernama greet yang menampung nilai 'Hello', kemudian deklarasiakan variabel let bernama name yang menampung nilai 'Ariq', terakhir deklarasikan variabel const yang bernama online dengan nilai boolean yakni true

// 2. Buat program yang mencakup semua tipe data primitif dan non-primitif, serta menggunakan operator aritmatika dan perbandingan.
// Deklarasikan variabel let yang bernama personal yang menampung data object yang mempunyai key: age, gender, dan job yang nilainya: 24, 'man', dan 'programmer'.
// Setelah itu buat variable let yang bernama ageTime yang menampung nilai 10 yang nantinya variable ini digunakan untuk kalkulasi di variable futureAge
// Dekalarsikan variable let yang bernama futureAge yang menampung nilai penjumlahan dari nilai age dari variable yang bernama personal ditambah dengan nilai dari variable yang bernama ageTime
// Buat perintah console.log() yang didalamnya menampung nilai berupa expression: ${greet}, my name is ${name}, ${personal.age} years old ${personal.gender}. I'm working as ${personal.job}. In the next ${ageTime} years, i'll be ${futureAge}, untuk mencetak: 'Hello, my name is Ariq, 24 years old man. I'm working as programmer. In the next 10 years, i'll be 34.' di terminal atau console
// Buat perintah console.log() yang didalamnya menampung nilai berupa online: nilai dari variable const bernama online untuk mencetak online: true di terminal atau console
// Buat perintah console.log() yang didalamnya menampung nilai berupa perbandingan nilai dari variable bernama personal dengan nilai age apakah lebih besar dari nilai dari variable futureAge yang akan mencetak nilai boolean berupa false di terminal atau console

