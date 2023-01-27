//Book Class: represent a book
class Books {
    constructor(title, author, isbn) {
        this.title = title,
            this.author = author,
            this.isbn = isbn
    }
}
//UI Class
class UI {
    static displayBooks() {
        const storeBooks = 
            [
                {
                    title: "book one",
                    author: "jhon dpoe",
                    isbn: 16546548,
                },
                {
                    title: "book jghv",
                    author: "jhon jcfuy",
                    isbn: 1654548,
                },
                {
                    title: "book three",
                    author: "jhon jcfuy",
                    isbn: 1654548,
                },
            ]
            const books = storeBooks;
        
       
        

        books.forEach((book) => UI.adbookList(book))
    }

    static adbookList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr')

        row.innerHTML= `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>isbn</td>
        <td>actipon</td>
        `;
        list.appendChild(row)
    }

}
// Store Class

//Event display
document.addEventListener ('DOMContentLoaded', UI.displayBooks)
//Event ADD

//Event Remove