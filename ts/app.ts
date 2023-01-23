let people: any = {}
people.age = 12

let arrayA: any[] = []
arrayA.push(1)

let people2: {
    age: number,
    name : string
}[] = []

people2.push({
    age:12,
    name:'trung'
})

const sum = (sum1:number , sum2:number):number =>  sum1 + sum2

const sum2 :(sum1:number , sum2:number) => number = (sum1 , sum2) =>  sum1 + sum2
// void kieu k return ra gi`
const handle = () => {
    console.log(123)
  }

/**union */
let price: string | number | boolean
price = '10'
price = 20
price = false

let body: { name: string | number } | { firstName: string } = {
  name: 100,
  firstName:'1'
}
/**
 * interface
 */

// co 2 ten interface giong nhau mac dinh se merge vao`
interface State{
    age: number,
    name : string
}

interface State{
    info: number,
    
}

let people3:State = {
    age: 12,
    name : '12',
    info:12
}

// type

type State2 = {
    age: number,
    name : string
}
type State3 = {
    info: number,
}

let people4:State2|State3 = {
    age: 12,
    name : '12',
    info : 3
}

const handleClick = <Type>(value: Type) => value

let value = 100
handleClick<number>(value)