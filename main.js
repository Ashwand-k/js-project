let kitchenInput = document.getElementById("kitchen-input")
let addBtn = document.getElementById("add-btn")
let kitchenItemList = document.getElementById("kitchen-items-list") 

let kitchenInputData;
let kitchenInputDataArray = [];

 function setLocalStorage(){
    localStorage.setItem("kitchenInput",JSON.stringify(kitchenInputDataArray))
 }

function getLocalStorage(){
    if(localStorage.getItem("kitchenInput")){
   kitchenInputDataArray = JSON.parse(localStorage.getItem("kitchenInput"))
   buildUI();
   console.log("data found")
    }else{
        console.log("no data found")
    }

}
function buildUI(){
 kitchenItemList.textContent = "",
    kitchenInputDataArray.forEach((item)=>{
        let li = document.createElement('li')
       
        let spanEl = document.createElement('span')
        li.appendChild(spanEl)
        spanEl.innerText=item;
     
        kitchenItemList.appendChild(li);
        kitchenInput.value =('');
        kitchenInput.focus();
    
        let trasBtn = document.createElement('i')
        trasBtn.classList.add('fas','fa-trash')
        li.appendChild(trasBtn);
    
        let editBtn = document.createElement('i')
        editBtn.classList.add('fas','fa-edit')
        li.appendChild(editBtn);
    

    })
   
}

function addKitchenItems(){
     kitchenInputData = kitchenInput.value;

     kitchenInputDataArray.push(kitchenInputData)

     setLocalStorage();

     getLocalStorage();
       
   
}

function delletKitchenItem(event){
   
    if(event.target.classList[1] === 'fa-trash'){
        let item = event.target.parentElement;
        item.remove();
    }
     }

     function editKitchenItem(event){
        if(event.target.classList[1] === 'fa-edit'){
            let editedValue = prompt("please add new value")
            let item = event.target.parentElement;
            let spanEl = item.querySelector('span')
            spanEl.innerText = editedValue ;  
        }
     }


addBtn.addEventListener('click',addKitchenItems)
kitchenItemList.addEventListener('click',delletKitchenItem)
kitchenItemList.addEventListener('click',editKitchenItem)

getLocalStorage();