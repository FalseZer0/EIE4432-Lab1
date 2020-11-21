let a;
let b;
let c;
let as;
let bs;
let cs;
let allInputs = document.querySelectorAll("input");
let out = document.querySelector("#out");
let button = document.getElementById("calc");
let flag = true;
let errorMessage = "";

button.addEventListener("click",calculation);

function calculation()
{   
    //reset&initialization
    for(let i = 0;i<allInputs.length;i++)
    {
        allInputs[i].classList.remove("input2");
    }
    as = document.getElementById("a");
    bs = document.getElementById("b");
    cs = document.getElementById("c");
    a = Number(as.value);
    b = Number(bs.value);
    c = Number(cs.value);
    out.innerHTML="";
    //valdation
    validation(a,b,c);
    if(flag)
    {
        let D = Math.pow(b,2)-4*a*c;
        if(D<0)
        {
            out.innerHTML += "Solution: roots are imaginary";
        }
        else if(D === 0)
        {
            let x = (-b)/(2*a);
            out.innerHTML+="Solution: x = "+x.toFixed(3);
        }
        else if(D>0)
        {
            let x1 = ((-b)+Math.sqrt(D))/(2*a);
            let x2 = ((-b)-Math.sqrt(D))/(2*a);
            out.innerHTML+="Solution: x<sub>1</sub> = "+x1.toFixed(3)+", x<sub>2</sub> = "+x2.toFixed(3);
        }
    }
    else
    {
        alert(errorMessage);
    } 
}

function validation(a,b,c)
{   
    flag = true;
    //reset of the error message    
    errorMessage = "";
    let am = "Invalid entry for a. Must be a none-zero integer between -50 and +50"
    let bm = "Invalid entry for b. Must be an integer between -50 and +50"
    let cm = "Invalid entry for c. Must be an integer between -50 and +50"
    //validation
    if(a===0||!Number.isInteger(a)||a<-50||a>50)
    {   
        errorMessage+=am+'\n';
        flag = false;
        let temp = document.getElementById("a");
        temp.classList.add("input2");
    }
    if(bs.value==""||!Number.isInteger(b)||b<-50||b>50)
    {
        errorMessage+=bm+'\n';
        flag = false;
        let temp = document.getElementById("b");
        temp.classList.add("input2")
    }   
    if(cs.value==""||!Number.isInteger(c)||c<-50||c>50)
    {
        errorMessage+=cm+'\n';
        flag = false;
        let temp = document.getElementById("c");
        temp.classList.add("input2")
    }
}