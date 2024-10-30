// Membuat Array
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

// Spread (ES6)
// const tasksSpread = [...tasks];
// console.log("tasks spread: ", tasksSpread);

// Destruct (ES6)
// // spread
// const [task1, task2, task3] = tasks;

// // get items as object
// console.log("task1: ", task1);
// console.log("task2: ", task2);
// console.log("task3: ", task3);

// // get props from each items
// console.log("task1.title: ", task1.title);
// console.log("task2.title: ", task2.title);
// console.log("task3.title: ", task3.title);

// Loop (forEach)
// loop
// tasks.forEach((item) => {
//     console.log("id: ", item.id);
//     console.log("title: ", item.title);
//     console.log("description: ", item.description);
//     console.log("isDone: ", item.isDone);
// });

// Map
// const newTasks = tasks.map((item) => {
//     return {
//         taskInfo: `task: ${item.title}, sudah selesai? ${
//         item.isDone ? "sudah" : "belum"
//       }`,
//     };
// });
// console.log("newTasks: ", newTasks);

// Reduce
// const sumTasksPriorities = tasks.reduce((prev, curr) => {
//     return prev + curr.priority;
// }, 0);

// console.log("sumTasksPriorities: ", sumTasksPriorities);

// Filter
const filterTasksDoneOnly = tasks.filter((item) => {
    return item.isDone;
});

console.log(filterTasksDoneOnly);