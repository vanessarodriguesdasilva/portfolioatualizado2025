function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
  }

  function fecharModal(id) {
    document.getElementById(id).style.display = "none";
  }

  window.onclick = function(event) {
    const modais = document.querySelectorAll('.modal');
    modais.forEach(function(modal) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
