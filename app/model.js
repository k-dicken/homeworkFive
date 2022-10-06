var userInfo = {};
var bookList = [
    {
        bookTitle: "The Book",
        bookAuthor: "The Author",
        bookPrice: "10.99",
        bookImage: "assets/images/dotpict_20220418_191225.png"
    },
    {
        bookTitle: "The Book 2",
        bookAuthor: "The Author 2",
        bookPrice: "10.99",
        bookImage: "assets/images/dotpict_20220418_191225.png"
    },
    {
        bookTitle: "The Book 3",
        bookAuthor: "The Author 3",
        bookPrice: "10.99",
        bookImage: "assets/images/dotpict_20220418_191225.png"
    }
];
var cart = [];

export function changePage(pageID, callback) {
    if (pageID == '' || pageID == "home") {
        $.get(`pages/home.html`, function (data) {
            // console.log('data ' + data);
            $('#app').html(data);
            callback();
            });
    } else if (pageID == "books") {
        $.get(`pages/${pageID}.html`, function (data) {
            // console.log('data ' + data);
            $('#app').html(data);
            $.each(bookList, function(idx, book){
                $(".allBooks").append(
                    `<div class="book">
                    <div class="book-img">
                        <img src="${book.bookImage}" alt="">
                    </div>
                    <div class="book-info">
                        <h3>${book.bookTitle}</h3>
                        <p>${book.bookAuthor}</p>
                        <p>$${book.bookPrice}</p>
                        <button id="${idx}">Buy</button>
                    </div>
                    </div>`
                );
            })
            callback();
        });
    } else if (pageID == "cart") {
        $.get(`pages/${pageID}.html`, function (data) {
            // console.log('data ' + data);
            $('#app').html(data);
            $.each(cart, function(idx, cartItem){
                

                $(".items").append(
                    `<div class="book">
                    <div class="book-img">
                        <img src="${bookList[cartItem].bookImage}" alt="">
                    </div>
                    <div class="book-info">
                        <h3>${bookList[cartItem].bookTitle}</h3>
                        <p>${bookList[cartItem].bookAuthor}</p>
                        <p>Quantity: 1</p>
                        <p>$${bookList[cartItem].bookPrice}</p>
                    </div>
                    </div>`
                );
            })
            // callback();
        });
    } else {
        $.get(`pages/${pageID}.html`, function (data) {
            // console.log('data ' + data);
            $('#app').html(data);
        });
    }
}

export function setUserInfo(userObject) {
    userInfo = userObject;
    console.log(userInfo);
}

export function addToCart(bookIdx) {
    cart.push(bookIdx);
    console.log(cart);
}