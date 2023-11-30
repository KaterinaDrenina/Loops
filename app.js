// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let x = "";
for (let i = 10; i <= 20; i++) {
    x += i + (i < 20 ? ", " : "");
}
console.log(x);

// Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    console.log(`${i} ^ 2 = ${i * i}`);
}

// Вивести таблицю множення на 7.
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// Знайти суму всіх цілих чисел від 1 до 15.
let summ = 0;
for (let i = 1; i <= 15; i++) {
    summ = summ + i;
}
console.log(`Total from 1 to 15 is: ${summ}`);

// Знайти добуток усіх цілих чисел від 15 до 35.
let mult = 1;
for (let i = 15; i <= 35; i++) {
    mult = mult * i;
}
console.log(`Multiplication from 15 to 35 is: ${mult}`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let total = 0;
for (let i = 1; i <= 500; i++) {
    total = total +i;
}
let mean = total / 500;
console.log(`The ariphmetic mean from 1 to 500 is: ${mean}`);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let y = 0;
for (let i = 30; i <= 80; i++) {
    if(i % 2 === 0) {
        y = y + i;
    }
}
console.log(`Sum of whole numbers from 30 to 80 is: ${y}`);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
let number = 46;
let evenDivisorsAmmount = 0;
let evenDivisorsSum = 0;
console.log(`Divisors of ${number}:`);
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
        if (i % 2 === 0) {
            evenDivisorsAmmount++;
            evenDivisorsSum = evenDivisorsSum + i;
        }
    }
}
console.log(`Ammount of even divisors of ${number}: ${evenDivisorsAmmount}`);
console.log(`Sum of even divisors of ${number}: ${evenDivisorsSum}`);

// Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
    for (let y = 1; y <= 10; y++) {
        console.log(`${i} x ${y} = ${i * y}`);
    }
    console.log('---');
}
