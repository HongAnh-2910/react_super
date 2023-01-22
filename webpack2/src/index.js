import sum from './handleSum';
import  domHandler from './dom';
import './styles/style.css';
import './styles/style.scss';

console.log(sum(10 , 20))

const info = {name :'Trung'}
const cloneInfo = {...info}
console.log(Object.values(cloneInfo))
domHandler()