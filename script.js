const item = document.getElementById("input-item");

const botaoSalvarItem = document.getElementById("adicionar-item");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento){
    evento.proventDefault()
    console.log("entrei na função");
}
