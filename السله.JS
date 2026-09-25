document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const subtotalPriceEl = document.getElementById("subtotalPrice");
    const shippingPriceEl = document.getElementById("shippingPrice");
    const totalPriceEl = document.getElementById("totalPrice");
    const cartCountEl = document.getElementById("cartCount");

    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // تحديث عداد السلة في الهيدر
        let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountEl) cartCountEl.textContent = totalCount;

        if (cart.length === 0) {
            if (cartItemsContainer) {
                cartItemsContainer.innerHTML = `
                    <div style="text-align: center; padding: 40px; background: #fff; border-radius: 12px; color: #666;">
                        <p style="font-size: 18px; margin-bottom: 15px;">سلة المشتريات فارغة حالياً</p>
                        <a href="MEMO.HTML" style="background: #366c65; color: #fff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">تصفح المنتجات</a>
                    </div>
                `;
            }
            updateTotals(0);
            return;
        }

        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = "";
            cart.forEach((item, index) => {
                const itemDiv = document.createElement("div");
                itemDiv.style.cssText = "display: flex; align-items: center; justify-content: space-between; background: #fff; padding: 15px; border-radius: 12px; box-shadow: 0 3px 10px rgba(0,0,0,0.03);";
                
                itemDiv.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <img src="${item.image}" alt="${item.title}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px; background: #f1f5f5;">
                        <div>
                            <h4 style="font-size: 15px; color: #333; margin-bottom: 5px;">${item.title}</h4>
                            <span style="color: #366c65; font-weight: 700; font-size: 14px;">${item.price} ج.م</span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 6px; overflow: hidden;">
                            <button onclick="updateQuantity(${index}, -1)" style="background: #f5f5f5; border: none; padding: 5px 10px; cursor: pointer; font-weight: bold;">-</button>
                            <span style="padding: 0 12px; font-weight: 600; font-size: 14px;">${item.quantity}</span>
                            <button onclick="updateQuantity(${index}, 1)" style="background: #f5f5f5; border: none; padding: 5px 10px; cursor: pointer; font-weight: bold;">+</button>
                        </div>
                        <button onclick="removeItem(${index})" style="background: #ff4d4d; color: #fff; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 13px;">حذف</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });
        }

        calculateTotals(cart);
    }

    function calculateTotals(cart) {
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        // شحن مجاني لو الإجمالي أكبر من 3000 أو ثابت مثلاً 50 ج.م (حسب رغبتك، هنا هنخليه مجاني أو حسب المتاح)
        let shipping = subtotal > 3000 || subtotal === 0 ? 0 : 50; 
        let total = subtotal + shipping;

        if (subtotalPriceEl) subtotalPriceEl.textContent = subtotal + " ج.م";
        if (shippingPriceEl) shippingPriceEl.textContent = shipping === 0 ? "مجاني" : shipping + " ج.م";
        if (totalPriceEl) totalPriceEl.textContent = total + " ج.م";
    }

    window.updateQuantity = function(index, change) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    };

    window.removeItem = function(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    };

    loadCart();
});