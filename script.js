

const lista = document.getElementById('lista-tarefas');
const textinput = document.getElementById('inputtext');
const btnadicionar = document.getElementById('adc');
const btnlimpar = document.getElementById('limpar')
const btnpersonalizar = document.getElementById('btnpersonalizar')
//customizar bloco de notas
btnpersonalizar.addEventListener("click",()=>{
   
    let opcao = prompt("personalizar bloco de tarefas:\n digite o numero da cor desejada:\n 1⚪ 2🟣 3🟢 ")


})













// Adicionando nova tarefa
btnadicionar.addEventListener("click", () => {
    let novatarefa = textinput.value;
    let li_nova = document.createElement('li');
    li_nova.textContent = novatarefa;
    lista.appendChild(li_nova);
    textinput.value = "";
    //botoes da nova tarefa

    //botao editar
    let btneditar = document.createElement('button')
    btneditar.classList.add("editar")//adiciona classe ao botao
    btneditar.textContent ="editar"
    li_nova.appendChild(btneditar)

    //botao concluir
    let btnconcluir = document.createElement('button')
    btnconcluir.textContent = "concluir"
    li_nova.appendChild(btnconcluir)
    btnconcluir.classList.add("concluir")//adiciona classe ao botao

    //bota apagar
    let btnapagar = document.createElement('button')
    btnapagar.classList.add("apagar")//adiciona classe ao botao
    btnapagar.textContent = "apagar"
    li_nova.appendChild(btnapagar)

   


    //eventos dos botoes
    //editar
    btneditar.addEventListener("click", () => {
    let opcao = prompt("digite a opçao desejada:\n 1 editar tarefa:\n 2 editar ordem da tarefa: ")
     if(opcao === "1"){
        let novoTexto = prompt("Editar tarefa:");
        li_nova.firstChild.textContent = novoTexto;
     }else if (opcao === "2"){
        //converte essa coleção HTML em um array JavaScript
        let todasTarefas = Array.from(lista.children);
      
        let novaPosicao = parseInt(prompt(`Digite a nova posição (1 até ${todasTarefas.length}`))
        
        if (novaPosicao <= todasTarefas.length && novaPosicao != 0) {
            if (novaPosicao === 1) {
                lista.insertBefore(li_nova, lista.firstChild);
            } else {
                //o elemento anterior recebe o elemento que esta  em todasTarefas na posiçao  digitada
                let elementoAnterior = todasTarefas[novaPosicao - 1];
                lista.insertBefore(li_nova, elementoAnterior);
            }
        } else {
            alert("Posição inválida!");
        }
     }
    })
    //concluir
    btnconcluir.addEventListener("click", () => {
    li_nova.style.color = "green";
})

   // botao apagar
   btnapagar.addEventListener("click", () => {
    lista.removeChild(li_nova);
})
 
        
})



// Limpar lista
btnlimpar.addEventListener("click", () => {
    lista.innerHTML = "";
});