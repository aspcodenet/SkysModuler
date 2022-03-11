import {goodProduct, Product} from './Data/Product.js'   
import { showSection } from './UI/Section.js'

const listLink = document.getElementById('listLink')
const newLink = document.getElementById('newLink')


//0.5 Vi skapar editProduct 
// OBS rad 93 
//                  p = 
//       slarviga Stefan...fast det funkar ändå? tills...
//                "use strict"


//1. Modul ! Vad är det? 

//2. Vi skapar produkt  med Class, int, några functions
//3. Make it work... export, import, type=module 

// ---




console.log(goodProduct)


const baseApi = 'https://fakestoreapi.com/products' 





newLink.addEventListener("click",()=>{ 
    showSection('sectionNew');    
});

listLink.addEventListener("click",()=>{ 
    showSection('sectionList');    
});




function editProduct(id){
    alert('Nu editeras ' + id);
}

window.editProduct = editProduct;


function renderTr(product){
    let jsCall = `editProduct(${product.id})`;
    // jsCall = editProduct(18)
    // jsCall = editProduct(19)
    let template = `<tr>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.color}</td>
                        <td><a href="#" onclick="${jsCall}">EDIT</td>
                    </tr>`
    productTableBody.innerHTML = productTableBody.innerHTML + template;
} 
// 


function refreshItems(){

    // fetch('https://hockeyplayers.systementor.se/stefan/player')
    // .then(response=>response.json())
    // .then(array=>{
    //     //json -> items
    //     console.log(array)
    // });

    items = [];
    productTableBody.innerHTML = '';

    fetch(baseApi)
    .then(response=>response.json())
    .then(array=>{
            //json -> items
            console.log(array)
            array.forEach(prod=>{
                let p = new Product(prod.id,
                    prod.title,
                    prod.price,
                    prod.category)                    
                items.push(p)
            });
            items.forEach( (item) => {
                renderTr(item);
            });
    })

}

let items = [];
refreshItems();


showSection('sectionList'); 