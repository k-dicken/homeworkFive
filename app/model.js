var userInfo = {};
var bookList = [
  {
    bookTitle: "Twilight Box Set",
    bookImage: "assets/images/twilight-box-set.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "99.99",
  },
  {
    bookTitle: "Harry Potter Box Set",
    bookImage: "assets/images/hp-box-set.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "100",
  },
  {
    bookTitle: "Game of Thrones Box Set",
    bookImage: "assets/images/got-box-set.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "100",
  },
  {
    bookTitle: "Finding Me",
    bookImage: "assets/images/finding me.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "27.99",
  },
  {
    bookTitle: "The Autobiography of Martin Luther King Jr. Edited",
    bookImage: "assets/images/mlk-biography.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "19.99",
  },
  {
    bookTitle: "An Autobiography of Elenor Roosevelt",
    bookImage: "assets/images/elenor-roosevelt-biography.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "17.99",
  },
  {
    bookTitle: "Misery",
    bookImage: "assets/images/misery.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "19.99",
  },
  {
    bookTitle: "Frankenstien",
    bookImage: "assets/images/frankenstein.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "15.99",
  },
  {
    bookTitle: "Phantoms",
    bookImage: "assets/images/phantoms.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "19.99",
  },
  {
    bookTitle: "Winnie the Pooh",
    bookImage: "assets/images/winnie-the-pooh.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "19.99",
  },
  {
    bookTitle: "The Cat in the Hat",
    bookImage: "assets/images/cat-and-the-hat.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "15.99",
  },
  {
    bookTitle: "Fun Facts about Space",
    bookImage: "assets/images/fun-facts-about-space.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "7.99",
  },
  {
    bookTitle: "To Kill a Mockingbird",
    bookImage: "assets/images/to-kill-a-mockingbird.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "15.99",
  },
  {
    bookTitle: "Becoming",
    bookImage: "assets/images/becoming.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "25.99",
  },
  {
    bookTitle: "Fire-Starter",
    bookImage: "assets/images/firestarter.jpg",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookPrice: "19.99",
  },
];
var featuredBooks = [12, 13, 14];
var bookCategories = [
  {
    category: "Booklets",
    books: [0, 1, 2],
  },
  {
    category: "Black History Books",
    books: [3, 4, 5],
  },
  {
    category: "Horror Books",
    books: [6, 7, 8],
  },
  {
    category: "Children's Books",
    books: [9, 10, 11],
  },
];
var cart = [];

export function changePage(pageID, callback) {
  if (pageID == "" || pageID == "home") {
    $.get(`pages/home.html`, function (data) {
      // console.log('data ' + data);
      $("#app").html(data);
      callback();
      $.each(featuredBooks, function (idx, bookID) {
        console.log(bookList[bookID]);
        $(".books-row").append(
          `<div class="book">
                    <div class="book-img">
                        <img src="${bookList[bookID].bookImage}" alt="">
                    </div>
                    <div class="book-info">
                        <p class="desc">${bookList[bookID].bookDesc}</p>
                        <p class="price">$${bookList[bookID].bookPrice}</p>
                        <button id="${bookID}">Add to Cart</button>
                    </div>
                    </div>`
        );
      });
    });
  } else if (pageID == "books") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log('data ' + data);
      $("#app").html(data);
      $.each(bookCategories, function (id, category) {
        let categoryClass = "category" + id;
        $("#books").append(
          `<div class="category">
                    <h2>${category.category}</h2>
                    <div class="${categoryClass} category-content">
                    </div>
                    </div>`
        );

        categoryClass = "." + categoryClass;

        for (var i = 0; i < category.books.length; i++) {
          // console.log(bookList[category.books[i]]);
          // $.each(bookList, function(idx, book){
          console.log(categoryClass);
          $(categoryClass).append(
            `<div class="book">
                        <div class="book-img">
                            <img src="${
                              bookList[category.books[i]].bookImage
                            }" alt="">
                        </div>
                        <div class="book-info">
                            <p class="desc">${
                              bookList[category.books[i]].bookDesc
                            }</p>
                            <p class="price">$${
                              bookList[category.books[i]].bookPrice
                            }</p>
                            <button id="${
                              category.books[i]
                            }">Add to Cart</button>
                        </div>
                        </div>`
          );
          // })
        }
      });
      callback();
    });
  } else if (pageID == "cart") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log('data ' + data);
      $("#app").html(data);
      $.each(cart, function (idx, cartItem) {
        $(".items").append(
          `<div class="book">
                    <div class="book-img">
                        <img src="${bookList[cartItem].bookImage}" alt="">
                    </div>
                    <div class="book-info">
                        <b>${bookList[cartItem].bookTitle}</b>
                        <p>$${bookList[cartItem].bookPrice}</p>
                        <p>In Stock</p>
                        <br>
                        <p><span>Quantity</span> 1</p>
                        <br>
                        <p><span>Total</span> $x.xx</p>
                    </div>
                    </div>`
        );
      });
      // callback();
    });
  } else if (pageID == "blog") {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
      callback();
    });
  } else if (pageID == "account") {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
      callback();
    });
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log('data ' + data);
      $("#app").html(data);
    });
  }
}

export function setUserInfo(userObject) {
  userInfo = userObject;
  console.log(userInfo);
}

export function getUserInfo() {
  return userInfo;
}

export function logOutUser() {
  userInfo.loggedIn = false;
}

export function addToCart(bookIdx) {
  cart.push(bookIdx);
  console.log(cart);
}
