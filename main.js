
function myFunction(){
    let webDevelopmet = document.getElementById("web").value;
    let graphicDesign = document.getElementById("graphic").value;
    let dataEntry = document.getElementById("data").value;
    let computerScince = document.getElementById("computer").value;
    let grads = "";


    let totals = parseFloat(webDevelopmet) + parseFloat(graphicDesign) + parseFloat(dataEntry) + parseFloat(computerScince);
    let perce = (totals / 400) * 100;
    if(perce <= 100 && perce >= 80){
        grads = '"A+"';
    }else if(perce <= 79 && perce >= 70){
        grads = '"A"';
    }else if(perce <= 69 && perce >= 60){
        grads = '"B"'
    }else if(perce <= 59 && perce >= 40){
        grads = '"C"'
    }else{
        grads = '"F"'
    }

    if(perce >= 39.5){
        document.getElementById("result").innerHTML= `you total is ${totals}, 
        you percentage is ${perce.toFixed()}, your grade is ${grads} and you are pass`
    }
    else{
        document.getElementById("result").innerHTML= "you are fail.";
    }
    
}

