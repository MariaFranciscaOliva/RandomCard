let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


let positionWho = Math.floor(Math.random() * who.length);
let positionWhat = Math.floor(Math.random() * what.length);
let positionWhen = Math.floor(Math.random() * when.length);

let frase = who[positionWho]+what[positionWhat]+when[positionWhen];

let escusa = document.getElementById("excuse");
escusa.innerHTML = frase; 

