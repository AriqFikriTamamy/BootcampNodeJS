// Membuat object
const task = {
    title: "ini judul kerja-nya",
    description: "ceritain detail pekerjaanya disini",
    isDone: false,
};

// Spread (ES6)
const taskSpread = {
    ...task
};
console.log("task spread: ", taskSpread);

// Destruct (ES6)
const {
    title,
    description,
    isDone
} = task;
console.log("destruct -> title: ", title);
console.log("destruct -> description: ", description);
console.log("destruct -> isDone: ", isDone);