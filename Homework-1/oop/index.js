class Customer{
    constructor(id, customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345")

//prototyping -> çok alakasız bir şeyi bile olsa ekleyebiliriz. (bu örnekte name gibi)
customer.name = "Tayfun Yılmaz"
console.log(customer.name)

//class'a prototyping yaptık.
Customer.bisey = "Bi şey"
console.log(Customer.bisey)

console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName = companyName
    }
}

//MAP - FILTER - REDUCE

//Map -> Map fonksiyonu, geoid şeklindeki dünyanın, 2 boyutlu olan kağıda aktarılması gibi
//dizinin farklı bir diziye haritalanmasını (projection) sağlar.

//Filter -> Filter fonksiyonu, belirli bir boolean ifadeye göre ilgili dizi elemanlarının
//yeni oluşacak diziye aktarılmasını sağlar.

//Reduce -> Reduce fonksiyonu, verilen bir koşula göre diziden tek bir eleman almak için 
//kullanılır. En yüksek değerli elemanı alma, elemanların toplamını bulma gibi işlemlerde
//kullanılabilir. 