//copy text
function clipBoard(){
    var text = document.getElementById("resultImpresso").value;
    navigator.clipboard.writeText(text);
}

//Settings
function codeSettings(){   

    //Conteúdo do elemento (Título do botão por exemplo)
    let content = document.getElementById("vlrContent").value;

    document.getElementById("buttonResult").innerHTML = content;

    //BackgroundColor
    let backcolor = document.getElementById("backColorPick").value;
    document.getElementById("backColorValue").innerHTML = backcolor;

    //Color
    let colorVl = document.getElementById("colorPick").value;
    document.getElementById("colorValue").innerHTML = colorVl;

    document.getElementById("buttonResult").style.backgroundColor = backcolor
    document.getElementById("buttonResult").style.color = colorVl

    //Border
    let vlrBorder = document.getElementById("vlrBorder").value;

    let bordercolor = document.getElementById("borderColorPick").value;
    document.getElementById("borderColorValue").innerHTML = bordercolor;

    let borderStyle = document.getElementById("borderStyle").value;
    
    if(vlrBorder != 0){
        document.getElementById("buttonResult").style.border = vlrBorder+"px " + borderStyle + " " + bordercolor
    }
    else{
        
    }


    //Height

    let vlrHeight = document.getElementById("vlrHeight").value

    if(vlrHeight != 0){
        document.getElementById("buttonResult").style.height = vlrHeight+"px"
    }
    else{
        document.getElementById("buttonResult").style.height = "50px"
    }

    //Width

    let vlrWidth = document.getElementById("vlrWidth").value

    if(vlrWidth!=0){
        document.getElementById("buttonResult").style.width = vlrWidth+"px"
    }
    else{
        document.getElementById("buttonResult").style.width = "150px"
    }
}

//Colors definitions
function colors(){
    //BackgroundColor
    let backcolor = document.getElementById("backColorPick").value;
    document.getElementById("backColorValue").innerHTML = backcolor;

    //Color
    let colorVl = document.getElementById("colorPick").value;
    document.getElementById("colorValue").innerHTML = colorVl;
}
