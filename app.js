function pesquisar() {

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Definindo a varial para o elemento dentro do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);//confirmação de funcionalidade *deletar posteriormente
        // Transformar a string em letra minuscula para facilitar a pesquisa
     campoPesquisa = campoPesquisa.toLowerCase()

    //inicia variaveis para armazenar resultados
    let resultados = "";
    let titulo = "";
    let sinopse = "";

    // Itera sobre cada filme no array de filmes
    for (let filme of filmes) {
        titulo = filme.titulo.toLowerCase()
        snopse = filme.sinopse.toLowerCase()
        
        if(campoPesquisa == ""){
            section.innerHTML = "Nada foi digitado!"
            return
        };

        // Se partes da mina lista de objetos incluem o que esta no campo da pesquisa
        if(filme.titulo.includes(campoPesquisa) || filme.sinopse.includes(campoPesquisa) || filme.tags.includes(campoPesquisa)){
            //Então realise exibição do resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href=${filme.link} target="_blank" >${filme.titulo}</a>
                   </h2>
                    <h3>${filme.nota}</h3> 
                    <h4>${filme.ano}</h4>
                    <p>${filme.sinopse}</p>
                </div>
            `;
        };
        if(!resultados){
            resultados = "<p>Nada foi encontrado</p>"
        }
    };


    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}