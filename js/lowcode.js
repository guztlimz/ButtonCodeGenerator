function clipBoard(){
    var text = document.getElementById("resultImpresso").value;
    navigator.clipboard.writeText(text);
}

function codeGenerator(){   
    
    //Pegando os valores do HTML
    let componentsUser = []
        componentsUser[0] = document.getElementById("vlrClass").value;

    //Colocando os valores do HTML junto com uma String
    let components = [
        `class="${componentsUser[0]}"`
    ]
        

    //Conteúdo do elemento (Título do botão por exemplo)
    let content = document.getElementById("vlrContent").value;

    //Se o usuário não colocar um Conteúdo do elemento...
    if(content == ""){
        content="Template"
    }

    //Filtrando o Array dos valores e removendo dados sem valor
/*     let newComponentsFilter = components.filter(function(value){

        result = value.indexOf('""') > -1 
        if(result != true){ 
            return value
        }
        else{
        }
    }) */

    //Trocando os separadores padrões do Array(,)
/*     newComponentsFilter = newComponentsFilter.join(" ") */

    //Array de Comandos
    let command = [
        `<button ${components}>${content}</button>`,
    ]


    //Buscando a requisição do Usuário e inserindo em uma variável
    let reqUser = "botão";
    let resultReference

    //Buscando a requisição do usuário e apresentando os respectivos elementos
    switch(reqUser){

        case "botão":
            //document.getElementById("resultImpresso").value = command[0];
            resultReference = command[0];
            break;
        default:
            document.getElementById("resultImpresso").value = "Dados Inválidos";
    }
    //document.getElementById("buttonResult").innerHTML = resultReference;

    //BackgroundColor
    let backcolor = document.getElementById("backColorPick").value;
    document.getElementById("backColorValue").innerHTML = backcolor;

    //Color
    let colorVl = document.getElementById("colorPick").value;
    document.getElementById("colorValue").innerHTML = colorVl;

    document.getElementById("buttonResult").style.backgroundColor = backcolor
    document.getElementById("buttonResult").style.color = colorVl
}

function colors(){
    //BackgroundColor
    let backcolor = document.getElementById("backColorPick").value;
    document.getElementById("backColorValue").innerHTML = backcolor;

    //Color
    let colorVl = document.getElementById("colorPick").value;
    document.getElementById("colorValue").innerHTML = colorVl;
}
