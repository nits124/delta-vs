let url="http://universities.hipolabs.com/search?name=";
// http://universities.hipolabs.com/search?name=middle&country=turkey
let btn=document.querySelector('button');
btn.addEventListener('click', async ()=>{
  let country = document.querySelector('input').value;
  console.log(country);
  let ColArr = await getColleges(country);
  show(ColArr);
});

function show(ColArr){
  let list = document.querySelector('#list');
  list.innerText = "";
  
  for(col of ColArr){
    console.log(col.name);
    let li = document.createElement('li');
    li.innerText = col.name;
    list.appendChild(li);
  }
}
async function getColleges(country){
  try{
    let res = await axios.get(url+country);
    return res.data;
  }catch(err){
    console.log("error",err);
    return [];
  }
}