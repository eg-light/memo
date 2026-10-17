// --- DATABASE OF PRODUCTS ---
let products = [
    // --- الشنط (Bags) ---
    {
        id: 1,
        name: "شنطة كلاسيكية جلد فاخر",
        category: "bags",
        price: 1200,
        oldPrice: 1500,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
        badge: "الأكثر مبيعاً",
        rating: 5,
        isBestSeller: true,
        description: "شنطة يد نسائية مصنوعة من أجود أنواع الجلد الطبيعي بتصميم راقي يناسب العمل والمناسبات."
    },
    {
        id: 2,
        name: "شنطة ظهر عصرية كاجوال",
        category: "bags",
        price: 850,
        oldPrice: 1050,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
        badge: "جديد",
        rating: 4,
        isBestSeller: true,
        description: "شنطة ظهر عملية وأنيقة، مصممة خصيصاً لتتحمل الاستخدام اليومي وتكفي احتياجاتك."
    },
    {
        id: 3,
        name: "شنطة سهرة أنيقة مرصعة",
        category: "bags",
        price: 950,
        oldPrice: 1200,
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80",
        badge: "خصم 20%",
        rating: 5,
        isBestSeller: false,
        description: "تألقي في السهرات والمناسبات الخاصة مع هذه الشنطة المصممة بعناية فائقة لتلفت الأنظار."
    },
    {
        id: 4,
        name: "شنطة كروس صغيرة عملية",
        category: "bags",
        price: 650,
        oldPrice: 800,
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&q=80",
        badge: "",
        rating: 4,
        isBestSeller: true,
        description: "خفيفة وعملية، خيارك الأمثل للخروج السريع والمشاوير اليومية الخفيفة."
    },
    {
        id: 5,
        name: "شنطة كتف جلد مضلع",
        category: "bags",
        price: 1100,
        oldPrice: 1350,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
        badge: "مميز",
        rating: 5,
        isBestSeller: true,
        description: "تصميم عصري مميز يمنحك إطلالة فريدة وثقة عالية في كل خطوة."
    },

    // --- اللوح (Paintings / Artworks) ---
    {
        id: 6,
        name: "لوحة جدارية فنية مودرن",
        category: "art",
        price: 450,
        oldPrice: 600,
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
        badge: "لوحة فنية",
        rating: 5,
        isBestSeller: true,
        description: "لوحة فنية جدارية بتصميم مودرن راقي تضفي لمسة من الفخامة والذوق الرفيع على ديكور منزلك."
    },
    {
        id: 7,
        name: "لوحة تجريدية بالألوان الهادئة",
        category: "art",
        price: 550,
        oldPrice: 700,
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80",
        badge: "حصري",
        rating: 4,
        isBestSeller: false,
        description: "لوحة تجريدية مميزة تجمع بين درجات الألوان الهادئة لتمنح المكان شعوراً بالراحة والهدوء."
    },
    {
        id: 8,
        name: "لوحة طبيعية منظر سحري",
        category: "art",
        price: 500,
        oldPrice: 650,
        image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=600&q=80",
        badge: "جديد",
        rating: 5,
        isBestSeller: true,
        description: "لوحة مستوحاة من سحر الطبيعة الخلابة، مطبوعة بجودة عالية على أحدث الخامات."
    },
    {
        id: 9,
        name: "لوحة كلاسيكية برواز فاخر",
        category: "art",
        price: 700,
        oldPrice: 850,
        image: "https://images.unsplash.com/photo-1582561226292-15a0c102a933?auto=format&fit=crop&w=600&q=80",
        badge: "فاخر",
        rating: 5,
        isBestSeller: false,
        description: "لوحة فنية ذات طابع كلاسيكي أنيق، مزودة برواز متين وفخم يناسب الصالونات وغرف الاستقبال."
    }
];

let categories = [
    { id: "bags", name: "الشنط", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80", count: 5 },
    { id: "art", name: "اللوح", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80", count: 4 }
];

let cart = JSON.parse(localStorage.getItem('bags_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bags_wishlist')) || [];
let currentFilter = 'all';
let currentSearchQuery = '';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderBestSellers();
    renderShopProducts();
    renderCategoryFilterList();
    updateCartBadge();
    updateWishlistBadge();
});

// --- RENDER CATEGORIES ---
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategoryFromHome('${cat.id}')">
            <img src="${cat.image}" alt="${cat.name}">
            <h4>${cat.name}</h4>
            <span>${cat.count} منتج</span>
        </div>
    `).join('');
}

// --- RENDER BEST SELLERS ---
function renderBestSellers() {
    const grid = document.getElementById('bestSellersGrid');
    if (!grid) return;
    const bests = products.filter(p => p.isBestSeller);
    grid.innerHTML = bests.map(p => createProductCard(p)).join('');
}

// --- CREATE PRODUCT CARD HTML ---
function createProductCard(p) {
    const isWishlisted = wishlist.some(item => item.id === p.id);
    return `
        <div class="product-card">
            <div class="product-img-box">
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${p.id})">
                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <img src="${p.image}" alt="${p.name}" onclick="openProductDetails(${p.id})" style="cursor:pointer;">
            </div>
            <div class="product-info">
                <div class="stars">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <h3 onclick="openProductDetails(${p.id})" style="cursor:pointer;">${p.name}</h3>
                <div class="product-prices">
                    <span class="current-price">${p.price} EGP</span>
                    ${p.oldPrice ? `<span class="old-price">${p.oldPrice} EGP</span>` : ''}
                </div>
                <div class="product-card-actions">
                    <button class="btn btn-primary" onclick="addToCart(${p.id})">إضافة للسلة</button>
                    <button class="btn btn-outline details-btn" onclick="openProductDetails(${p.id})">التفاصيل</button>
                </div>
            </div>
        </div>
    `;
}

// --- SHOP PRODUCTS & FILTERING ---
function renderShopProducts() {
    const grid = document.getElementById('shopProductsGrid');
    if (!grid) return;

    let filtered = products;
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }

    if (currentSearchQuery.trim() !== '') {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(currentSearchQuery.toLowerCase()));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px; color:#777;">عذراً، لا توجد منتجات مطابقة لبحثك.</p>`;
        return;
    }

    grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

function renderCategoryFilterList() {
    const list = document.getElementById('categoryFilterList');
    if (!list) return;
    
    let html = `<li><button class="${currentFilter === 'all' ? 'active' : ''}" onclick="filterCategory('all')">كل المنتجات</button></li>`;
    categories.forEach(cat => {
        html += `<li><button class="${currentFilter === cat.id ? 'active' : ''}" onclick="filterCategory('${cat.id}')">${cat.name}</button></li>`;
    });
    list.innerHTML = html;
}

function filterCategory(catId) {
    currentFilter = catId;
    renderCategoryFilterList();
    renderShopProducts();
}

function filterByCategoryFromHome(catId) {
    showSection('shop');
    filterCategory(catId);
}

// --- SORTING ---
function sortProducts(type) {
    if (type === 'low-high') {
        products.sort((a, b) => a.price - b.price);
    } else if (type === 'high-low') {
        products.sort((a, b) => b.price - a.price);
    } else if (type === 'latest') {
        products.sort((a, b) => b.id - a.id);
    } else if (type === 'popular') {
        products.sort((a, b) => b.rating - a.rating);
    }
    renderShopProducts();
    renderBestSellers();
}

// --- SEARCH ---
function toggleSearchModal() {
    const modal = document.getElementById('searchModal');
    if (!modal) return;
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
        document.getElementById('searchInput').focus();
    }
}

function handleSearch(query) {
    currentSearchQuery = query;
    if (query.trim() !== '') {
        showSection('shop');
        renderShopProducts();
    }
}

// --- NAVIGATION & SECTIONS ---
function showSection(sectionID) {
    const views = document.querySelectorAll('.page-view');
    views.forEach(v => v.style.display = 'none');

    const target = document.getElementById(sectionID + 'View');
    if (target) {
        target.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(l => l.classList.remove('active'));
}

function scrollToSection(sectionId) {
    showSection('home');
    setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// --- PRODUCT DETAILS ---
function openProductDetails(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    showSection('productDetails');
    const container = document.getElementById('productDetailsContent');
    container.innerHTML = `
        <div class="product-details-grid">
            <div>
                <img src="${p.image}" alt="${p.name}" class="product-details-img">
            </div>
            <div>
                <span class="details-badge">${p.badge || 'متوفر'}</span>
                <h2 class="details-title">${p.name}</h2>
                <div class="stars" style="margin-bottom: 15px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="product-prices" style="font-size: 20px; margin-bottom: 20px;">
                    <span class="current-price" style="font-size: 24px;">${p.price} EGP</span>
                    ${p.oldPrice ? `<span class="old-price" style="font-size: 18px;">${p.oldPrice} EGP</span>` : ''}
                </div>
                <p class="details-desc">${p.description}</p>
                <div class="details-buttons">
                    <button class="btn btn-primary" onclick="addToCart(${p.id})">إضافة إلى السلة</button>
                    <button class="btn btn-outline back-shop-btn" onclick="showSection('shop')">العودة للتسوق</button>
                </div>
            </div>
        </div>
    `;
}

// --- CART MANAGEMENT ---
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    if (!sidebar || !overlay) return;
    
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
    } else {
        sidebar.classList.add('open');
        overlay.style.display = 'block';
        renderCartItems();
    }
}

function addToCart(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...p, quantity: 1 });
    }

    saveCart();
    updateCartBadge();
    toggleCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartBadge();
    renderCartItems();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartBadge();
            renderCartItems();
        }
    }
}

function saveCart() {
    localStorage.setItem('bags_cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartCount');
    if (badge) badge.innerText = count;
}

function renderCartItems() {
    const container = document.getElementById('cartItemsContainer');
    const totalElement = document.getElementById('cartTotalPrice');
    if (!container || !totalElement) return;

    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#777; margin-top:40px;">سلة المشتريات فارغة.</p>`;
        totalElement.innerText = '0 EGP';
        return;
    }

    let total = 0;
    container.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item-card">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <span>${item.price} EGP</span>
                    <div class="cart-item-actions">
                        <button onclick="changeQty(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQty(${item.id}, 1)">+</button>
                        <button onclick="removeFromCart(${item.id})" class="trash-btn"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    totalElement.innerText = total + ' EGP';
}

// --- WISHLIST MANAGEMENT ---
function toggleWishlist(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    const index = wishlist.findIndex(item => item.id === id);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(p);
    }

    localStorage.setItem('bags_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    renderShopProducts();
    renderBestSellers();
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlistCount');
    if (badge) badge.innerText = wishlist.length;
}

function openWishlist() {
    const sidebar = document.getElementById('wishlistSidebar');
    const overlay = document.getElementById('wishlistOverlay');
    if (!sidebar || !overlay) return;

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
    } else {
        sidebar.classList.add('open');
        overlay.style.display = 'block';
        renderWishlistItems();
    }
}

function renderWishlistItems() {
    const container = document.getElementById('wishlistItemsContainer');
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#777; margin-top:40px;">لا توجد منتجات في المفضلة.</p>`;
        return;
    }

    container.innerHTML = wishlist.map(item => `
        <div class="cart-item-card">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <span>${item.price} EGP</span>
                <div class="wishlist-item-actions">
                    <button class="btn btn-primary" onclick="addToCart(${item.id}); toggleWishlist(${item.id}); openWishlist();">نقل للسلة</button>
                    <button onclick="toggleWishlist(${item.id}); openWishlist();" class="wishlist-delete-btn"><i class="fa-solid fa-trash"></i> حذف</button>
                </div>
            </div>
        </div>
    `).join('');
}

// --- CHECKOUT & ORDER ---
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('سلة المشتريات فارغة!');
        return;
    }
    toggleCart();
    showSection('checkout');
    renderCheckoutSummary();
}

function renderCheckoutSummary() {
    const list = document.getElementById('checkoutItemsList');
    const subTotalElem = document.getElementById('subTotalAmount');
    const finalTotalElem = document.getElementById('finalTotalAmount');
    if (!list) return;

    let subTotal = 0;
    list.innerHTML = cart.map(item => {
        subTotal += item.price * item.quantity;
        return `<div class="summary-row"><span>${item.name} (x${item.quantity})</span><span>${item.price * item.quantity} EGP</span></div>`;
    }).join('');

    subTotalElem.innerText = subTotal + ' EGP';
    finalTotalElem.innerText = (subTotal + 50) + ' EGP';
}

function submitOrder(e) {
    e.preventDefault();
    const orderID = '#BS-' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('orderNumberID').innerText = orderID;

    cart = [];
    saveCart();
    updateCartBadge();

    showSection('success');
}

// --- MOBILE MENU TOGGLE ---
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (!navLinks) return;
    
    // تبديل الكلاس الخاص بإظهار وإخفاء القائمة في الموبايل
    navLinks.classList.toggle('mobile-open');
    document.body.classList.toggle('menu-open');
}