// let giohang = document.querySelectorAll('.btnmua'); //truy van all btn
// // giohang[0]
// let product = [
//     {
//         name: 'Nike Air Max Plus',
//         tag: 'NikeAirMaxPlus',
//         gia: 6.990.000₫,
//         inCart: 0
//     },
//     {
//         name: 'Nike Air Max 90 SE',
//         tag: 'NikeAirMax90SE',
//         gia: 3.990.000₫,
//         inCart: 0
//     },
//     {
//         name: 'Nike Waffle One Crater',
//         tag: 'NikeWaffleOneCrater',
//         gia: 990.000₫,
//         inCart: 0
//     },
//     {
//         name: 'Nike Waffle One',
//         tag: 'NikeWaffleOne',
//         gia: 2.590.000₫,
//         inCart: 0
//     },
//     {
//         name: 'Nike Air Force 1 '07',
//         tag: 'NikeAirForce1'07',
//         gia: 3.990.000₫,
//         inCart: 0
//     },
//     {
//         name: 'Nike Air Force 1 '07 Essential',
//         tag: 'NikeAirForce1'07Essential',
//         gia: 1.990.000₫,
//         inCart: 0
//     },
//     {
//         name: 'Nike Blazer Low Platform Next Nature',
//         tag: 'NikeBlazerLowPlatformNextNature',
//         gia: 690.000₫,
//         inCart: 0
//     },
//     {
//         name: 'Nike Air Max PlusG',
//         tag: 'NikeAirMaxPlusG',
//         gia: 2.990.000₫,
//         inCart: 0
//     },
//     {
//         name: 'Nike Ari',
//         tag: 'NikeAri',
//         gia: 3.990.000₫,
//         inCart: 0
//     },
//     {
//         name: 'Nike Four',
//         tag: 'NikeFour',
//         gia: 1.990.000₫,
//         inCart: 0
//     },
//     {
//         name: 'Nike fot',
//         tag: 'Nikefot',
//         gia: 6.990.000₫,
//         inCart: 0
//     },
//     {
//         name: '',
//         tag: '',
//         gia: ,
//         inCart: 0
//     },
// ]

// for(let i =0; i< giohang.length; i++){
//     // console.log("vong lap");
//     giohang[i].addEventListener('click', () =>{
//         // console.log("them vao gio hang");
//         cartNumber(product[i]);
//         totalCost(product[i])
        
//     });
        
// }

// function loadCartNumber(){
//     let productNumber = localStorage.getItem('cartNumber');

//     if(productNumber){
//         document.querySelector('.cart span').textContent = productNumber;

//     }
// }

// // xu ly so luong sp trong gio
// function cartNumber(product) {
//     // console.log("nhap vao san pham", product)
//     let productNumber = localStorage.getItem('cartNumber');
//     // console.log(productNumber);
//     // console.log(typeof productNumber);

//     productNumber = parseInt(productNumber);
//     // console.log(typeof productNumber);
//     //   console.log(productNumber);
//     if(productNumber){
//         localStorage.setItem('cartNumber', productNumber + 1);
//         document.querySelector('.cart span').textContent = productNumber + 1;

//     }else{
//         localStorage.setItem('cartNumber',  1);
//         document.querySelector('.cart span').textContent =  1;

//     }
//     setItems(product);

// }
// function setItems(product){
//     // console.log("lich su");
//     // console .log("san pham cua toi la", product);
//     let cartItem = localStorage.getItem('productsIncart');
//     cartItem = JSON.parse(cartItem);
//     // console.log("san pham trong gio cua toi ", cartItem);

//     if(cartItem != null){
//         // console.log(cartItem[product.tag])
//         if(cartItem[product.tag] == undefined){
//             cartItem = {
//                 ...cartItem,
//                 [product.tag]: product
//             }
//         }
//         // cartItem['Nike Air Max Plu']
//         cartItem[product.tag].inCart +=1;
//     }else{
//         product.inCart =1;
//         cartItem ={
//             [product.tag]: product
//         }
//     }
//     // product.inCart = 1;

//     //  cartItem = {
//     //     [product.tag]: product
//     // }   
   
//     localStorage.setItem("productsIncart", JSON.stringify(cartItem)); // chuyen thanh json de hien doi tuong. ko thif no ser ra object
// }

// // tinh tong tien
// function totalCost(product){
//     // console.log("gia cua san pham la ",product.gia);
//     let dongia = localStorage.getItem('totalCost');
    
  
//     console.log("don gia la ", dongia);
//     console.log(typeof dongia   );
    
//     //tinh don gia
//     if(dongia != null){ 
//         dongia = parseInt(dongia);
//         localStorage.setItem("totalCost", dongia + product.gia +"0.000");
//     }else{
//         localStorage.setItem("totalCost", product.gia+"0.000");

//     }
// }
// // function displayCart(){
// //     let cartItem = localStorage.getItem("productsInCart");
// //     cartItem = JSON.parse(cartItem);

// //     console.log(cartItem);
// //     // let productContain = document.querySelector
// //     // (".main-product");
    
// //     // console.log(cart1);
// //     // if(cart1 && productContain ){ 
// //     //     productContain.innerHTML = '';
// //     //     Object.values(cart1).map(item => {`
// //     //         productContain.innerHTML +=  
// //     //         <div class = "product">
// //     //         <ion-icon name="close-circle-outline"> </ion-icon>
// //     //         <img src="./images/${item.tag}.jpg"> 
// //     //         <span>${item.name}M</span>
// //     //         </div>
// //     //         `
// //     //     });
// //     // }    

// // }
// loadCartNumber();
// // displayCart();

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart_btn");
var close = document.getElementsByClassName("close")[0];
// tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
// Nếu mình có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ------------------------- xóa cart ------------------------- bị sai
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
}

//  -------------------------  update cart  ------------------------- 
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i]
    var price_item = cart_row.getElementsByClassName("cart-price ")[0]
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value // lấy giá trị trong thẻ input
    total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + '0.000 VNĐ'
  // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}

// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}

// Thêm vào giỏ
var add_cart = document.getElementsByClassName("sp");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("hinh")[0].src
    var title = product.getElementsByClassName("name")[0].innerText
    var price = product.getElementsByClassName("gia")[0].innerText
    addItemToCart(title, price, img)
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    modal.style.display = "block";
    
    updatecart()
  })
}

function addItemToCart(title, price, img) {
  var cartRow = document.createElement('section')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('name')
  // Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông cho user.
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="hinh" src="${img}" width="50" height="70">
      <span class="name">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}