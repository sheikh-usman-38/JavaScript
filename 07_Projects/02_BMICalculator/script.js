const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);
   const result = document.querySelector("#results");
    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`
    } else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid height ${weight}`
    } else{
   const bmi =  (weight /   ((height*height)/ 10000)).toFixed(2);
   if(bmi == 18.6){
    result.innerHTML = `Under Weight = Less than <span>${bmi}</span>`
   }else if(bmi >= 18.6 && bmi<=24.9){
    result.innerHTML = `Normal Range  <span>${bmi}</span>`
   }else{
    result.innerHTML = `OverWeight  <span>${bmi}</span>`
   }
    }


})