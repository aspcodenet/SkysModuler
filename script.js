const sectionList = document.getElementById('sectionList')
const sectionNew = document.getElementById('sectionNew')
const sectionEdit = document.getElementById('sectionEdit')
const listLink = document.getElementById('listLink')
const newLink = document.getElementById('newLink')


//1. Modul ! Vad är det? 
//2. Vi skapar produkt  med Class, int, några functions
//3. Make it work... export, import, type=module 



const baseApi = 'https://fakestoreapi.com/products' 


class Product{
    constructor(id,name,price,color){
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
   }
}


newLink.addEventListener("click",()=>{ 
    showSection('sectionNew');    
});

listLink.addEventListener("click",()=>{ 
showSection('sectionList');    
});



function showSection(sectionsId){
    if(sectionsId == 'sectionList'){
        sectionList.style.display = "block";
        sectionNew.style.display = "none";
        sectionEdit.style.display = "none";
    }
    else if(sectionsId == 'sectionNew'){
        sectionList.style.display = "none";
        sectionNew.style.display = "block";
        sectionEdit.style.display = "none";
    }
    else if(sectionsId == 'sectionEdit'){
        sectionList.style.display = "none";
        sectionNew.style.display = "none";
        sectionEdit.style.display = "block";
    }
}



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
                p = new Product(prod.id,
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