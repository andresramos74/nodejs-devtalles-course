// console.log(process);
// console.log(process.env);

const { USERDOMAIN, USERPROFILE } = process.env;

// console.log({ USERDOMAIN, USERPROFILE });
// console.table({ USERDOMAIN, USERPROFILE });

const characters = ["Flash", "Superman", "Batman"];

// const [_, __, batman] = characters; //destructuración de objecto, _ y __ son nombres válidos y son opcionales
const [, , batman] = characters; // se pued edejar en blanco

// console.log(batman);
