
let nameEl = document.getElementById("name-el");
let ageEl = document.getElementById("age-el");
let name =" "
let age =0;

function next()  {
  let k=document.getElementById('name').value;
  let p=document.getElementById('age').value;
  name=name+k;
  age=age+p;
  nameEl.textContent=name;
  ageEl.textContent=age;
}

