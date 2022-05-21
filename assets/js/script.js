const baseUrl = "http://localhost:3000/paletas";

async function findAllPaletas() {
    const response = await fetch(`${baseUrl}/todas-paletas`);

    const paletas = await response.json();

    paletas.forEach(function(paleta) {
                document.querySelector("#paletaList").insertAdjacentHTML("beforeend", `<div class="PaletaListaItem">
          <div>
            <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
            <div class="PaletaListaItem__preco">R$ ${paleta.preco}</div>
            <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
          </div>
          <img class="PaletaListaItem__foto" src="./${paleta.foto}" alt=${`Paleta de ${paleta.sabor}`} />
        </div>`
        );
})}

async function findPaletaById(){
  const id = document.querySelector("#idPaleta").value;
  
  const response = await fetch(`${baseUrl}/paleta/${id}`);
  const paleta = await response.json();
  const paletaEscolhidaDiv = document.querySelector("#paletaEscolhida");
  
  paletaEscolhidaDiv.innerHTML = `
    <div class="PaletaCardItem">
      <div>
        <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
        <div class="PaletaCardItem__preco">R$ ${paleta.preco}</div>
        <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
      </div>
      <img class="PaletaCardItem__foto" src="./${paleta.foto}" alt=${`Paleta de ${paleta.sabor}`} />
    </div>`;
  
}

findAllPaletas();