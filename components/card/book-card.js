class BookCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const coverUrl = this.getAttribute('coverUrl');
        const title = this.getAttribute('title');
        const author = this.getAttribute('author');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ddd;
                    padding: 16px;
                    margin: 10px;
                    display: inline-block;
                    width: 200px;
                    text-align: center;
                }
                img {
                    max-width: 100%;
                    height: auto;
                }
                h3 {
                    font-size: 1.2em;
                    margin: 8px 0;
                }
                button {
                    margin-top: 10px;
                    padding: 8px;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="card">
                <img src="${coverUrl}" alt="${title}">
                <h3>${title}</h3>
                <p>${author}</p>
                <button>Ver Detalles</button>
            </div>
        `;

        // Escuchar el clic para mostrar los detalles del libro
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('showDetail', { bubbles: true, composed: true }));
        });
    }
}

customElements.define('book-card', BookCard);
