let sayi1 = 10;
sayi1 = "Tayfun Yılmaz"
let student = {id:1, name:"Tayfun"}
//console.log(student)

//Default ifadeyi sona yazmak daha doğrudur. (puan=10 kısmı default oldu sona yazmalıydık.)
function save(puan=10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
save(undefined, student)

let students = ["Tayfun Yılmaz", "Edvin Davulcu", "Melih Sahtiyan", "İrem Batak"]
console.log(students)

let students2 = [student, {id:2, name:"Melih"}, "Eskişehir", {city:"İstanbul"}]
console.log(students2)


//REST - SPREAD - DESTRUCTURING


//rest -> kalan
//params -> c#'daki karşılığı
//varArgs -> java'daki karşılığı
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

console.log(typeof showProducts)
//Eğer elma,armut,karpuz'u array içinde alırsak 2 arraya almış oluruz çünkü 
//üstteki ...products kısmı array olarak bize veriyor zaten.
showProducts(10, "Elma", "Armut", "Karpuz")

//spread -> ayırmak
let points = [1,2,3,4,60,14]
console.log(...points)
console.log(Math.max(...points))

//destructuring -> elimizdeki array'in değerlerini değişkenlere atamamızı sağlar.
let populations = [10000, 20000, 30000, [40000, 100000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)


