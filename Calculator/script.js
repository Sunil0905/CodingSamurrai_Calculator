let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{

        // Ensure two operators are not added consecutively
        const lastChar = input.value.slice(-1);
        if ((e.target.innerHTML === '%' || e.target.innerHTML === '/' ||e.target.innerHTML === '' ||  e.target.innerHTML === '*' || e.target.innerHTML === '+' || e.target.innerHTML === '-') &&
            (lastChar === '%' || lastChar === '/' || lastChar === '*' || lastChar === '+' || lastChar === '-')) {
            return;
            }

            if (e.target.innerHTML === '.' && lastChar === '.') {
            return ;
          }
        // suspence 

        
         //uppr code 
        if(e.target.innerHTML == '='){
            try{
                string = eval(string);
                input.value = string;
            }
            catch(error)
            {
                input.value = 'Can`t calculated !';
                if(input.value.length >=13)
                {
                    input.style.fontSize = '22px';
                }
            }
        }
          
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
            inpuFontSize(input);
        }
        else if(e.target.innerHTML == 'DEL'){
            string = input.value.slice(0, -1);
            input.value = string;
            inpuFontSize(input);
        }   
        else{
            string += e.target.innerHTML;
            inpuFontSize(input);
            input.value = string;
        }
        
    });  
});

function inpuFontSize(input){
    if(input.value.length >=8){
        input.style.fontSize = '30px';
    }
    else{
        input.style.fontSize = '40px';
    }
}