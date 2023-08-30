import "./style.css";

window.onload = function() {
  const pronoun = [`the`, `our`];
  const adj = [`great`, `big`, "cool", "reliable", "progressive", "super"];
  const noun = [`jogger`, `racoon`, "code", "foundation", "cat", "roots"];
  const domainGen = [`.com`, `.org`, `.net`];
  var domainList = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domainList.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  let domain = document.querySelector("#domain");
  for (let i = 0; i < domainList.length; i++) {
    domain.innerHTML += "<li>" + domainList[i] + "<li>";
  }
};
c;
