const botao = document.querySelector("button")
const numeroConselho = document.querySelector(".aviso-id")
const descricaoConselho = document.querySelector(".descricao")

 async function conselhoAleatorio(){
    const resposta = await fetch("https://api.adviceslip.com/advice") 
    const conteudoConselho = await resposta.json();
    const idConselho = `Advice #${conteudoConselho.slip.id}`;
    const textoConselho = `"${conteudoConselho.slip.advice}"`;

    numeroConselho.innerHTML = idConselho;
    descricaoConselho.innerHTML = textoConselho;
    
}

botao.addEventListener("click", conselhoAleatorio);

conselhoAleatorio();