import './scss/style.scss'
import http from './http';
import anon from './img/anon.jpg'
//demo test api
const getdata = async()=>{
   const data = await http.getDatas('products/search/62c7ef3a3d65a8bfcce5d3c4')
   return data;
} 
getdata().then(value => console.log(value))

//demo import hình ảnh vào 
const imgNode = document.querySelector('.class2')
imgNode.src = anon
console.log(imgNode) 