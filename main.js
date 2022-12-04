function insertFooter() {
    let ft = document.getElementById("footer");
    ft.classList.add("footer");
    
    let con = document.createElement("div");
    con.innerHTML = "Social pages";
    con.classList.add("contacts");
    ft.appendChild(con);

    //telegram
    let soc = document.createElement("div");
    let a = document.createElement("a");
    let telega = "<i class='fa-brands fa-telegram'></i>";
    a.innerHTML = telega;
    a.classList.add("social");
    a.classList.add("telega");
    a.setAttribute("href", "https://www.t.me/zhussupkhanov");
    soc.appendChild(a);
    ft.appendChild(soc);

    // insta
    soc = document.createElement("div");
    a = document.createElement("a");
    let insta = "<i class='fa-brands fa-instagram'></i>";
    a.innerHTML = insta;
    a.classList.add("social");
    a.classList.add("insta");
    a.setAttribute("href", "https://www.instagram.com/zhussupkhanov/");
    soc.appendChild(a);
    ft.appendChild(soc);
  
    // git
    soc = document.createElement("div");
    a = document.createElement("a");
    let git = "<i class='fa-brands fa-github'></i>";
    a.innerHTML = git;
    a.classList.add("social");
    a.classList.add("git");
    a.setAttribute("href", "https://www.github.com/arabianlarin");
    soc.appendChild(a);
    ft.appendChild(soc);
  
}
insertFooter();
