fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("cards-container");

    data.cards.forEach(card => {
      const div = document.createElement("div");
      div.classList.add("card");

      const whatsappNumber = "555130920302"; // <-- substitua pelo número da loja
      const mensagem = encodeURIComponent(`Olá! Gostaria de um orçamento sobre: ${card.titulo}`);

      div.innerHTML = `
        <div class="card-bg" style="background-image: url('${card.imagem}');"></div>
        <h3>${card.titulo}</h3>
        <p>${card.descricao}</p>

        <a 
          href="https://wa.me/${whatsappNumber}?text=${mensagem}" 
          target="_blank" 
          class="btn-orcamento"
        >
          Solicitar Orçamento
        </a>
      `;

      container.appendChild(div);
    });
  })
  .catch(erro => console.log("Erro ao carregar JSON:", erro));


