import "./style.css";

window.onload = function() {
  const pronoun = [`the`, `our`];
  const adj = [`great`, `big`];
  const noun = [`jogger`, `racoon`];
  let domain = document.getElementById("domain");
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domain.innerHTML +=
          pronoun[i] + adj[j] + noun[k] + ".com" + "<br></br>";

        console.log(domain);
      }
    }
  }
};
