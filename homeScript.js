const giochi = [//array di oggetti giochi

    {
        id:0,
        nome:"Ghost of Tsushima",
        img:"https://gaming-cdn.com/images/products/9093/616x353/ghost-of-tsushima-director-s-cut-pc-gioco-steam-cover.jpg?v=1715876608",
        cat:"new",
        prezzo:"45.99€",
        link:"#",
    },

    {
        id:1,
        nome:"Manor Lords",
        img:"https://gaming-cdn.com/images/products/8253/616x353/manor-lords-pc-gioco-steam-europe-cover.jpg?v=1714401891",
        cat:"new",
        prezzo:"20.17€",
        link:"#",
    },


    {
        id:2,
        nome:"Helldivers 2",
        img:"https://gaming-cdn.com/images/products/9575/616x353/helldivers-2-pc-gioco-steam-europe-cover.jpg?v=1714742438",
        cat:"hot",
        prezzo:"28.68€",
        link:"#",
    },


    {
        id:3,
        nome:"Elden Ring",
        img:"https://gaming-cdn.com/images/products/4824/616x353/elden-ring-pc-gioco-steam-europe-cover.jpg?v=1711550841",
        cat:"topSeller",
        prezzo:"45.76€",
        link:"#",
    },


    {
        id:4,
        nome:"Skyrim",
        img:"https://gaming-cdn.com/images/products/9407/616x353/the-elder-scrolls-v-skyrim-anniversary-edition-anniversary-edition-pc-gioco-steam-cover.jpg?v=1702486981",
        cat:"topSeller",
        prezzo:"12.89€",
        link:"#",
    },


    {
        id:5,
        nome:"Cyberpunk 2077",
        img:"https://gaming-cdn.com/images/products/840/616x353/cyberpunk-2077-pc-gioco-gog-com-cover.jpg?v=1701271565",
        cat:"hot",
        prezzo:"22.15€",
        link:"#",
    },


    {
        id:6,
        nome:"RDR 2",
        img:"https://gaming-cdn.com/images/products/2584/616x353/red-dead-redemption-2-special-edition-special-edition-pc-gioco-rockstar-cover.jpg?v=1649857475",
        cat:"topSeller",
        prezzo:"26.78€",
        link:"#",
    },


    {
        id:7,
        nome:"Dead By Daylight",
        img:"https://gaming-cdn.com/images/products/1904/616x353/dead-by-daylight-pc-gioco-steam-cover.jpg?v=1683558326",
        cat:"hot",
        prezzo:"8.99€",
        link:"dbd/index2.html",
    },


    {
        id:8,
        nome:"Grayzone Warfare",
        img:"https://gaming-cdn.com/images/products/15557/616x353/gray-zone-warfare-pc-gioco-steam-cover.jpg?v=1714659015",
        cat:"new",
        prezzo:"27.99€",
        link:"#",
    },


    {
        id:9,
        nome:"Buckshot Roulette",
        img:"https://gaming-cdn.com/images/products/16592/616x353/buckshot-roulette-pc-gioco-steam-cover.jpg?v=1712846646",
        cat:"hot",
        prezzo:"2.49",
        link:"#",
    },

    {
        id:10,
        nome:"Hollow Knight",
        img:"https://gaming-cdn.com/images/products/2198/616x353/hollow-knight-pc-mac-gioco-steam-cover.jpg?v=1705490619",
        cat:"topSeller",
        prezzo:"12.84€",
        link:"#",
    },

    {
        id:11,
        nome:"Blasphemous",
        img:"https://gaming-cdn.com/images/products/4703/616x353/blasphemous-pc-gioco-steam-cover.jpg?v=1681994939",
        cat:"topSeller",
        prezzo:"4.21€",
        link:"#",
    },


    {
        id:12,
        nome:"Fallout 4",
        img:"https://gaming-cdn.com/images/products/2207/616x353/fallout-4-goty-edition-goty-edition-pc-gioco-steam-cover.jpg?v=1651225305",
        cat:"hot",
        prezzo:"8.99€",
        link:"#",
    },

    {
        id:13,
        nome:"Lies of P",
        img:"https://gaming-cdn.com/images/products/8855/616x353/lies-of-p-pc-gioco-steam-cover.jpg?v=1695052146",
        cat:"new",
        prezzo:"28.71€",
        link:"#",
    },

    {
        id:14,
        nome:"Dark Souls 3",
        img:"https://gaming-cdn.com/images/products/857/616x353/dark-souls-3-pc-gioco-steam-cover.jpg?v=1703156780",
        cat:"topSeller",
        prezzo:"19.71€",
        link:"#",
    },

    {
        id:15,
        nome:"Baldurs Gate 3",
        img:"https://gaming-cdn.com/images/products/4804/616x353/baldur-s-gate-3-pc-gioco-gog-com-cover.jpg?v=1710239606",
        cat:"new",
        prezzo:"53.39€",
        link:"#",
    },

];

const divRigaTop = document.querySelector(".riga1");
const divRigaNew = document.querySelector(".riga2");
const divRigaHot = document.querySelector(".riga3");

const mostra = (prodotti) =>{
    const giochiFiltratiTop = prodotti.filter(gioco => gioco.cat === "topSeller");

    divRigaTop.innerHTML = giochiFiltratiTop.map(gioco =>
        `
        <div class="colonna">
        <a href="${gioco.link}">
            <div class="contenuto">
                <img src="${gioco.img}" alt="Gioco" style="width:100%; border-radius: 15px;">
                <div class="info">
                    <h5 class="nomeGioco">${gioco.nome}</h5>
                    <h5 class="prezzoGioco">${gioco.prezzo}</h5>
                </div>
            </div>
            </a>
        </div>
        `
    ).join("");

    const giochiFiltratiNew = prodotti.filter(gioco => gioco.cat === "new");

    divRigaNew.innerHTML = giochiFiltratiNew.map(gioco =>
        `
        <div class="colonna">
        <a href="${gioco.link}">
            <div class="contenuto">
                <img src="${gioco.img}" alt="Gioco" style="width:100%; border-radius: 15px;">
                <div class="info">
                    <h5 class="nomeGioco">${gioco.nome}</h5>
                    <h5 class="prezzoGioco">${gioco.prezzo}</h5>
                </div>
            </div>
            </a>
        </div>
        `
    ).join("");

    const giochiFiltratiHot = prodotti.filter(gioco => gioco.cat === "hot");

    divRigaHot.innerHTML = giochiFiltratiHot.map(gioco =>
        `
        <div class="colonna">
        <a href="${gioco.link}">
            <div class="contenuto">
                <img src="${gioco.img}" alt="Gioco" style="width:100%; border-radius: 15px;">
                <div class="info">
                    <h5 class="nomeGioco">${gioco.nome}</h5>
                    <h5 class="prezzoGioco">${gioco.prezzo}</h5>
                </div>
            </div>
            </a>
        </div>
        `
    ).join("");
}

mostra(giochi);


const searchInput = document.getElementById("search");
        
    searchInput.addEventListener("keyup",(e)=>{//ogni volta che viene rilasiato un tasto...
    const searchValue = e.target.value.toLowerCase();//leggo il valore dell input search

    var p = new URLSearchParams();
    p.append("val", searchValue);
    location.href = "search.html?" + p.toString();
});
 const logBtn = document.querySelector('.bottoneAccount');
   logBtn.addEventListener("click", function(){
    const width = 600;
    const height = 400;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let newWindow = document.open("", "", "width = " + width + ",height = " + height + ",left = " + left + ",top = " + top);
    
    let styleCSS = newWindow.document.createElement("link");
    styleCSS.rel = "stylesheet";
    styleCSS.href = "loginStyle.css";
    newWindow.document.head.appendChild(styleCSS);

    let form = newWindow.document.createElement("form");
    form.classList = "container";

    let user = newWindow.document.createElement("input");
    user.type = "text";
    user.placeholder = "Nome Utente";
    user.required = true;

    let pwd = newWindow.document.createElement("input");
    pwd.type = "password";
    pwd.placeholder = "Password";
    pwd.required = true;

    let submit = newWindow.document.createElement("input");
    submit.type = "submit";
    submit.value = "inviaDati";

    form.appendChild(user);
    //newWindow.document.body.appendChild(span);
    form.appendChild(pwd);
    form.appendChild(submit);
    newWindow.document.body.appendChild(form);

    let script2 = newWindow.document.createElement("script");
    script2.src = "loginScript.js";
    newWindow.document.body.appendChild(script2);
    

});

