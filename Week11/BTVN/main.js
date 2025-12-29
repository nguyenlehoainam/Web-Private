const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    category: "Điện thoại",
    price: 34990000,
    img: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "Điện thoại",
    price: 31990000,
    img: "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumbnew-600x600.jpg",
  },
  {
    id: 3,
    name: "MacBook Air M2 13 inch",
    category: "Laptop",
    price: 26990000,
    img: "https://apple.ngocnguyen.vn/cdn/images/202311/goods_img/macbook-air-13-inch-2022-m2-chinh-hang-G15523-1699870885486.jpg",
  },
  {
    id: 4,
    name: "iPad Air 5 M1 WiFi 64GB",
    category: "Tablet",
    price: 14990000,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5GZtiYrwH1MUxNMj4yUvxI9-3Ms8EfW9UPg9oSQBObI7zDwpB_MtgTixqadDEPLKMJQgyNMuLxjE7xZirEFUo5F3ftQic9Q2BxuBXZq2uzEJDDZj6dpB0WSGYSRFM3XIQIylXxw&usqp=CAc",
  },
  {
    id: 5,
    name: "Tai nghe AirPods Pro 2",
    category: "Phụ kiện",
    price: 5990000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHHilYftBfqkY5URHgsp3rmIaopGhypO0PQ&s",
  },
  {
    id: 6,
    name: "Loa Bluetooth JBL Flip 6",
    category: "Âm thanh",
    price: 2990000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMba8cyiQ5zQPaiSf4fS7lobIBLsb7cLRPcA&s",
  },
  {
    id: 7,
    name: "Ghê Gaming xpanse",
    category: "Ghế",
    price: 3990000,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmShhkGbmvfeKhPionXZ8l48X1yEoZUApZJKuIxtH6N_24Et9Wq6X5VF4M2Y3nZBEq_IpdllunrkxJ479nPRTBvqg4rkYTVqhMoUWGYIJwUujbRRpBLqiMhLcZ6xrj-kajioIQ7w&usqp=CAc",
  },
  {
    id: 8,
    name: "Màn Hình led Samsung 24inch",
    category: "Màn Hình",
    price: 3990000,
    img: "https://images.samsung.com/is/image/samsung/p6pim/vn/ls24f350fhexxv/gallery/vn-led-sf350-ls24f350fhexxv-538629749?$Q90_1248_936_F_PNG$",
  },
  {
    id: 9,
    name: "Bàn phím cơ Aula f80",
    category: "Bàn Phím",
    price: 2990000,
    img: "https://phucanhcdn.com/media/product/55673_ban_phim_co_aula_3_mode_aula_f87_pro_black_gradient_5.jpg",
  },
];
let cart = [];
const formatMoney = (amount) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};
const renderProducts = () => {
  const container = document.getElementById("product-list");
  container.innerHTML = products
    .map(
      (p) => `
                <div class="product-card">
                    <div class="p-img-box">
                        <img src="${p.img}" alt="${p.name}" class="p-img">
                    </div>
                    <div class="p-details">
                        <div class="p-cat">${p.category}</div>
                        <h3 class="p-name">${p.name}</h3>
                        <div class="p-price">${formatMoney(p.price)}</div>
                        <button class="btn-add" onclick="addToCart(${p.id})">
                            <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                        </button>
                    </div>
                </div>
            `
    )
    .join("");
};
const renderCart = () => {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const badgeEl = document.getElementById("header-qty");

  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  badgeEl.innerText = totalQty;

  if (cart.length === 0) {
    container.innerHTML = `
                    <div class="empty-cart-img">
                        <i class="fa-solid fa-basket-shopping" style="font-size: 40px; margin-bottom: 10px;"></i>
                        <p>Chưa có sản phẩm nào</p>
                    </div>`;
    totalEl.innerText = formatMoney(0);
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
                <div class="cart-item-row">
                    <img src="${item.img}" class="c-img">
                    <div class="c-info">
                        <div class="c-name">${item.name}</div>
                        <div class="c-price">${formatMoney(item.price)}</div>
                        <div class="c-actions">
                            <div class="qty-box">
                                <button class="qty-btn" onclick="updateQty(${
                                  item.id
                                }, -1)">-</button>
                                <input type="text" class="qty-val" value="${
                                  item.quantity
                                }" readonly>
                                <button class="qty-btn" onclick="updateQty(${
                                  item.id
                                }, 1)">+</button>
                            </div>
                            <div class="del-btn" onclick="removeItem(${
                              item.id
                            })">Xóa</div>
                        </div>
                    </div>
                </div>
            `
    )
    .join("");

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalEl.innerText = formatMoney(total);
};

const addToCart = (id) => {
  const product = products.find((p) => p.id === id);

  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();

  if (window.innerWidth < 992) {
  }
};

const updateQty = (id, change) => {
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) item.quantity = 1;
    renderCart();
  }
};

const removeItem = (id) => {
  if (confirm("Xóa sản phẩm này?")) {
    cart = cart.filter((i) => i.id !== id);
    renderCart();
  }
};

const checkout = () => {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống!");
  } else {
    alert(
      `Thanh toán thành công ${
        document.getElementById("cart-total").innerText
      }!`
    );
    cart = [];
    renderCart();
  }
};

const scrollToCart = () => {
  document.getElementById("cart-area").scrollIntoView({ behavior: "smooth" });
};

renderProducts();
renderCart();
