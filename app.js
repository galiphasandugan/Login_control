    const input = document.querySelector(".input")
    const password = document.querySelector(".password")
    const submit = document.querySelector(".btn")
    const form = document.querySelector(".container")
    
    const list = ["F1362-Galip Duğan","F1669- Gümüş","Q3586-Ali"]
    const list2 = ["*","?","%","&","!","+","=",")"]
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
       
        if(password.value.length > 7 && password.value.includes(...list2) &&  input.value.includes(...list))
         {
           
            alert("sorulara erişebilirisniz")
        }
    })


    






    // const input = document.querySelector(".input")
    // const password = document.querySelector(".password")
    // const submit = document.querySelector(".btn")
    
    // const list = ["F1362-Galip Duğan","F1669- Gümüş","Q3586-Ali"]
    // list.toString().toLocaleLowerCase()
    // submit.addEventListener("click",()=>{
    //     console.log(input.value.includes(...list));
    //     if(password.value.length > 8 && password.value.match(/[!?=)%&*]/gi) !== [] 
    //     && input.value.includes(...list)) {
    //         alert("sorulara erişebilirisniz")
    //     }
    // })