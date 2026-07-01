document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(168, 21, 37, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = '#A81525';
            header.style.boxShadow = 'none';
        }
    });

    // 2. Newsletter Form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert(`Thank you for subscribing with: ${emailInput.value}!`);
                emailInput.value = '';
            }
        });
    }

    // 3. Generate 150+ Premium Products Data (Emphasis on Sarees and Traditional Wear)
    const products = [];

    // Unique Unsplash Image IDs for different apparel categories to avoid duplicates
    const sareeImages = [
        "1610030469983-98e550d6193c", "1617627143750-d86bc21e42bb", "1583391733956-3750e0ff4e8b",
        "1608933226922-a7d0e46049ad", "1610030470298-243e86c06a92", "1621184455862-c163dfb30e0f",
        "1609357605129-26f69add5d6e", "1611601679655-7c8bc197f0c6", "1611601322175-ef8ec8c85f01",
        "1583391265517-35bbdba01229", "1610030469983-98e550d6193c", "1621184455862-c163dfb30e0f",
        "1617627143750-d86bc21e42bb", "1608933226922-a7d0e46049ad", "1609357605129-26f69add5d6e"
    ];

    const lehengaAndSalwarImages = [
        "1583391733956-3750e0ff4e8b", "1610030469983-98e550d6193c", "1617627143750-d86bc21e42bb",
        "1608933226922-a7d0e46049ad", "1610030470298-243e86c06a92"
    ];

    const womenWesternImages = [
        "1494790108377-be9c29b29330", "1529139574466-a303027c1d8b", "1539571696357-5a69c17a67c6",
        "1515886657613-9f3515b0c78f", "1483985988355-763728e1935b", "1490481651871-ab68de25d43d",
        "1509631179647-0177331693ae", "1525507119028-ed4c629a60a3", "1532453288672-3a27e9be9efd",
        "1558769132-cb1aea458c5e"
    ];

    const menTraditionalImages = [
        "1507679799987-c73779587ccf", "1617137968427-85924c800a22", "1602810318383-e386cc2a3ccf",
        "1603252109303-2751441dd157", "1618886614638-80e3c103d31a", "1617137984095-74e4e5e3613f",
        "1504593811423-6dd665756598", "1519085360753-af0119f7cbe7", "1560250097-0b93528c311a"
    ];

    const menWesternImages = [
        "1598033129183-c4f50c736f10", "1505673542670-a14e010f466b", "1519085360753-af0119f7cbe7",
        "1492562080023-ab3db95bfbce", "1500648767791-00dcc994a43e", "1617137968427-85924c800a22",
        "1534030347012-cc684f29659b", "1552374196-1ab2a1c593e8", "1568602471122-7832951cc4c5"
    ];

    const kidsImages = [
        "1485546246426-74dc88dec4d9", "1503919545889-aef636e10ad4", "1519457431-44ccd64a579b",
        "1514090458221-65bb69cf63e6", "1560138283-5140f25245c5", "1502086223501-7ea6ecd79368",
        "1471286174419-f9c464efc8cc", "1513379733131-47fc74b45fc4", "1508807526345-15e98834a411",
        "1520156557489-0ab27b3b9b04"
    ];

    // Helper to generate a random ID
    const generateId = () => Math.random().toString(36).substr(2, 9);

    // Dynamic Saree Titles
    const sareeTitles = [
        "Banarasi Katan Silk Saree", "Kanjeevaram Pure Zari Saree", "Chanderi Handloom Saree",
        "Georgette Embroidered Saree", "Mysore Crepe Silk Saree", "Tussar Hand-woven Saree",
        "Bandhani Gota Patti Saree", "Sambalpuri Ikkat Saree", "Kalamkari Cotton Saree",
        "Patola Silk Wedding Saree", "Paithani Hand-woven Saree", "Chiffon Sequence Saree",
        "Organza Floral Print Saree", "Linen Border Saree", "Bhagalpuri Silk Saree",
        "Baluchari Premium Saree", "Chanderi Cotton Silk Saree", "Net Sequence Party Saree",
        "Muga Silk Assam Saree", "Dharmavaram Wedding Saree"
    ];

    const lehengaAndSalwarTitles = [
        "Designer Bridal Lehenga", "Georgette Anarkali Suit", "Silk Kurta Salwar Set",
        "Mirror Work Lehenga Choli", "Velvet Embroidered Lehenga", "Chanderi Salwar Kameez",
        "Floral Organza Lehenga", "Lucknowi Chikankari Kurti Set", "Jacquard Silk Anarkali",
        "Gota Patti Salwar Suit"
    ];

    const womenWesternTitles = [
        "Summer Floral Maxi Dress", "Chic Satin Slip Dress", "Women Blazer & Crop Top",
        "Short Party Dress", "Elegant Velvet Evening Gown", "Denim Jacket & Skirt Set",
        "Linen Summer Jumpsuit", "Classic Trench Coat", "Ribbed Knit Bodycon Dress",
        "High-waisted Tailored Trousers", "Polka Dot Midi Dress", "Premium Silk Blouse"
    ];

    // Generate Women's items (60 total)
    // Traditional: Sarees (30 items)
    for (let i = 1; i <= 30; i++) {
        const title = sareeTitles[i % sareeTitles.length] + ` (Vol. ${Math.ceil(i/sareeTitles.length)})`;
        const imgId = sareeImages[i % sareeImages.length];
        products.push({
            id: 'W-S-' + i,
            title: title,
            price: `$${(120 + (i * 15)).toFixed(2)}`,
            image: `https://images.unsplash.com/photo-${imgId}?w=500&q=80`,
            category: "women",
            itemType: "dresses",
            badges: i % 7 === 0 ? ["Hot"] : (i % 9 === 0 ? ["New"] : [])
        });
    }
    // Traditional: Lehengas & Salwars (15 items)
    for (let i = 1; i <= 15; i++) {
        const title = lehengaAndSalwarTitles[i % lehengaAndSalwarTitles.length] + ` (Ed. ${i})`;
        const imgId = lehengaAndSalwarImages[i % lehengaAndSalwarImages.length];
        products.push({
            id: 'W-T-' + i,
            title: title,
            price: `$${(180 + (i * 20)).toFixed(2)}`,
            image: `https://images.unsplash.com/photo-${imgId}?w=500&q=80`,
            category: "women",
            itemType: "dresses",
            badges: i % 5 === 0 ? ["Hot"] : []
        });
    }
    // Western (15 items)
    for (let i = 1; i <= 15; i++) {
        const title = womenWesternTitles[i % womenWesternTitles.length] + ` (Style ${i})`;
        const imgId = womenWesternImages[i % womenWesternImages.length];
        products.push({
            id: 'W-W-' + i,
            title: title,
            price: `$${(45 + (i * 8)).toFixed(2)}`,
            image: `https://images.unsplash.com/photo-${imgId}?w=500&q=80`,
            category: "women",
            itemType: i % 4 === 0 ? "jackets" : "dresses",
            badges: i === 4 ? ["Hot", "New"] : [],
            isFeatured: i === 4
        });
    }

    // Men Traditional Titles
    const menTraditionalTitles = [
        "Royal Banarasi Sherwani", "Pure Linen Kurta Pyjama", "Embroidered Nehru Jacket",
        "Lucknowi Chikankari Kurta", "Raw Silk Wedding Sherwani", "Cotton Dhoti Kurta Set",
        "Designer Bandhgala Suit", "Jacquard Kurta & Churidar", "Premium Jodhpuri Suit",
        "Tussar Silk Kurta"
    ];

    const menWesternTitles = [
        "Casual Checkered Flannel", "Men's Smart Casual Blazer", "Men's Casual Denim Shirt",
        "Classic Slim Jeans", "Premium Leather Jacket", "Oxford Cotton Formal Shirt",
        "Tailored Slim-fit Suit", "Urban Bomber Jacket", "Knitted Winter Sweater",
        "Linen Drawstring Trousers"
    ];

    // Generate Men's items (50 total)
    // Traditional (20 items)
    for (let i = 1; i <= 20; i++) {
        const title = menTraditionalTitles[i % menTraditionalTitles.length] + ` (Premium ${i})`;
        const imgId = menTraditionalImages[i % menTraditionalImages.length];
        products.push({
            id: 'M-T-' + i,
            title: title,
            price: `$${(80 + (i * 12)).toFixed(2)}`,
            image: `https://images.unsplash.com/photo-${imgId}?w=500&q=80`,
            category: "men",
            itemType: i % 3 === 0 ? "jackets" : "tshirts",
            badges: i % 6 === 0 ? ["Hot"] : []
        });
    }
    // Western (30 items)
    for (let i = 1; i <= 30; i++) {
        const title = menWesternTitles[i % menWesternTitles.length] + ` (Vol. ${i})`;
        const imgId = menWesternImages[i % menWesternImages.length];
        products.push({
            id: 'M-W-' + i,
            title: title,
            price: `$${(35 + (i * 6)).toFixed(2)}`,
            image: `https://images.unsplash.com/photo-${imgId}?w=500&q=80`,
            category: "men",
            itemType: i % 5 === 0 ? "denim" : (i % 6 === 0 ? "jackets" : "tshirts"),
            badges: i === 1 ? ["New"] : []
        });
    }

    // Kids Titles
    const kidsTraditionalTitles = [
        "Kids Silk Kurta Pyjama", "Little Girl's Lehenga Choli", "Boys Sherwani Blazer Set",
        "Kids Dhoti Kurta Set", "Kids Nehru Jacket Set", "Girls Embroidered Anarkali"
    ];

    const kidsWesternTitles = [
        "Children Denim Dungaree", "Kids Cute Printed Tee", "Kids Winter Hoodie",
        "Kids Classic Shorts", "Toddler Floral Dress", "Kids Cartoon Sweatshirt",
        "Boys Cargo Joggers", "Girls Velvet Party Dress"
    ];

    // Generate Kids items (45 total)
    // Traditional (20 items)
    for (let i = 1; i <= 20; i++) {
        const title = kidsTraditionalTitles[i % kidsTraditionalTitles.length] + ` (Junior ${i})`;
        const imgId = kidsImages[i % kidsImages.length];
        products.push({
            id: 'K-T-' + i,
            title: title,
            price: `$${(40 + (i * 5)).toFixed(2)}`,
            image: `https://images.unsplash.com/photo-${imgId}?w=500&q=80`,
            category: "kids",
            itemType: "coats",
            badges: i % 5 === 0 ? ["Hot"] : []
        });
    }
    // Western (25 items)
    for (let i = 1; i <= 25; i++) {
        const title = kidsWesternTitles[i % kidsWesternTitles.length] + ` (Kids ${i})`;
        const imgId = kidsImages[(i + 5) % kidsImages.length];
        products.push({
            id: 'K-W-' + i,
            title: title,
            price: `$${(15 + (i * 4)).toFixed(2)}`,
            image: `https://images.unsplash.com/photo-${imgId}?w=500&q=80`,
            category: "kids",
            itemType: i % 4 === 0 ? "denim" : (i % 5 === 0 ? "coats" : "tshirts")
        });
    }

    // Set Default initial products for main page display
    // First women western card marked as featured (short party dress)
    const initialProducts = [
        products.find(p => p.id === 'M-W-1'), // Casual Checkered Flannel
        products.find(p => p.id === 'W-W-4'), // Short Party Dress (Featured)
        products.find(p => p.id === 'W-W-3'), // Women Blazer & Crop Top
        products.find(p => p.id === 'W-W-5')  // Summer Floral Skirt
    ];

    // Shopping Cart State
    let cart = [];

    // DOM Elements for Cart Drawer & Modal
    const cartDrawer = document.getElementById('cart-drawer');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartDrawerCount = document.getElementById('cart-drawer-count');
    const cartHeaderCount = document.querySelector('.cart-badge');
    const cartIconLink = document.querySelector('.cart-link');
    const cartCloseBtn = document.querySelector('.cart-close-btn');
    const placeOrderBtn = document.getElementById('place-order-btn');
    
    const orderSuccessModal = document.getElementById('order-success-modal');
    const successCloseBtn = document.getElementById('success-close-btn');

    // Render function for Product Grid
    function renderProducts(filteredList) {
        const grid = document.getElementById('product-grid');
        if (!grid) return;
        grid.innerHTML = '';
        
        filteredList.forEach(prod => {
            const card = document.createElement('div');
            card.className = `product-card ${prod.isFeatured ? 'product-card-hover-active' : ''}`;
            card.setAttribute('data-category', prod.category);
            card.setAttribute('data-item', prod.itemType);
            card.setAttribute('data-id', prod.id);
            
            let badgesHtml = '';
            if (prod.badges && prod.badges.length > 0) {
                badgesHtml = `<div class="badges">` + 
                    prod.badges.map(b => `<span class="badge badge-${b.toLowerCase()}">${b}</span>`).join('') + 
                    `</div>`;
            }
            
            let btnHtml = '';
            if (prod.isFeatured) {
                btnHtml = `<button class="btn btn-add-cart-red add-to-cart-trigger"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>`;
            } else {
                btnHtml = `<button class="btn btn-outline btn-add-cart-red add-to-cart-trigger" style="color:var(--text-main); border-color:#ECECEC;"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>`;
            }
            
            card.innerHTML = `
                <div class="product-image">
                    <img src="${prod.image}" alt="${prod.title}">
                    ${badgesHtml}
                    <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${prod.title}</h3>
                    <div class="product-price">
                        <span class="current-price">${prod.price}</span>
                    </div>
                    ${btnHtml}
                </div>
            `;
            grid.appendChild(card);
        });
        
        attachProductEvents();
    }

    // Attach click events on grid cards
    function attachProductEvents() {
        // Add to Cart Trigger
        const triggers = document.querySelectorAll('.add-to-cart-trigger');
        triggers.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const card = this.closest('.product-card');
                const prodId = card.getAttribute('data-id');
                const product = products.find(p => p.id === prodId);
                
                if (product) {
                    addToCart(product);
                    
                    // Button confirmation animation
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
                    this.style.backgroundColor = '#2D6A4F';
                    this.style.color = '#FFFFFF';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.backgroundColor = '';
                        this.style.color = '';
                    }, 1200);
                }
            });
        });

        // Wishlist
        const wishlistButtons = document.querySelectorAll('.wishlist-btn');
        wishlistButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const icon = this.querySelector('i');
                if (icon.classList.contains('fa-regular')) {
                    icon.classList.remove('fa-regular');
                    icon.classList.add('fa-solid');
                    icon.style.color = '#D91E36';
                } else {
                    icon.classList.remove('fa-solid');
                    icon.classList.add('fa-regular');
                    icon.style.color = '';
                }
            });
        });
    }

    // Shopping Cart Operations
    function addToCart(product) {
        // Add item
        cart.push(product);
        updateCartUI();
        
        // Open Cart Drawer automatically for feedback
        toggleCartDrawer(true);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }

    function updateCartUI() {
        // Update badges
        cartHeaderCount.innerText = cart.length;
        cartDrawerCount.innerText = cart.length;
        
        // Render items
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<div style="text-align:center; padding: 40px 0; color:var(--text-muted);">Your cart is empty.</div>`;
            cartSubtotal.innerText = '$0.00';
            placeOrderBtn.disabled = true;
            return;
        }
        
        placeOrderBtn.disabled = false;
        let subtotal = 0;
        
        cart.forEach((item, index) => {
            const priceValue = parseFloat(item.price.replace('$', ''));
            subtotal += priceValue;
            
            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <span class="cart-item-price">${item.price}</span>
                </div>
                <button class="cart-item-remove" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
            `;
            cartItemsContainer.appendChild(row);
        });
        
        cartSubtotal.innerText = `$${subtotal.toFixed(2)}`;
        
        // Wire remove buttons
        const removeButtons = document.querySelectorAll('.cart-item-remove');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const idx = parseInt(this.getAttribute('data-index'));
                removeFromCart(idx);
            });
        });
    }

    // Cart Drawer Toggle Actions
    function toggleCartDrawer(open) {
        if (open) {
            cartDrawer.classList.add('active');
        } else {
            cartDrawer.classList.remove('active');
        }
    }

    cartIconLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCartDrawer(true);
    });

    cartCloseBtn.addEventListener('click', () => {
        toggleCartDrawer(false);
    });

    document.querySelector('.cart-drawer-overlay').addEventListener('click', () => {
        toggleCartDrawer(false);
    });

    // 4. Category Gallery Card Filter clicks (Women, Men, Kids Banners)
    const galleryPills = document.querySelectorAll('.gallery-pill-card');
    galleryPills.forEach(pill => {
        pill.addEventListener('click', function(e) {
            const targetCat = this.getAttribute('data-category');
            if (targetCat) {
                // Filter products
                const filtered = products.filter(p => p.category === targetCat);
                renderProducts(filtered);
                
                // Update active tab in the Icon Menu
                categoryTabs.forEach(tab => {
                    const filterType = tab.getAttribute('data-filter');
                    if (filterType === targetCat) {
                        tab.classList.add('active');
                    } else {
                        tab.classList.remove('active');
                    }
                });
                
                // Smooth scroll to the trending section
                const targetSec = document.querySelector('#trending');
                if (targetSec) {
                    targetSec.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 5. Category Icon Menu Filter Tabs
    const categoryTabs = document.querySelectorAll('.icon-item');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            categoryTabs.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            if (filterValue === 'all') {
                renderProducts(initialProducts);
            } else {
                // If it matches gender category
                if (filterValue === 'women' || filterValue === 'men' || filterValue === 'kids') {
                    const filtered = products.filter(p => p.category === filterValue);
                    renderProducts(filtered);
                } else {
                    // Filter based on itemType
                    const filtered = products.filter(p => p.itemType === filterValue);
                    renderProducts(filtered);
                }
            }
            
            const targetSec = document.querySelector('#trending');
            if (targetSec) {
                targetSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 6. Enable Order checkout flow
    placeOrderBtn.addEventListener('click', () => {
        // Toggle cart drawer off
        toggleCartDrawer(false);
        
        // Show Success Modal
        orderSuccessModal.classList.add('active');
    });

    successCloseBtn.addEventListener('click', () => {
        // Close Modal
        orderSuccessModal.classList.remove('active');
        
        // Reset Cart
        cart = [];
        updateCartUI();
    });

    // 7. Shop by Collection Logic
    const collectionsGrid = document.getElementById('collections-grid');
    const collectionTabs = document.querySelectorAll('.collection-tab');
    const quickViewModal = document.getElementById('quick-view-modal');
    const qvCloseBtn = document.querySelector('.qv-close-btn');
    const qvImage = document.getElementById('qv-image');
    const qvTitle = document.getElementById('qv-title');
    const qvBadge = document.getElementById('qv-badge');
    const qvPrice = document.getElementById('qv-price');
    const qvAddCartBtn = document.getElementById('qv-add-cart-btn');
    let qvActiveProduct = null;

    function getProductCategoryBadge(product) {
        const title = product.title.toLowerCase();
        if (product.category === 'women') {
            if (title.includes('saree')) return 'Sarees';
            if (title.includes('lehenga')) return 'Lehengas';
            if (title.includes('anarkali') || title.includes('salwar') || title.includes('kurti')) return 'Ethnic Wear';
            if (title.includes('blazer') || title.includes('jacket') || title.includes('trench')) return 'Western Wear';
            if (title.includes('dress') || title.includes('gown')) return 'Party Wear';
            if (title.includes('blouse') || title.includes('top')) return 'Tops';
            if (title.includes('trouser') || title.includes('skirt') || title.includes('jean')) return 'Jeans';
            return 'Western Wear';
        } else if (product.category === 'men') {
            if (title.includes('sherwani')) return 'Sherwanis';
            if (title.includes('kurta')) return 'Kurtas';
            if (title.includes('blazer') || title.includes('suit') || title.includes('bandhgala') || title.includes('jodhpuri')) return 'Blazers';
            if (title.includes('jacket') || title.includes('bomber')) return 'Jackets';
            if (title.includes('flannel') || title.includes('shirt')) return 'Shirts';
            if (title.includes('t-shirt') || title.includes('tee') || title.includes('sweater') || title.includes('hoodie')) return 'T-Shirts';
            if (title.includes('jeans') || title.includes('jean')) return 'Jeans';
            if (title.includes('trouser') || title.includes('pant')) return 'Trousers';
            return 'Casual Wear';
        } else if (product.category === 'kids') {
            if (title.includes('lehenga') || title.includes('anarkali') || title.includes('dress') || title.includes('girl')) return 'Girls Wear';
            if (title.includes('sherwani') || title.includes('kurta') || title.includes('boy') || title.includes('jacket') || title.includes('dungaree')) return 'Boys Wear';
            if (title.includes('baby') || title.includes('toddler')) return 'Baby Wear';
            if (title.includes('traditional') || title.includes('dhoti') || title.includes('nehru')) return 'Traditional Wear';
            if (title.includes('school')) return 'School Collection';
            return 'Kids Wear';
        }
        return 'Fashion';
    }

    function renderCollections(filteredList) {
        if (!collectionsGrid) return;
        collectionsGrid.innerHTML = '';
        
        filteredList.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'collection-card';
            card.setAttribute('data-id', prod.id);
            
            const badgeLabel = getProductCategoryBadge(prod);
            
            let badgesHtml = `<div class="badges"><span class="badge badge-hot" style="background-color: var(--primary-red);">${badgeLabel}</span>`;
            if (prod.badges && prod.badges.length > 0) {
                prod.badges.forEach(b => {
                    if (b.toLowerCase() !== 'hot') {
                        badgesHtml += `<span class="badge badge-${b.toLowerCase()}" style="margin-left: 5px;">${b}</span>`;
                    }
                });
            }
            badgesHtml += `</div>`;
            
            card.innerHTML = `
                <div class="collection-card-image">
                    <img src="${prod.image}" alt="${prod.title}">
                    ${badgesHtml}
                    <button class="quick-view-overlay-btn" data-id="${prod.id}"><i class="fa-solid fa-eye"></i> Quick View</button>
                    <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
                </div>
                <div class="collection-card-info">
                    <h3 class="collection-card-title">${prod.title}</h3>
                    <div class="collection-card-meta">
                        <div class="collection-card-stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="collection-card-price">${prod.price}</span>
                    </div>
                    <button class="btn btn-primary btn-add-cart-red collections-add-cart-trigger" data-id="${prod.id}">
                        <i class="fa-solid fa-bag-shopping"></i> Add to Cart
                    </button>
                </div>
            `;
            collectionsGrid.appendChild(card);
        });
        
        attachCollectionCardEvents();
    }

    function attachCollectionCardEvents() {
        // Add to Cart
        const addTriggers = collectionsGrid.querySelectorAll('.collections-add-cart-trigger');
        addTriggers.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const prodId = this.getAttribute('data-id');
                const product = products.find(p => p.id === prodId);
                if (product) {
                    addToCart(product);
                    
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
                    this.style.backgroundColor = '#2D6A4F';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.backgroundColor = '';
                    }, 1200);
                }
            });
        });

        // Quick View overlay click
        const qvTriggers = collectionsGrid.querySelectorAll('.quick-view-overlay-btn');
        qvTriggers.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const prodId = this.getAttribute('data-id');
                openQuickView(prodId);
            });
        });

        // Wishlist toggling
        const wishlistButtons = collectionsGrid.querySelectorAll('.wishlist-btn');
        wishlistButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const icon = this.querySelector('i');
                if (icon.classList.contains('fa-regular')) {
                    icon.classList.remove('fa-regular');
                    icon.classList.add('fa-solid');
                    icon.style.color = '#D91E36';
                } else {
                    icon.classList.remove('fa-solid');
                    icon.classList.add('fa-regular');
                    icon.style.color = '';
                }
            });
        });
    }

    function openQuickView(productId) {
        const prod = products.find(p => p.id === productId);
        if (!prod) return;
        
        qvActiveProduct = prod;
        qvImage.src = prod.image;
        qvImage.alt = prod.title;
        qvTitle.innerText = prod.title;
        qvBadge.innerText = getProductCategoryBadge(prod);
        qvPrice.innerText = prod.price;
        
        quickViewModal.classList.add('active');
    }

    // Close Quick View
    if (qvCloseBtn) {
        qvCloseBtn.addEventListener('click', () => {
            quickViewModal.classList.remove('active');
        });
    }

    if (quickViewModal) {
        quickViewModal.addEventListener('click', (e) => {
            if (e.target === quickViewModal) {
                quickViewModal.classList.remove('active');
            }
        });
    }

    // Quick View Add to Cart
    if (qvAddCartBtn) {
        qvAddCartBtn.addEventListener('click', () => {
            if (qvActiveProduct) {
                addToCart(qvActiveProduct);
                quickViewModal.classList.remove('active');
            }
        });
    }

    // Filter collection tabs
    collectionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            collectionTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            let filteredList = [];
            
            if (category === 'all') {
                // Mix products from women, men, and kids (e.g. 8 items each to make 24)
                const womenProds = products.filter(p => p.category === 'women').slice(0, 8);
                const menProds = products.filter(p => p.category === 'men').slice(0, 8);
                const kidsProds = products.filter(p => p.category === 'kids').slice(0, 8);
                filteredList = [...womenProds, ...menProds, ...kidsProds];
            } else {
                // Filter only category products, showing 24 items
                filteredList = products.filter(p => p.category === category).slice(0, 24);
            }
            
            renderCollections(filteredList);
        });
    });

    // Helper to trigger initial render
    function initCollections() {
        // Get initial mixed products (8 women, 8 men, 8 kids)
        const womenProds = products.filter(p => p.category === 'women').slice(0, 8);
        const menProds = products.filter(p => p.category === 'men').slice(0, 8);
        const kidsProds = products.filter(p => p.category === 'kids').slice(0, 8);
        const mixedList = [...womenProds, ...menProds, ...kidsProds];
        
        renderCollections(mixedList);
    }

    // Initialize UI on page load
    updateCartUI();
    renderProducts(initialProducts);
    initCollections();
});
