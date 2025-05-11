const drinks = [
  {
    name: "Кола",
    price: 100,
    shortDesc: "Газированный напиток",
    longDesc: "Освежающая сладкая газировка со вкусом колы.",
    image: "https://via.placeholder.com/250x150?text=Кола"
  },
  {
    name: "Сок апельсиновый",
    price: 130,
    shortDesc: "Натуральный сок",
    longDesc: "Свежевыжатый апельсиновый сок без сахара и консервантов.",
    image: "https://via.placeholder.com/250x150?text=Сок"
  },
  {
    name: "Сок ананасовый",
    price: 140,
    shortDesc: "Натуральный сок",
    longDesc: "Свежевыжатый ананасовый сок без сахара и консервантов.",
    image: "https://via.placeholder.com/250x150?text=Сок"
  },
   {
    name: "Спрайт",
    price: 100,
    shortDesc: "Газированный напиток",
    longDesc: "Освежающая сладкая газировка со вкусом спрайта.",
    image: "https://via.placeholder.com/250x150?text=Кола"
  },
  {
    name: "Энергетик",
    price: 150,
    shortDesc: "Тонизирующий напиток",
    longDesc: "Содержит кофеин, таурин и витамины группы B.",
    image: "https://via.placeholder.com/250x150?text=Энергетик"
  }
];

const food = [
  {
    name: "Пицца",
    price: 400,
    shortDesc: "Сырная пицца",
    longDesc: "Пицца с моцареллой, пармезаном и томатным соусом на тонком тесте.",
    image: "https://via.placeholder.com/250x150?text=Пицца"
  },
   {
    name: "Роллы",
    price: 700,
    shortDesc: "Вкусные роллы",
    longDesc: "Роллы со свежей рыбой и сырной шапочкой",
    image: "https://via.placeholder.com/250x150?text=Пицца"
  },
   {
    name: "Карбонара",
    price: 800,
    shortDesc: "Спагети с ветчиной",
    longDesc: "Макароны из высокого сорта пшеницы со сливками и ветчиной",
    image: "https://via.placeholder.com/250x150?text=Пицца"
  },
  {
    name: "Бургер",
    price: 250,
    shortDesc: "Говяжий бургер",
    longDesc: "Классический бургер с говядиной, салатом, помидорами и сыром.",
    image: "https://via.placeholder.com/250x150?text=Бургер"
  },
  {
    name: "Картошка фри",
    price: 150,
    shortDesc: "Хрустящий гарнир",
    longDesc: "Золотистая картошка фри, жареная до хруста, с солью.",
    image: "https://via.placeholder.com/250x150?text=Фри"
  }
];

let cart = [];

function showCategory(category) {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";

  const items = category === "drinks" ? drinks : food;

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p><strong>${item.shortDesc}</strong></p>
      <p>${item.longDesc}</p>
      <p>Цена: ${item.price} ₽</p>
      <button onclick='addToCart("${item.name}", ${item.price})'>Добавить</button>
    `;
    catalog.appendChild(div);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} — ${item.price} ₽ <button onclick="removeFromCart(${index})">Удалить</button>`;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").textContent = total;
}

// По умолчанию показываем напитки
showCategory("drinks");
