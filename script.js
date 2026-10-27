const products = [
  { 
    id: 1, 
    name: "Рожева Окси-Маска", 
    category: "beauty", 
    price: 45, 
    avatar: "🌸", 
    image: "images/oxy-mask.jpg", 
    desc: "Глибоко зволожує шкіру в умовах сухого повітря космічного купола.", 
    recommended: true 
  },
  { 
    id: 2, 
    name: "Захисний Б'юті-Скафандр", 
    category: "fashion", 
    price: 950, 
    avatar: "✨", 
    image: "images/spacesuit.jpg", 
    desc: "Легкий та стильний костюм із неоновими вставками та захистом від UV-радіації.", 
    recommended: true 
  },
  { 
    id: 3, 
    name: "Марсіанський Квітковий Чай", 
    category: "home", 
    price: 25, 
    avatar: "☕", 
    image: "images/teamars.jpg", 
    desc: "Заспокійливий збір із пелюсток, вирощених у гідропонній лабораторії №4.", 
    recommended: true 
  },
  { 
    id: 4, 
    name: "Сяючий Бальзам «Phobos»", 
    category: "beauty", 
    price: 30, 
    avatar: "💄", 
    image: "images/balzam.jpg", 
    desc: "Захищає від марсіанських вітрів і дарує ніжне рожеве світіння.", 
    recommended: false 
  },
  { 
    id: 5, 
    name: "Неоновий Міні-Зволожувач", 
    category: "home", 
    price: 120, 
    avatar: "🎀", 
    image: "images/neon.jpg", 
    desc: "Створює тропічний мікроклімат у вашій кімнаті під куполом.", 
    recommended: true 
  },
  { 
    id: 6, 
    name: "Окуляри «Ares Glam»", 
    category: "fashion", 
    price: 210, 
    avatar: "🕶️", 
    image: "images/glasses.jpg", 
    desc: "Дзеркальне рожеве покриття із захистом від марсіанських піщаних бурь.", 
    recommended: false 
  },
  { 
    id: 7, 
    name: "Аромат «Космічна Піонія»", 
    category: "beauty", 
    price: 85, 
    avatar: "🧪", 
    image: "images/parfum.jpg", 
    desc: "Ніжний парфум із синтезованими нотами ранкової роси та півонії.", 
    recommended: false 
  },
  { 
    id: 8, 
    name: "Плед із Космічного Шовку", 
    category: "home", 
    price: 150, 
    avatar: "🌙", 
    image: "images/pled.jpg", 
    desc: "Неймовірно м'який та теплий плед для затишних вечорів з видом на Марс.", 
    recommended: false 
  },
  { 
    id: 9, 
    name: "Гідрофільна Олія «Deimos»", 
    category: "beauty", 
    price: 50, 
    avatar: "✨", 
    image: "images/oliya.jpg", 
    desc: "Делікатно очищає пори від мікропилу червоної планети.", 
    recommended: false 
  },
  { 
    id: 10, 
    name: "Стильний Термокомбінезон", 
    category: "fashion", 
    price: 420, 
    avatar: "👗", 
    image: "images/kombinezon.jpg", 
    desc: "Тримає комфортну температуру тіла навіть за куполом.", 
    recommended: false 
  },
  { 
    id: 11, 
    name: "Аромадіфузор «Зоряна Ніч»", 
    category: "home", 
    price: 65, 
    avatar: "🕯️", 
    image: "images/night.jpg", 
    desc: "Наповнює кімнату заспокійливими ароматами лаванди та хвої.", 
    recommended: false 
  },
  { 
    id: 12, 
    name: "Нічна Відновлювальна Сироватка", 
    category: "beauty", 
    price: 95, 
    avatar: "🌙", 
    image: "images/krem.jpg", 
    desc: "Регенерує клітини шкіри під час нічного сну.", 
    recommended: false 
  },
  { 
    id: 13, 
    name: "Неоновий Обідок-Німб", 
    category: "fashion", 
    price: 75, 
    avatar: "👑", 
    image: "images/neon-nimb.jpg", 
    desc: "Сяючий аксессуар для вечірок у Б'юті-Хабі.", 
    recommended: false 
  },
  { 
    id: 14, 
    name: "Смарт-Світильник «Малий Марс»", 
    category: "home", 
    price: 110, 
    avatar: "🔮", 
    image: "images/smart.jpg", 
    desc: "Відтворює м'яке світання сонця для гарного настрою.", 
    recommended: false 
  },
  { 
    id: 15, 
    name: "Захисний Крем SPF 100+", 
    category: "beauty", 
    price: 40, 
    avatar: "☀️", 
    image: "images/kremspf100.jpg", 
    desc: "Максимальний захист від космічної радіації.", 
    recommended: false 
  }
];

let cart = [];

function getProductImageHTML(p) {
  if (p.image && p.image.trim() !== "") {
    return `<img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.onerror=null; this.parentNode.innerHTML='<span class=\\'product-avatar\\'>${p.avatar}</span>';">`;
  }
  return `<span class="product-avatar">${p.avatar}</span>`;
}

function createProductCard(p) {
  return `
    <div class="product-card">
      <div>
        <div class="product-image-box">
          ${getProductImageHTML(p)}
        </div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>
      <div class="product-footer">
        <span class="price">${p.price} $MC$</span>
        <div class="product-actions">
          <button class="btn-details" onclick="openProductModal(${p.id})">Опис</button>
          <button class="btn-add" onclick="addToCart(${p.id})">Замовити</button>
        </div>
      </div>
    </div>
  `;
}


function renderRecommended() {
  const grid = document.getElementById("recommendedGrid");
  if (!grid) return;
  const recs = products.filter(p => p.recommended);
  grid.innerHTML = recs.map(p => createProductCard(p)).join('');
}

function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    renderProducts(e.target.dataset.cat);
  });
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartUI();
  showToast(`«${product.name}» додано в кошик!`);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

function openCart() {
  updateCartUI();
  document.getElementById("cartModal").style.display = "flex";
  document.getElementById("toast").classList.remove("show");
}

function updateCartUI() {
  document.getElementById("cartCount").textContent = cart.length;
  const itemsContainer = document.getElementById("cartItems");
  const checkoutForm = document.getElementById("checkoutForm");
  itemsContainer.innerHTML = "";

  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.avatar} ${item.name}</span>
      <span><b>${item.price} $MC$</b> <button onclick="removeFromCart(${idx})" style="background:none; border:none; color:#ff75a0; cursor:pointer; margin-left:8px; font-weight:bold;">✕</button></span>
    `;
    itemsContainer.appendChild(div);
  });

  document.getElementById("cartTotalPrice").textContent = total;

  if (cart.length === 0) {
    itemsContainer.innerHTML = "<p style='color: var(--text-muted); text-align:center;'>Твій кошик поки що порожній ✨</p>";
    if (checkoutForm) checkoutForm.style.display = "none";
  } else {
    if (checkoutForm) checkoutForm.style.display = "flex";
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function openProductModal(id) {
  const p = products.find(prod => prod.id === id);
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <div style="width:100%; height:200px; border-radius:12px; overflow:hidden; margin-bottom:15px; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.03);">
      ${getProductImageHTML(p)}
    </div>
    <h3 style="color:var(--accent); margin-bottom:10px; text-align:center;">${p.name}</h3>
    <p style="color:var(--text-muted); margin-bottom:20px; text-align:center;">${p.desc}</p>
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span class="price" style="font-size:1.3rem;">${p.price} $MC$</span>
      <button class="btn-primary" onclick="addToCart(${p.id}); closeModal(); openCart();">Замовити зараз 🛍️</button>
    </div>
  `;
  document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

document.querySelector(".close-modal").onclick = closeModal;
document.querySelector(".close-cart-modal").onclick = () => {
  document.getElementById("cartModal").style.display = "none";
};

document.getElementById("cartBtn").onclick = openCart;

window.onclick = (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};

document.getElementById("checkoutForm").onsubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("custName").value;
  const sector = document.getElementById("custSector").value;

  showToast(`Дякуємо, ${name}! Замовлення для Сектора ${sector} прийнято! ✨`);
  cart = [];
  updateCartUI();
  document.getElementById("cartModal").style.display = "none";
  e.target.reset();
};

document.getElementById("contactForm").onsubmit = (e) => {
  e.preventDefault();
  showToast("Дякуємо за повідомлення! Люсі відповість вам найближчим часом 💌");
  e.target.reset();
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

let audioCtx, oscillator;
let isPlaying = false;

document.getElementById("audioBtn").onclick = () => {
  if (!isPlaying) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    isPlaying = true;
    document.getElementById("audioBtn").textContent = "🔇 Стоп";
  } else {
    oscillator.stop();
    isPlaying = false;
    document.getElementById("audioBtn").textContent = "🎵 Звук";
  }
};

renderRecommended();
renderProducts();