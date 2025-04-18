function openApp(app) {
  // Simula tela de carregamento antes de abrir o app
  const loader = document.createElement('div');
  loader.innerHTML = "<p>Carregando...<br><small>Siga no TikTok: @.wipp</small></p>";
  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.backgroundColor = "#000";
  loader.style.color = "#ff0000";
  loader.style.textAlign = "center";
  loader.style.fontSize = "30px";
  loader.style.display = "flex";
  loader.style.alignItems = "center";
  loader.style.justifyContent = "center";
  loader.style.zIndex = "9999";
  document.body.appendChild(loader);
  
  setTimeout(() => {
    window.location.href = app;
  }, 2000); // Espera 2 segundos antes de redirecionar
}

function gerarELink() {
  const itemId = document.getElementById("item_id").value;
  const token = document.getElementById("access_token").value;
  const region = document.getElementById("region").value;
  
  if (!itemId !token !region) {
    alert("Preencha todos os campos!");
    return;
  }

  const url = https://wishlistadderff.squareweb.app/api/add_wishlist_item?item_id=${encodeURIComponent(itemId)}&access_token=${encodeURIComponent(token)}&region=${encodeURIComponent(region)};
  window.open(url, "_blank");
}