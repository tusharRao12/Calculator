let string = ''
let button = document.querySelectorAll('.btn');
Array.from(button).forEach((button)=>{
   button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('textarea').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
        string = ""
        document.querySelector('textarea').value = string;
    }
    else if(e.target.innerHTML == 'B'){
        alert('work in Progress')
        document.querySelector('textarea').value = string;
    }
    else if(e.target.innerHTML == 'M'){
        alert('work in Progress')
        document.querySelector('textarea').value = string;
    }
    else{
    string = string + e.target.innerHTML;
    document.querySelector('textarea').value = string;
    }
   })
})