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

const divRiga = document.querySelector(".riga");
const searchInput = document.getElementById("search");

const mostraGiochi = (prodotti) =>{//definizione della funzione freccia
    divRiga.innerHTML/*sostituisco il contenuto di divProdotti con uno generato da js*/  = prodotti.map(gioco =>//trasformo ogni oggetto prodotto in una stringa, map itera su ogni elemento del array prodotti filtrati
        //ALT+96 = accento strano, tra accenti metto il codice da generare
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
    ).join("");//dopo che map crea l'array di stringhe join le unisce in una singola, separate da string vuota ""
}

mostraGiochi(giochi);//chiamo la funzione freccia appena creata

searchInput.addEventListener("keyup",(e)=>{//ogni volta che viene rilasiato un tasto...

    const searchValue = e.target.value.toLowerCase();//leggo il valore dell input search

if(searchValue){//se non è una stringa vuota...
    mostraGiochi(giochi.filter(item=> item.nome.toLowerCase().indexOf(searchValue) !== -1));
}// col metodo filter filtro gli orologi, in base al nome(item.name), index of, serve se il valore cercato è una sottostringa dei item.nome(da -1 se non è presente in nome)
else{//es è vuota la stringa stampa tutti gli oggetti
    mostraGiochi(giochi);
}
});

function getParametro(){
    var p = new URLSearchParams(window.location.search);
    searchInput.value = p.get("val");

}
getParametro();