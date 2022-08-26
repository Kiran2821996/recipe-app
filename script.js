let input = document.querySelector(".input")
let submit = document.querySelector(".button")
let container=document.querySelector(".container")

submit.addEventListener("click",()=>{
    container.innerHTML=null
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}
    `).then(res=>res.json())
    .then(data=>{
       
            let datas = data["meals"]
            datas.forEach(element => {
                let {strMeal,strMealThumb,strInstructions,strYoutube} = element
                let html = `<div class="main">
                    <div class="left">	
                      <h1>${strMeal}</h1>
                      <div class="right"><img src="${strMealThumb}" width="250px" height="150px"/></div>
                      <p>${strInstructions}</p>
                      <a href="${strYoutube}">Link for full preparation</a><span>
                    </div>
                  
                  </div>`
                  container.innerHTML+=html
            });
            
           
        
       
    }).catch(err=>alert("no recipes"))
})