var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var table = document.getElementById("table");
var outLine1 = document.querySelector(".input1 .form-control");
var outLine2 = document.querySelector(".input2 .form-control");
var container1=document.getElementById("container1")


//^ variable
var regName = /^[a-z0-9_-]{3,15}$/;
var regLink = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
var links=[];

if(localStorage.getItem("links")!==null){
    links=JSON.parse(localStorage.getItem("links"));
    for(var i=0;i<links.length;i++){
        displayLink(i)
    }
}

//^ Function
function check1() {
    
  if (regName.test(input1.value) === true) {
    input1.classList.add("is-valid");
    input1.classList.remove("is-invalid");
    outLine1.style.boxShadow = "0";
    outLine1.style.boxShadow = "0 0 0 .25rem rgb(83, 185, 83)";
    return true;
  } else {
    input1.classList.remove("is-valid");
    input1.classList.add("is-invalid");
    outLine1.style.boxShadow = "0";
    outLine1.style.boxShadow = "0 0 0 .25rem #eb1d36";
    if (input1.value === "") {
      outLine1.style.boxShadow = "0 0 0 0";
      input1.classList.remove("is-invalid");
      return false;
    }
    return false;
  }
}
function check2() {
  if (regLink.test(input2.value) === true) {
    input2.classList.add("is-valid");
    input2.classList.remove("is-invalid");
    outLine2.style.boxShadow = "0 0 0 .25rem rgb(83, 185, 83)";
    return true;
  } else {
    input2.classList.remove("is-valid");
    input2.classList.add("is-invalid");
    outLine2.style.boxShadow = "0 0 0 .25rem #eb1d36";

    if (input2.value === "") {
      outLine2.style.boxShadow = "0 0 0 0";
      input2.classList.remove("is-invalid");
      return false;
    }
    return false;
  }
}
function addLink() {
 if(check1()&&check2()===true){
    var wepSite={
        name:input1.value ,
        link:input2.value
    }
    links.push(wepSite)
    localStorage.setItem("links",JSON.stringify(links))
    displayLink(links.length-1)
    input1.value="";
    input2.value="";
    outLine2.style.boxShadow = "0 0 0 0";
    outLine1.style.boxShadow = "0 0 0 0";
    input2.classList.remove("is-valid");
    input1.classList.remove("is-invalid");

 }
 else{
   
    container1.innerHTML+=
    `
        <div class="overLay">
        <div class="cardWarning">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="d-flex gap-2"><span></span><span></span><span></span></div>
            <button onclick="closeWarningCard()"><i class="fa-solid fa-x"></i></button>
          </div>
          <h3>
            Site Name or Url is not valid, Please follow the rules below :
          </h3>
          <h4><i class="fa-regular fa-circle-right"></i>Site name must contain at least 3 characters
          </h4>
          <h4><i class="fa-regular fa-circle-right"></i>Site URL must be a valid one</h4>
        </div>
      </div>
    `
 }
}
function closeWarningCard(){
    container1.innerHTML="";
}

function displayLink(index){

  table.innerHTML += 
            `
          <tr>
          <td>${index+1}</td>
          <td>${links[index].name}</td>
          <td>
            <button class="btn-green rounded-2" >
              <a href="${links[index].link}" class="text-white text-decoration-none" target="_blank">
                <i class="fa-solid fa-eye pe-1"></i>Visit
              </a>
            </button>
          </td>
          <td>
            <button class="btn-green btn-red rounded-2 bg-red fw-bold" onclick="deleteLink(${index})">
                <i class="fa-solid fa-trash-can pe-2"></i>Delete
            </button>
          </td>
        </tr> 
        `
}

function deleteLink(index){

    links.splice(index,1)
    localStorage.setItem("links",JSON.stringify(links))
    table.innerHTML=
    `
    <tr>
          <th class="w-25">index</th>
          <th class="w-25">Website Name</th>
          <th class="w-25">Visit</th>
          <th class="w-25">Delete</th>
    </tr>
    `;
    for(var i=0;i<links.length;i++){
        displayLink(i)
    }
}
    





//   table.innerHTML += 
//         `
//           <tr>
//           <td>index</td>
//           <td>Website Name</td>
//           <td>
//             <div class="btn-green rounded-2">
//               <a href="#" class="text-white text-decoration-none">
//                 <i class="fa-solid fa-eye pe-2"></i>Visit
//               </a>
//             </div>
//           </td>
//           <td>
//             <div class="btn-green btn-red rounded-2 bg-red">
//               <a href="#" class="text-white text-decoration-none">
//                 <i class="fa-solid fa-trash-can pe-2"></i>Delete
//               </a>
//             </div>
//           </td>
//         </tr>
//         `
        ;

