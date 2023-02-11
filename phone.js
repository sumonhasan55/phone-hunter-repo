const loadPhones = async (searchFieldText,dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);

};


const displayPhones = (phones, dataLimit ) => {

    const PhonesContainer = document.getElementById('phoneContainer');
    PhonesContainer.innerText='';


    
    const ShowAllbtn = document.getElementById('show-allbtn');
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0,9);

         ShowAllbtn.classList.remove('d-none')
        
    } else {
         ShowAllbtn.classList.add('d-none')
        
    }
   
   

   const noPhone = document.getElementById('NotFound');
   if (phones.length === 0) {
    noPhone.classList.remove('d-none');
    
    
   } else {
    noPhone.classList.add('d-none');
    
   }
   togleSpiner(false)

    phones.forEach(phone => {

        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add("col")




        phoneDiv.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top img-fluid p-3" alt="...">
        <div class="card-body">
        <h5 class="card-title">${phone.brand}</h5>
          <h5 class="card-title">${phone.phone_name}</h5>
          <p<h5 class="card-title">${phone.slug}</h5></p>
        </div>
   
     </div>

        `;
        PhonesContainer.appendChild(phoneDiv);

        //console.log(phone)
        togleSpiner(false)

    });


};

 const searchBtn = document.getElementById('search-btn').addEventListener('click',function(){
    // spinner start
   processSearch(10)

   
 });

 document.getElementById('inputSearchField').addEventListener("keypress", function(e){
    
     if(e.key === "Enter"){

        console.log('value')
        
       
       
       
       }
    
 })
//  spinner function

 const togleSpiner = isLoading => {
    const loaderSection = document.getElementById('loading');
    if(isLoading){

        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
 };

 const processSearch = (dataLimit) =>{

    togleSpiner(true);

    const searchField = document.getElementById('inputSearchField');
    const searchFieldText = searchField.value;

    loadPhones(searchFieldText, dataLimit)
    searchField.value='';

 } 


 //show all btn-function
//  const showAllbtn = isShowing =>{
//     const ShowAllbtn = document.getElementById('show-allbtn');
//     if (isShowing) {
//         showAllbtn.classList.remove('d-none')
        
//     } else {
//         showAllbtn.classList.add('d-none')
        
//     }


//  }
 const ShowAllbtn = document.getElementById('show-allbtn').addEventListener('click',function(){
processSearch();
 });

//loadPhones();