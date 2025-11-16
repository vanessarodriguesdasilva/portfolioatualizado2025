function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
  }

  function fecharModal(id) {
    document.getElementById(id).style.display = "none";
  }

  // Fecha o modal ao clicar fora dele
  window.onclick = function(event) {
    const modais = document.querySelectorAll('.modal');
    modais.forEach(function(modal) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }