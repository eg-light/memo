document.addEventListener("DOMContentLoaded", function () {
    const productsData = {
        "bag-1": {
            id: "bag-1",
            title: "شنطة نسائية بلوحة فنية كلاسيكية (1)",
            subtitle: "مجموعة الفخامة والروعة العصرية - تحفة فان جوخ",
            price: 375,
            oldPrice: "550 ج.م",
            images: [
                "../memo2/الصور/bag1.png",
                "../memo2/الصور/bag2.png",
                "../memo2/الصور/bag3.png"
            ],
            details: "تصميم فريد مستوحى من ليلة النجوم للفنان فان جوخ، يجمع بين العملية والجمال الفني لتكون رفيقتك المثالية في كل خروجة وتضفي لمسة ساحرة على إطلالتك."
        },
        "bag-2": {
            id: "bag-2",
            title: "شنطة نسائية بلوحة فنية كلاسيكية (2)",
            subtitle: "مجموعة الفن الانطباعي الكلاسيكي",
            price: 375,
            oldPrice: "550 ج.م",
            images: [
                "../memo2/الصور/bag2.png",
                "../memo2/الصور/bag3.png",
                "../memo2/الصور/bag1.png"
            ],
            details: "هذه الشنطة تتميز بتفاصيل فنية مختلفة تماماً تناسب أصحاب الذوق الرفيع، مطبوعة بألوان انطباعية زاهية وعالية الثبات تضمن لك حضوراً خاطفاً للأنظار."
        },
        "bag-3": {
            id: "bag-3",
            title: "شنطة نسائية بلوحة فنية كلاسيكية (3)",
            subtitle: "إصدار الروائع الفنية الحصرية",
            price: 375,
            oldPrice: "550 ج.م",
            images: [
                "../memo2/الصور/bag3.png",
                "../memo2/الصور/bag4.png",
                "../memo2/الصور/bag2.png"
            ],
            details: "إصدار خاص وفريد يضفي لمسة كلاسيكية ساحرة على مظهرك اليومي، خامات قماشية قوية وعالية الجودة مقاومة للتلف ومصممة لتدوم طويلاً."
        },
        "bag-4": {
            id: "bag-4",
            title: "شنطة نسائية بلوحة فنية كلاسيكية (4)",
            subtitle: "مجموعة الأناقة العصرية والفنون",
            price: 375,
            oldPrice: "550 ج.م",
            images: [
                "../memo2/الصور/bag4.png",
                "../memo2/الصور/bag1.png",
                "../memo2/الصور/bag2.png"
            ],
            details: "تصميم أنيق وواسع يكفي لجميع احتياجاتك اليومية مع لوحة فنية فخمة تعكس حبك للفنون الراقية وتمنحك راحة كاملة أثناء الاستخدام."
        },
        "bag-5": {
            id: "bag-5",
            title: "شنطة جلدية فاخرة بتصميم عصري (5)",
            subtitle: "مجموعة الجلد الفاخر والأناقة المطلقة",
            price: 450,
            oldPrice: "650 ج.م",
            images: [
                "../memo2/الصور/bag1.png",
                "../memo2/الصور/bag2.png",
                "../memo2/الصور/bag4.png"
            ],
            details: "مصنوعة من أجود أنواع الجلود الصناعية الفاخرة التي تمنحك مظهراً راقياً وملمساً ناعماً، مع جيوب داخلية متعددة لتنظيم أغراضك بكل سهولة وأمان."
        },
        "bag-6": {
            id: "bag-6",
            title: "شنطة يد سهارى بتفاصيل ذهبية (6)",
            subtitle: "إصدار السهرات والمناسبات الخاصة",
            price: 420,
            oldPrice: "600 ج.م",
            images: [
                "../memo2/الصور/bag2.png",
                "../memo2/الصور/bag4.png",
                "../memo2/الصور/bag1.png"
            ],
            details: "القطعة المثالية لكل مناسبة خاصة وسهرة مميزة، مزودة بسلسلة ذهبية متينة وإكسسوارات عصرية تزيد من فخامة إطلالتك وتجعل الأنظار تتجه إليك."
        },
        "bag-7": {
            id: "bag-7",
            title: "شنطة كتف عملية للجامعة والعمل (7)",
            subtitle: "مجموعة العملية والراحة اليومية",
            price: 340,
            oldPrice: "500 ج.م",
            images: [
                "../memo2/الصور/bag3.png",
                "../memo2/الصور/bag1.png",
                "../memo2/الصور/bag2.png"
            ],
            details: "شنطة واسعة ومصممة خصيصاً لتتحمل ضغوط يومك الطويل في الجامعة أو العمل، تتسع لكتبك وأدواتك الشخصية بكل راحة وبدون أي تنازل عن الأناقة."
        },
        "bag-8": {
            id: "bag-8",
            title: "شنطة ميني كلاسيكية أنيقة (8)",
            subtitle: "إصدار الميني العصري الخفيف",
            price: 310,
            oldPrice: "480 ج.م",
            images: [
                "../memo2/الصور/bag4.png",
                "../memo2/الصور/bag3.png",
                "../memo2/الصور/bag2.png"
            ],
            details: "تصميم ميني خفيف الوزن وساحر، مثالي للخروج السريع والمشاوير الخفيفة التي لا تتطلب حمل أغراض كثيرة، يمنحك خفة ومظهر شبابي مميز."
        }
    };

    const htmlRoot = document.getElementById("htmlRoot") || document.documentElement;
    const heroHeader = document.getElementById("heroHeader");

    // تثبيت اتجاه الصفحة وبلغتها العربية دائماً
    htmlRoot.setAttribute("lang", "ar");
    htmlRoot.setAttribute("dir", "rtl");

    // تأثير الهيدر عند التمرير
    if (heroHeader) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) {
                heroHeader.classList.add("scrolled");
            } else {
                heroHeader.classList.remove("scrolled");
            }
        });
    }

    const productModal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalSubtitle = document.getElementById("modalSubtitle");
    const modalPrice = document.getElementById("modalPrice");
    const modalOldPrice = document.getElementById("modalOldPrice");
    const modalDesc = document.getElementById("modalDesc");
    const modalAddToCart = document.getElementById("modalAddToCart");
    
    const thumb1 = document.getElementById("thumb1");
    const thumb2 = document.getElementById("thumb2");
    const thumb3 = document.getElementById("thumb3");
    
    let activeModalProductId = null;

    // فتح نافذة التفاصيل وعرض بيانات المنتج
    function openProductModal(productId) {
        const product = productsData[productId];
        if (!product) return;
        activeModalProductId = productId;

        modalTitle.textContent = product.title;
        if (modalSubtitle) modalSubtitle.textContent = product.subtitle;
        modalPrice.textContent = product.price + " ج.م";
        modalOldPrice.textContent = product.oldPrice;
        if (modalDesc) modalDesc.textContent = product.details;
        
        modalImage.src = product.images[0];
        if (thumb1) thumb1.src = product.images[0];
        if (thumb2) thumb2.src = product.images[1] || product.images[0];
        if (thumb3) thumb3.src = product.images[2] || product.images[0];

        if (productModal) {
            productModal.style.display = "flex";
        }
    }

    // إغلاق النافذة عند النقر بالخارج
    window.addEventListener("click", (e) => {
        if (e.target === productModal) {
            productModal.style.display = "none";
        }
    });

    // تبديل الصور المصغرة داخل المودال
    window.changeModalImage = function(src) {
        if (modalImage) {
            modalImage.src = src;
        }
    };

    if (thumb1) thumb1.addEventListener("click", () => changeModalImage(thumb1.src));
    if (thumb2) thumb2.addEventListener("click", () => changeModalImage(thumb2.src));
    if (thumb3) thumb3.addEventListener("click", () => changeModalImage(thumb3.src));

    // تحديث عدد السلة
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElement = document.getElementById("cartCount");
        if (cartCountElement) cartCountElement.textContent = totalCount;
    }

    // تأثير تمرير الماوس على صور المنتجات
    document.addEventListener("mouseover", function (e) {
        if (e.target.classList.contains("product-img") && e.target.dataset.hoverImg) {
            if (!e.target.dataset.originalImg) {
                e.target.dataset.originalImg = e.target.src;
            }
            e.target.src = e.target.dataset.hoverImg;
        }
    });

    document.addEventListener("mouseout", function (e) {
        if (e.target.classList.contains("product-img") && e.target.dataset.originalImg) {
            e.target.src = e.target.dataset.originalImg;
        }
    });

    // التعامل مع النقر (تفاصيل أو إضافة للسلة)
    document.addEventListener("click", function (e) {
        const detailsBtn = e.target.closest(".btn-details");
        if (detailsBtn) {
            e.preventDefault();
            const card = detailsBtn.closest('.product-card');
            const productId = card ? card.getAttribute('data-product-id') : null;
            if (productId) openProductModal(productId);
            return;
        }

        const targetBtn = e.target.closest(".btn-cart") || e.target.closest("#modalAddToCart");
        if (!targetBtn) return;

        e.preventDefault();
        
        let productId = null;
        if (targetBtn.id === "modalAddToCart") {
            productId = activeModalProductId;
        } else {
            const card = targetBtn.closest('.product-card');
            productId = card ? card.getAttribute('data-product-id') : null;
        }

        if (!productId || !productsData[productId]) return;

        const product = productsData[productId];
        let title = product.title;
        let price = product.price;
        let imageSrc = product.images[0];

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: productId, title, price, image: imageSrc, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();

        targetBtn.style.transform = "scale(0.95)";
        setTimeout(() => {
            targetBtn.style.transform = "scale(1)";
        }, 150);
    });

    updateCartCount();
});