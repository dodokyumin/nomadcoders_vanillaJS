const H1 = document.querySelector("div.hello:first-child h1");

function handleH1Click() {
  H1.classList.toggle("clicked");
}

H1.addEventListener("click", handleH1Click);
