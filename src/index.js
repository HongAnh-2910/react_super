import './styles/style.css';
import './styles/app.scss';
import 'core-js/modules/es.object.values';
import 'core-js/modules/es.promise';
import sum from './utils';
import domHandler from './dom';

domHandler()

console.log(sum(1,6))

const objectStuden = {
    name:'Trung' , cntt:'Bk'
}
console.log('Object.values', Object.values(objectStuden))
let myPromise  = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(100)
    },1000)
})
myPromise 
.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});