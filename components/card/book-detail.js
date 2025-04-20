class BookDetail extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set bookData(book) {
        this._bookData = book;
        this.render();
    }

    get bookData() {
        return this._bookData;
    }

    connectedCallback() {
        // Asegurarse de que bookData se haya establecido
        if (this._bookData) {
            this.render();
        }
    }

    render() {
        const book = this._bookData;

        this.shadowRoot.innerHTML = `
            <style>
                .book-detail {
                    border: 1px solid #ddd;
                    padding: 20px;
                    text-align: center;
                    margin: 20px;
                }
                h2 {
                    font-size: 2em;
                    margin-bottom: 10px;
                }
                p {
                    margin: 10px 0;
                }
                button {
                    margin-top: 20px;
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
            <div class="book-detail">
                <h2>${book.title}</h2>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Sinopsis:</strong> ${book.synopsis}</p>
                <p><strong>Fecha de publicación:</strong> ${book.publishedDate}</p>
                <button id="back">Volver</button>
            </div>
        `;

        this.shadowRoot.querySelector('#back').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('backToCard', { bubbles: true, composed: true }));
        });
    }
}

customElements.define('book-detail', BookDetail);
