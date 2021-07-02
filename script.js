let searchByForEach = str => {
    let letters = ['а','у','о','ы','и','э','я','ю','ё','е'];
    let counter = 0;
    str.split('').forEach(el => {
        letters.forEach(lett => {
            if (el === lett)
            counter++;
        });
    });
    return counter;
};
// let quest = prompt('Введите строку');
// console.log(searchByForEach(quest));

let searchByFilter = str => 
    str.split('').filter(el => 'ауоыиэяюёе'.includes(el)).length;

// let quest = prompt('Введите строку');
// console.log(searchByFilter(quest));

let searchByreduce = str => 
    str.split('').reduce((el) => 'ауоыиэяюёе'.includes(el));

let quest = prompt('Введите строку');
console.log(searchByFilter(quest));


