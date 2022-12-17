/*
Define each constant,operator and bracket in javascript
When button is pressed, the corrosponding character is added to a string
The string is able to be viewed in the view box of the calculator
When enter is pressed the string is evaluated

PROBLEMS I WONT FIX:
-it just adds to the zero instead of replacing it when pressing 'CC'
-the negative number operator doesn't really work 
*/
//Create a node list of all buttons
let buttons = document.querySelectorAll("button");


function calc(){
    //button pressed
    pressed = this.innerText
    //get display
    display = document.getElementById('display').innerText;
    if (pressed == "CC"){
        //reset calculation columb
        display = '0'
    }
    else if (pressed == "ENTER"){
        //calculate calulcation string
        try{
            display = eval(display);
        }
        catch(err){
            display = "ERROR";
        }
    }    
    else{
        display += pressed
    }
    document.getElementById('display').innerText = display

}
//create a node list of buttons and apply the calculator function to each when button is clicked
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', calc)
}

