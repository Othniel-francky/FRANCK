let formulaire = document.getElementsByTagName("form")[0];
formulaire.addEventListener("submit", async (e) => {
  e.preventDefault();
  let input = document.querySelectorAll("input");
  let monObjet ={

  }
  input.forEach((element, indice) => {
    monObjet[element.name] = element.value;
  });
  const sendData = await fetch("http://localhost:4000/auth/register", {
    method: "POST",
  body: JSON.stringify(monObjet)
  });
  console.log("-----------", monObjet);
  
});
