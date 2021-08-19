class Book{
    
    // title;
    // author;
    // price;

    constructor(title, author, price){
        this.title = 'Title 1';
        this.author = 'Author 1';
        this.price = 1000;

    }

        getBookInfo(){
        console.log('Book: Title = '+ book1.title+', Author = ' +book1.author+ ', Price = ' +book1.price);
    }

}


const book1 = new Book('Title 1', 'Author 1', 1000);

// book1.title = 'Title 1';
// book1.author = 'Author 1';
// book1.price = 1000;

// console.log('Book: Title = '+ book1.title+', Author = ' +book1.author+ ', Price = ' +book1.price);

book1.getBookInfo();