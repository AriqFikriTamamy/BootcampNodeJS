// Global Scope
// var globalVar = "ini global var";
// let globalLet = "ini global let";
// const globalConst = "ini global const";

// console.log("globalVar: ", globalVar);
// console.log("globalLet: ", globalLet);
// console.log("globalConst: ", globalConst);

// globalVar = "global var diganti isinya";
// globalLet = "global let diganti isinya";
// // globalConst = "global const diganti isinya";

// console.log("globalVar (sekarang): ", globalVar);
// console.log("globalLet (sekarang): ", globalLet);
// console.log("globalConst (sekarang): ", globalConst);

// Function Scope
// function fnScope() {
//     var fnScopeVar = "ini fnScope var";
//     let fnScopeLet = "ini fnScope let";
//     const fnScopeConst = "ini fnScope const";
//     console.log("fnScopeVar (fnScope): ", fnScopeVar);
//     console.log("fnScopeLet (fnScope): ", fnScopeLet);
//     console.log("fnScopeConst (fnScope): ", fnScopeConst);
// }

// //   console.log("fnScopeVar (diluar fnScope): ", fnScopeVar);
// //   console.log("fnScopeLet (diluar fnScope): ", fnScopeLet);
// //   console.log("fnScopeConst (diluar fnScope): ", fnScopeConst);

// fnScope();

// Block Scope
// if (true) {
//     var blockVar = "ini block Var";
//     let blockLet = "ini block let";
//     const blockConst = "ini block const";

//     console.log("blockVar: ", blockVar);
//     console.log("blockLet: ", blockLet);
//     console.log("blockConst: ", blockConst);
//   }

// Hoisting
function fnHoistingVariables() {
    console.log("fnHoistingVar: ", fnHoistingVar);
    //   console.log("fnHoistingLet: ", fnHoistingLet);
    //   console.log("fnHoistingConst: ", fnHoistingConst);

    var fnHoistingVar = "ini hoisting var";
    let fnHoistingLet = "ini hoisting let";
    const fnHoistingConst = "ini hoisting const";
}

fnHoistingVariables();