let display = document.getElementById("inputtext");
let previousValue = 0;
let currentValue = "" ;
let operation = null ;

function calculate(number){
    currentValue = currentValue + number; 
    display.value = currentValue ;
}

function add()
{
    previousValue = parseFloat(currentValue);
    currentValue =" ";
    operation = "add"; 
}
function subtract()
{
    previousValue = parseFloat(currentValue);
    currentValue =" ";
    operation = "subtract"; 
}
function divide()
{
    previousValue = parseFloat(currentValue);
    currentValue =" ";
    operation = "divide"; 
}
function multiply()
{
    previousValue = parseFloat(currentValue);
    currentValue =" ";
    operation = "multiply"; 
}
function remainder()
{
    previousValue = parseFloat(currentValue);
    currentValue =" ";
    operation = "remainder"; 
}
function equals ()
{
    const currentNumber = parseFloat(currentValue) ;
    if ( operation == "add")
    {
        display.value =  previousValue + currentNumber ;
        
    }
    if ( operation == "subtract")
    {
        display.value =  previousValue - currentNumber ;
            
    }
    if ( operation == "divide")
    {
        display.value =  previousValue / currentNumber ;
                
    }
    if ( operation == "multiply")
    {
        display.value =  previousValue * currentNumber ;

    }
    if ( operation == "remainder")
        {
            display.value =  previousValue % currentNumber ;
    
        }
}

function clr()
{
    previousValue = 0;
     currentValue = "" ;
     operation = null ;
    display.value ="0 ";
}
function del()
{
    display.value =  display.value.slice(0,-1);
}
