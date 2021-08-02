//  <  =  &lt;
//  >  =  &gt;
//  espaço  =  &nbsp;
//  "  =  &quot;
//  '  =  &apos;

//copy text
function clipBoard(){
    var text = document.getElementById("resultImpresso").value;
    navigator.clipboard.writeText(text);
}

function callfunctions(){
    codeSettings()
    codeGenerator();
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

    //MaxWidth and MaxHeight

    let widthDiv = document.getElementsByClassName("displayCode")[0].offsetWidth;
    let heightDiv = document.getElementsByClassName("displayCode")[0].offsetHeight;

    document.getElementById("buttonResult").style.maxWidth = (widthDiv-20)+"px"
    document.getElementById("buttonResult").style.maxHeight = (heightDiv-20)+"px"
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

function codeGenerator()
{
    const htmlOf = document.getElementById("codeText")
    function htmlGenerator(){
        let content = document.getElementById("vlrContent").value;
        htmlOf.innerHTML = "&ltbutton"+' id="button"&gt'+content+"&lt/button&gt"
    };
    
    const cssOf = document.getElementById("codeTextCss")
    function cssGenerator(){
        let backcolor = document.getElementById("backColorPick").value
        let color = document.getElementById("colorPick").value;
        let height = document.getElementById("vlrHeight").value;
        let width = document.getElementById("vlrWidth").value;

        cssOf.innerHTML =
         `.button{        
    background-color:`+backcolor+`;
    color:`+color+`;
    height:`+height+`px;
    width:`+width+`px;
}`

    };
    htmlGenerator();
    cssGenerator()

    hljs.highlightAll();
}

let cssDisplay = document.getElementById("preCodeCss");

let cssBut = document.getElementById("cssButton")
let htmlBut = document.getElementById("htmlButton")

let activeColor = "#00ad45"
let desactiveColor = "rgba(255, 255, 255, 0.295)"
cssBut.style.backgroundColor=activeColor

function cssButton(){
    cssDisplay.style.opacity = 1
    htmlBut.style.backgroundColor= desactiveColor
    cssBut.style.backgroundColor=activeColor
}

function htmlButton(){
    cssDisplay.style.opacity = 0
    htmlBut.style.backgroundColor=activeColor
    cssBut.style.backgroundColor = desactiveColor
}

callfunctions()