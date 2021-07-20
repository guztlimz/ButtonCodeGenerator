function verifyReq(){   
    
    //Pegando os valores do HTML
    let componentsUser = []
    componentsUser[0] = document.getElementById("vlrId").value;
    componentsUser[1] = document.getElementById("vlrClass").value;
    componentsUser[2] = document.getElementById("vlrName").value;
    componentsUser[3] = document.getElementById("vlrValue").value;

    //Colocando os valores do HTML junto com uma String
    let components = [
        `id="${componentsUser[0]}"`,
        `class="${componentsUser[1]}"`,
        `name="${componentsUser[2]}"`,
        `value="${componentsUser[3]}"`
    ]

    //Conteúdo do elemento (Título do botão por exemplo)
    let content = document.getElementById("vlrContent").value;

    //Se o usuário não colocar um Conteúdo do elemento...
    if(content == ""){
        content="Template"
    }

    //Filtrando o Array dos valores e removendo dados sem valor
    let newComponentsFilter = components.filter(function(value){

        result = value.indexOf('""') > -1 
        if(result != true){ 
            return value
        }
        else{
        }
    })

    //Trocando os separadores padrões do Array(,)
    newComponentsFilter = newComponentsFilter.join(" ")

    //Array de Comandos
    let Content = [
        `<button ${newComponentsFilter}>${content}</button>`,
        `<p ${newComponentsFilter}>${content}</p>`
    ]


    //Buscando a requisição do Usuário e inserindo em uma variável
    let reqUser = document.getElementById("commandLine").value
    let resultReference

    //Buscando a requisição do usuário e apresentando os respectivos elementos
    switch(reqUser){

        case "botão":
            document.getElementById("resultImpresso").value = Content[0];
            resultReference = Content[0];
            break;
        case "parágrafo":
            document.getElementById("resultImpresso").value = Content[1];
            resultReference = Content[1];
            break;
        default:
            document.getElementById("resultImpresso").value = "Dados Inválidos";
    }
    document.getElementById("resultInterpretado").innerHTML = resultReference;
}