

 home = {
     validateEmail(data) {
        var flag = true;    
         if (!/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(data)) {
             console.log("esta como el orto");
            flag = false;
         }
         
       return flag;
      },

      validateName(data) {
        var flag = true;    
         if (!/^[A-Za-z]+$/.test(data)) {
             console.log("mal nombre");
            flag = false;
         }
       return flag;
      },

      validateTel(data) {
        var flag = true;    
         if (!/^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/.test(data)) {
             console.log("mal num");
            flag = false;
         }
       return flag;
      },

      validar(){
        let email = document.getElementById("email");
        if (home.validateEmail(email.value)){
            console.log("email valido")
            let name = document.getElementById("name");
            if(home.validateName(name.value)){
                console.log("nombre valido")   
                let tel = document.getElementById("tel");                
                if(home.validateTel(tel.value)){
                    console.log("telefono valido")
                }else{
                    let errorTel = document.getElementById("errorTel");
                    errorTel.innerText = "Error al ingresar el telefono";
                    errorTel.setAttribute('class', 'error'); 
                }
            }else{
                let errorName = document.getElementById("errorName");
                errorName.innerText = "Error al ingresar el nombre";
                errorName.setAttribute('class', 'error');
            }
    } else {
        let errorEmail = document.getElementById("errorEmail");
        errorEmail.innerText = "Error al ingresar el mail";
        errorEmail.setAttribute('class', 'error');
    }
      }

   
      

    }


   
    let url = 'https://apis.datos.gob.ar/georef/api/provincias';

    fetch(url)
    .then(response => response.json())
    .then(data => generateHtml(data))
    
    
    
    // let generateHtml = (data) => {
      
    //   data.provincias.map((province)=>{
        
    //     let newOption = document.createElement('option');
    //     newOption.innerHTML = province.nombre
    //     let prov = document.getElementById("prov")
    //     prov.appendChild(newOption)
    //   })
    // }

    let generateHtml = (data) => {
      console.log(data.provincias[1])
      let datos = data.provincias.sort((a, b) => a.nombre.localeCompare(b.nombre));
      data.provincias.map((province)=>{
        let newOption = document.createElement('option');
        newOption.innerHTML = province.nombre
        let prov = document.getElementById("prov")
        prov.appendChild(newOption)
        
      })
      
      
    }
    
    let provSelection = () => {
        let prov = document.querySelector('#prov').value
        let urlMuni = 'https://apis.datos.gob.ar/georef/api/municipios?provincia='+prov+'&campos=id,nombre&max=100'
        fetch(urlMuni)
        .then(response => response.json())
        .then(dataProv => generateHtmlProv(dataProv))
        console.log('hola')
    }
    

    let generateHtmlProv = (dataProv) => {
        let municipio = document.getElementById("municipio")
        municipio.innerHTML=''
        dataProv.municipios.map((muni)=>{
          let newOption = document.createElement('option');
          newOption.innerHTML = muni.nombre
          let municipio = document.getElementById("municipio")
          municipio.appendChild(newOption)
        })
    }





    //    validar(){
    //          var flag = false;
    //          let email = document.getElementById("email");
    //          if (home.validateEmail(email.value)){
    //              flag = true;
    //              if (flag == true) {
    //                  var flag = false;
    //                  let name = document.getElementById("name");
    //                  if(home.validateName(name.value)){
    //                      flag = true;
    //                      if (flag == true) {
    //                          var flag = false;
    //                          let tel = document.getElementById("tel");
    //                          if(home.validateTel(name.value)){
    //                              flag= true;
                            
    //                      }else{
    //                          let errorTel = document.getElementById("errorTel");
    //                          errorTel.innerText = "Error al ingresar el nombre";
    //                          errorTel.setAttribute('class', 'error'); 
    //                      }
    //                  }else{
    //                      let errorName = document.getElementById("errorName");
    //                      errorName.innerText = "Error al ingresar el nombre";
    //                      errorName.setAttribute('class', 'error');
    //                  }
    //              }else{
    //                  let errorEmail = document.getElementById("errorEmail");
    //                  errorEmail.innerText = "Error al ingresar el mail";
    //                  errorEmail.setAttribute('class', 'error');
    //              }

    //    }






//     }
// }
//     }
// //        validar(){
//         var flag = false;
//          let email = document.getElementById("email");
//         if (home.validateEmail(email.value)){
//                flag = true;
//             if (flag == true) {
//                     // var flag = false;
//                     // console.log(flag);
//                     let name = document.getElementById("name");
//                     console.log(name.value);
//                     if(home.validateName(name.value)){
//                         flag = true;
//                      if (flag == true) {
//                              let tel = document.getElementById("tel");
//                              if(home.validateTel(tel.value)){
//                                  flag= true;
//                                  console.log("tel correcto");
//                              }else{
//                                 let errorTel = document.getElementById("errorTel");
//                                 errorTel.innerText = "Error al ingresar el nombre";
//                                 errorTel.setAttribute('class', 'error');
//                              }
//                     }else{
//                         let errorName = document.getElementById("errorName");
//                         errorName.innerText = "Error al ingresar el nombre";
//                         errorName.setAttribute('class', 'error');
//                     }
                    
                    
            
                
            
//         } else {
//             let errorEmail = document.getElementById("errorEmail");
//             errorEmail.innerText = "Error al ingresar el mail";
//             errorEmail.setAttribute('class', 'error');
            

//         }
        
                
//             }
//        }

function displayHamburger() {
  var nav = document.querySelector('.navbar_items');
  var burger = document.querySelector('.burger');
  var body = document.querySelector('.main')
  console.log(nav)
  console.log(burger)
  console.log(body)
  burger.classList.toggle('toggleBurger')
  nav.classList.toggle('nav_active')
  body.classList.toggle('nav_active_body')
}
      
      
      
      
      
