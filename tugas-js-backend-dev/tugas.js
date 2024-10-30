// 1. Buatlah function yang mempunyai parameter / argument object tasks kemudian return value nya berupa string (gunakan teknik string literal). 
const tasks = [{
        id: 1,
        title: "Kerjaan 1",
        description: "ceritain detail pekerjaanya disini",
        isDone: false,
    },
    {
        id: 2,
        title: "Kerjaan 2",
        description: "ceritain detail pekerjaanya disini",
        isDone: true,
    },
    {
        id: 3,
        title: "Kerjaan 3",
        description: "ceritain detail pekerjaanya disini",
        isDone: true,
    },
];

function returnTasks(tasks) {
    return tasks.map((task) =>
        `
        Judul: ${task.title}
        Deskripsi: ${task.description}
        Status: ${task.isDone}
        `
    ).join('\n');
}

console.log(returnTasks(tasks));

// 2. Tolong jelaskan dengan caramu sendiri tentang kode berikut ini: 

function sumOfNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

const result = sumOfNumbers(1, 2, 3, 4, 5);
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`);

// Dalam kode tersebut terdapat function setOfNumbers dengan argumen spread numbers yang mengembalikan nilai berupa method reduce dari numbers yang mengeksekusi operasi total ditmabah number lalu di inisiasi nilai awalnya menjadi nol.
// Selain itu terdapat variabel tipe const yang bernama result yang berisi nilai dari argumen dari function sumOfNumbers agar dapat mengoperasikan function yang sebelumnya dibuat.
// Terakhir terdapat perintah console.log yang berisi string iteral `The sum of 1, 2, 3, 4, and 5 is: ${result}` yang didalamnya terdapat expression ${result} untuk memberikan nilai dari variable result yang telah digunakan untuk mengoperasikan fungsi sumOfNumbers.