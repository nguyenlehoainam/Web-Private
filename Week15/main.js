// DESTRUCTURING

// const numbers = [1, 2, 3, 4, 5];

// // Cách truyền thống
// // const a = numbers[0];
// // const b = numbers[1];
// // const c = numbers[2];
// //destructuring

// const [a, , c, ...rest] = numbers;

// console.log(a, c, rest);

// 1. Với Object (Thường dùng nhất trong React props)
// const student = {
//   name: "Nguyễn Văn A",
//   age: 20,
//   school: "Đại học Công Nghiệp",
//   person: {
//     name: "NeLam",
//   },
// };

// const {
//   name: studentname,
//   age,
//   school,
//   person: { name },
// } = student;
// console.log(studentname, name, age, school);

// const {
//   name: parentname,
//   age,
//   school,
//   person: { name },
// } = student;

// console.log(parentname, name);

//spread

// const Arr1 = [1, 2, 3];
// const Arr2 = [4, 5, 6, ...Arr1];
// const Arr3 = [...Arr1, ...Arr2];
// const [a, ...rest] = Arr3;

// console.log(rest);

// const student1 = {
//   name: "nelam",
//   age: 10,
// };
// const student2 = {
//   name: "HaiDuy",
//   score: 10,
// };
// const student3 = {
//   ...student2,
//   ...student1,
//   quequan: "phutho",
// };

// console.log(student3);
//settimeout

//Callback hell

// const function1 = (name, Callback) => {
//   console.log("say yeah", name);
//   Callback();
// };
// const function2 = () => {
//   console.log(" hello");
// };
// const function3 = () => {
//   console.log(" hi");
// };
// function1("Nelam", function3);
//Đồng bộ (Synchronous) và Bất đồng bộ (Asynchronous)
//-call stack
//-web apis
//callback queue
console.log("so1");
console.log("so2");
setTimeout(() => {
  console.log("so3");
}, 0);
setTimeout(() => {
  console.log("so4");
}, 0);
console.log("so5");
