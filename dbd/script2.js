// Esegue la funzione quando il documento è completamente caricato
document.addEventListener('DOMContentLoaded', function () {
    // Seleziona tutti gli elementi con la classe 'thumbnail'
    const thumbnails = document.querySelectorAll('.thumbnail');
    // Seleziona l'immagine principale con l'id 'mainImage'
    const mainImage = document.getElementById('mainImage');

    // Aggiunge un event listener a ciascuna miniatura per il click
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Cambia il src dell'immagine principale con quello della miniatura cliccata
            mainImage.src = thumbnail.src;
        });
    });

    // Seleziona il form per i commenti con l'id 'commentForm'
    const commentForm = document.getElementById('commentForm');
    // Seleziona il contenitore dei commenti con l'id 'comments'
    const commentsContainer = document.getElementById('comments');

    // Aggiunge un event listener per l'invio del form
    commentForm.addEventListener('submit', function (event) {
        // Previene il comportamento di default del form (ricaricamento della pagina)
        event.preventDefault();
        
        // Ottiene i valori inseriti nel campo username e nel campo commento
        const username = document.getElementById('username').value;
        const commentText = document.getElementById('commentText').value;

        // Controlla se entrambi i campi sono stati compilati
        if (username && commentText) {
            // Crea un nuovo elemento div per il commento
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            // Imposta l'HTML interno del nuovo commento con i dati inseriti
            newComment.innerHTML = `<p><strong>${username}:</strong> ${commentText}</p>`;
            
            // Aggiunge il nuovo commento al contenitore dei commenti
            commentsContainer.appendChild(newComment);

            // Resetta i campi del form
            commentForm.reset();
        } else {
            // Mostra un messaggio di avviso se i campi non sono completi
            alert('Per favore, completa tutti i campi.');
        }
    });
});

// Seleziona il bottone "Aggiungi al carrello" con la classe 'add-to-cart'
let carrello = document.body.querySelector('.add-to-cart');
// Aggiunge un event listener per il click sul bottone
carrello.addEventListener('click', function () {
    // Mostra un messaggio di avviso quando il bottone viene cliccato
    alert("HAI AGGIUNTO QUESTO GIOCO AL CARRELLO");
});
