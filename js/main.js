//задача 1
let kilperhour = 35 ;
console.log(`${kilperhour} км/ч соответствует ${kilperhour * (5/18)} м/с`); //шаблонный лиетрал

let metrpersec = 45;
let metrvkil = 45 / (5/18);
console.log(metrpersec + ' м/с соответствует ' + metrvkil + ' км/ч'); //подстановка

//Задача 2
var a = 5;
var b = 4;
var c = 3;

function per(a,b,c){
    return a+b+c;
}

function ploshad(a,b,c){
    let p = per(a,b,c);
    var pl = Math.sqrt(p*(p - a)*(p - b)*(p - c));
    return pl;
}

function sootn(x,y){
    return x / y;
}

if ((a+b)>c){
    console.log('треугольник существует');
    console.log("Периметр = " + per(a,b,c));
    console.log("Площадь = " + ploshad(a,b,c));
    console.log('Соотношение =' + sootn(per(a,b,c),ploshad(a,b,c)));
} else if ((b+c)>a){
    console.log('треугольник существует');
    console.log("Периметр = " + per(a,b,c));
    console.log("Площадь = " + ploshad(a,b,c));
    console.log('Соотношение =' + sootn(per(a,b,c),ploshad(a,b,c)));
} else if ((a+c)>b){
    console.log('треугольник существует');
    console.log("Периметр = " + per(a,b,c));
    console.log("Площадь = " + ploshad(a,b,c));
    console.log('Соотношение =' + sootn(per(a,b,c),ploshad(a,b,c)));
} else console.log('треугольник не существует');


//Задача 3
var n = prompt('Введите число', 10);

function proverka(k){
    if ((k%5)==0){
        return 'fizz buzz';
    } if ((k%2)==0) {
        return 'buzz';
    } else if ((k%2)!=0) {
        return 'fizz';
    }
}

if (isNaN(n)){
    console.log("Вы ввели не число")
} else {
    console.log(0 + ' buzz');
    for (let i = 1; i <=n; i++){
        console.log(i + ' ' + proverka(i));
    }
}

//Задача 4
let tree = '>\n*\n##\n***\n####\n*****\n######\n*******\n########\n*********\n##########\n***********\n############\n||';
console.log(tree);

//Задача 5
var z = 6;
function proverka(a){
    if (isNaN(a)) return "Вы ввели не число"
    else if (a > z) return 'Ваше число больше'
    else if (a < z) return'Ваше число меньше'
    else if (a = z) return 'Угадано';
}

do {
    var a = prompt('Угадайте число', 10);
    alert(proverka(a));
} while (proverka(a) != 'Угадано');

//Задача 6

function delenie(num,x,y){
if ((num%x==0) && (num%y==0)){
    console.log('n=' + num + ' x=' + x + ' y='+ y +' true')
} else console.log('n=' + num + ' x=' + x + ' y='+ y +' false');
}

let num = 3;
let x = 1;
let y = 3;
delenie(num,x,y);

num = 12;
x = 2;
y = 6;
delenie(num,x,y);

num = 100;
x = 5;
y = 3;
delenie(num,x,y);

num = 12;
x = 7;
y = 5;
delenie(num,x,y);

//Задача 7 

function month(m){
switch(m) {
    case 1:

    case 2:  // if (x === 'value2')

    case 3:
        console.log('месяц '+ m + ' - 1 квартал');
        break;  
    case 4:

    case 5:
    
    case 6:
        console.log('месяц '+ m + ' - 2 квартал');
        break;
    case 7:

    case 8:
    
    case 9:
        console.log('месяц '+ m + ' - 3 квартал');
        break;
    case 10:
        
    case 11:

    case 12:
        console.log('месяц '+ m + ' - 4 квартал');
        break;
}}

let m = 2;
month(m);

m = 11;
month(m);