let house:{
    address:string
} = {
    address : ''
}

house.address = '12'

// array

let products:any[] =[]
products.push(12)

// object array

const people:{
    name:string,
    age:number
}[] = []

people.push({
    name:'hehe',
    age:12
})

// function
// kieu void hàm k return về gì
const number = (num1:number , num2:number):number => num1 + num2

number(1,1)

const sub:(num1:number , num2:number) => number = 
(num1:number , num2:number)=> num1+num2

// kieu void k return ra gì
const handle = () => {
    console.log('123')
}

// union
let price : number | string | boolean = 12
price = 13

let objectA:{name:string} | {name:number} = {
    name:'123'
}

// enum
// enum kieu du lieuj mac dinh 0 ,1 ,2 , 3...
enum Size {
    X = 12,
    L = 1,
    XL
}

Size.X
// interface

interface Name {
    name :string
}

interface Name {
    name1 :string
}

const Namea:Name = {
    name : '123',
    name1:'1234'
}

// type

type Person = {
    name : string,
    age :number
}
type PersonFull = {
    name : string,
    age :number,
    adress : string
}

type PersonC = Person | PersonFull

type PersonB = Person & PersonFull

// renfrence type

const handleClick = <Type>(value : Type) => value

handleClick<string>('123')

// class



class Products  {
    //  readonly dung để đọc , k dc gán lại
    public name
    public price
    readonly mony:string = 'content'
    constructor(name:string , price:string|number)
    {
        this.name = name
        this.price = price
    }
}

const productsA = new Products('san pham 1' ,12) 
productsA.mony