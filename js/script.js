// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navbar = document.getElementById('navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const backToTop = document.getElementById('back-to-top');
    
    // Buttons
    const reservationBtn = document.getElementById('reservation-btn');
    const orderBtn = document.getElementById('order-btn');
    const deliveryBtn = document.getElementById('delivery-btn');
    const pickupBtn = document.getElementById('pickup-btn');
    const cartFloat = document.getElementById('cart-float');
    
    // Modals
    const modalOverlay = document.getElementById('modal-overlay');
    const reservationModal = document.getElementById('reservation-modal');
    const orderModal = document.getElementById('order-modal');
    const cartModal = document.getElementById('cart-modal');
    const itemModal = document.getElementById('item-modal');
    const newsletterModal = document.getElementById('newsletter-modal');
    const orderConfirmationModal = document.getElementById('order-confirmation-modal');
    const closeBtns = document.querySelectorAll('.close-modal');

    // Form Elements
    const bookingForm = document.getElementById('booking-form');
    const contactForm = document.getElementById('contact-form');
    const reviewForm = document.getElementById('review-form');
    const newsletterForm = document.getElementById('newsletter-form');
    const deliveryForm = document.getElementById('delivery-form');
    const pickupForm = document.getElementById('pickup-form');
    
    // Item Detail Elements
    const decreaseQuantity = document.getElementById('decrease-quantity');
    const increaseQuantity = document.getElementById('increase-quantity');
    const itemQuantity = document.getElementById('item-quantity');
    const addToCartBtn = document.getElementById('add-to-cart');
    
    // Tab Control
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // Order Page Buttons
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const proceedToCheckoutBtn = document.getElementById('proceed-to-checkout');
    
    // Menu Elements
    const menuSearch = document.getElementById('menu-search');
    const searchBtn = document.getElementById('search-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const dietaryFilters = document.querySelectorAll('[data-dietary]');
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');
    
    // Gallery Elements
    const galleryBtns = document.querySelectorAll('.gallery-btn');
    
    // Review Elements
    const ratingStars = document.querySelectorAll('.rating-select i');
    const ratingValue = document.getElementById('rating-value');
    
    // Blog Elements
    const loadMorePostsBtn = document.getElementById('load-more-posts');
    
    // Application State
    let currentPage = 1;
    let totalPages = 3;
    let currentFilter = 'all';
    let currentDietary = [];
    let currentMaxPrice = 50;
    let currentSearchTerm = '';
    let cart = [];
    let activeItem = null;
    let currentGalleryFilter = 'all';
    let currentGalleryIndex = 0;
    
    // Sample Data
    const menuItems = [
        {
            id: 1,
            name: 'Classic Caesar Salad',
            description: 'Crisp romaine lettuce, garlic croutons, parmesan cheese, with our house-made Caesar dressing.',
            price: 12.99,
            image: '/api/placeholder/400/300',
            category: 'starters',
            dietary: ['vegetarian'],
            options: [
                { name: 'Add Grilled Chicken', price: 4.99 },
                { name: 'Add Grilled Shrimp', price: 5.99 },
                { name: 'Extra Dressing', price: 1.50 }
            ]
        },
        {
            id: 2,
            name: 'Pan-Seared Scallops',
            description: 'Fresh sea scallops pan-seared to perfection, served with lemon butter sauce and seasonal vegetables.',
            price: 15.99,
            image: '/api/placeholder/400/300',
            category: 'starters',
            dietary: [],
            options: [
                { name: 'Truffle Oil Drizzle', price: 2.99 },
                { name: 'Extra Scallops (2)', price: 6.99 }
            ]
        },
        {
            id: 3,
            name: 'Lobster Bisque',
            description: 'Creamy soup made with lobster stock, aromatic vegetables, brandy, and fresh cream.',
            price: 14.99,
            image: '/api/placeholder/400/300',
            category: 'starters',
            dietary: [],
            options: [
                { name: 'Add Lobster Meat', price: 5.99 },
                { name: 'Serve with Garlic Bread', price: 2.99 }
            ]
        },
        {
            id: 4,
            name: 'Filet Mignon',
            description: 'Premium 8oz beef tenderloin grilled to your liking, served with garlic mashed potatoes and roasted vegetables.',
            price: 42.99,
            image: '/api/placeholder/400/300',
            category: 'mains',
            dietary: [],
            options: [
                { name: 'Blue Cheese Crust', price: 3.99 },
                { name: 'Mushroom Sauce', price: 2.99 },
                { name: 'Peppercorn Sauce', price: 2.99 }
            ]
        },
        {
            id: 5,
            name: 'Grilled Salmon',
            description: 'Fresh Atlantic salmon fillet grilled with herbs, served with quinoa pilaf and lemon butter sauce.',
            price: 28.99,
            image: '/api/placeholder/400/300',
            category: 'mains',
            dietary: [],
            options: [
                { name: 'Glaze with Honey & Soy', price: 1.99 },
                { name: 'Add Shrimp Skewer', price: 5.99 }
            ]
        },
        {
            id: 6,
            name: 'Mushroom Risotto',
            description: 'Creamy Arborio rice cooked with white wine, Porcini and wild mushrooms, finished with parmesan cheese and truffle oil.',
            price: 22.99,
            image: '/api/placeholder/400/300',
            category: 'mains',
            dietary: ['vegetarian', 'gluten-free'],
            options: [
                { name: 'Add Grilled Chicken', price: 4.99 },
                { name: 'Add Truffle Shavings', price: 6.99 }
            ]
        },
        {
            id: 7,
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with a molten center, served with vanilla ice cream and fresh raspberries.',
            price: 9.99,
            image: '/api/placeholder/400/300',
            category: 'desserts',
            dietary: ['vegetarian'],
            options: [
                { name: 'Add Whipped Cream', price: 0.99 },
                { name: 'Extra Scoop of Ice Cream', price: 1.99 }
            ]
        },
        {
            id: 8,
            name: 'New York Cheesecake',
            description: 'Classic creamy cheesecake with graham cracker crust, topped with fresh berry compote.',
            price: 8.99,
            image: '/api/placeholder/400/300',
            category: 'desserts',
            dietary: ['vegetarian'],
            options: [
                { name: 'Caramel Drizzle', price: 0.99 },
                { name: 'Chocolate Sauce', price: 0.99 }
            ]
        },
        {
            id: 9,
            name: 'Tiramisu',
            description: 'Traditional Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder.',
            price: 9.99,
            image: '/api/placeholder/400/300',
            category: 'desserts',
            dietary: ['vegetarian'],
            options: [
                { name: 'Amaretto Infusion', price: 1.99 },
                { name: 'Add Espresso Shot', price: 1.50 }
            ]
        },
        {
            id: 10,
            name: 'Craft Beer Selection',
            description: 'Selection of local and imported craft beers. Ask your server for today\'s selection.',
            price: 7.99,
            image: '/api/placeholder/400/300',
            category: 'drinks',
            dietary: ['vegan', 'gluten-free'],
            options: [
                { name: 'Tasting Flight (4 samples)', price: 9.99 }
            ]
        },
        {
            id: 11,
            name: 'Premium Wine Selection',
            description: 'Fine wines from around the world. Available by the glass or bottle.',
            price: 10.99,
            image: '/api/placeholder/400/300',
            category: 'drinks',
            dietary: ['vegan', 'gluten-free'],
            options: [
                { name: 'Wine Pairing with Meal', price: 15.99 }
            ]
        },
        {
            id: 12,
            name: 'Signature Cocktails',
            description: 'Handcrafted cocktails made with premium spirits and fresh ingredients.',
            price: 12.99,
            image: '/api/placeholder/400/300',
            category: 'drinks',
            dietary: ['vegan'],
            options: [
                { name: 'Premium Spirit Upgrade', price: 3.99 }
            ]
        }
    ];
    
    const galleryItems = [
    {
        id: 1,
        title: 'Restaurant Interior',
        description: 'Our elegant dining area with ambient lighting',
        image: '/api/placeholder/800/600',
        category: 'interior'
    },
    {
        id: 2,
        title: 'Chef Special Preparation',
        description: 'Our executive chef preparing signature dishes',
        image: '/api/placeholder/800/600',
        category: 'kitchen'
    },
    {
        id: 3,
        title: 'Outdoor Patio',
        description: 'Enjoy dining in our beautiful outdoor space',
        image: '/api/placeholder/800/600',
        category: 'exterior'
    },
    // Additional gallery items would be defined here
];

// Event Listeners and Functionality Implementation

// Navigation Toggle
if (navToggle) {
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// Modal Controls
function openModal(modal) {
    modalOverlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// Close modals with close buttons
closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

// Close modal when clicking outside of it
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// ESC key to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Open modals with buttons
if (reservationBtn) {
    reservationBtn.addEventListener('click', function() {
        openModal(reservationModal);
    });
}

if (orderBtn) {
    orderBtn.addEventListener('click', function() {
        openModal(orderModal);
    });
}

if (cartFloat) {
    cartFloat.addEventListener('click', function() {
        openModal(cartModal);
    });
}

// Item Quantity Controls
if (decreaseQuantity && increaseQuantity && itemQuantity) {
    decreaseQuantity.addEventListener('click', function() {
        let quantity = parseInt(itemQuantity.value);
        if (quantity > 1) {
            itemQuantity.value = quantity - 1;
        }
    });
    
    increaseQuantity.addEventListener('click', function() {
        let quantity = parseInt(itemQuantity.value);
        itemQuantity.value = quantity + 1;
    });
}

// Add to Cart Functionality
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
        if (!activeItem) return;
        
        const quantity = parseInt(itemQuantity.value);
        const selectedOptions = [];
        
        document.querySelectorAll('.item-option:checked').forEach(option => {
            selectedOptions.push({
                name: option.dataset.name,
                price: parseFloat(option.dataset.price)
            });
        });
        
        const cartItem = {
            id: activeItem.id,
            name: activeItem.name,
            price: activeItem.price,
            quantity: quantity,
            options: selectedOptions,
            totalPrice: calculateItemTotal(activeItem.price, quantity, selectedOptions)
        };
        
        addItemToCart(cartItem);
        closeModal();
        updateCartDisplay();
    });
}

function calculateItemTotal(basePrice, quantity, options) {
    let optionsTotal = 0;
    options.forEach(option => {
        optionsTotal += option.price;
    });
    
    return (basePrice + optionsTotal) * quantity;
}

function addItemToCart(item) {
    // Check if item already exists in cart
    const existingItem = cart.find(cartItem => 
        cartItem.id === item.id && 
        JSON.stringify(cartItem.options) === JSON.stringify(item.options)
    );
    
    if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.totalPrice = calculateItemTotal(
            existingItem.price, 
            existingItem.quantity, 
            existingItem.options
        );
    } else {
        cart.push(item);
    }
    
    // Update local storage
    localStorage.setItem('restaurant-cart', JSON.stringify(cart));
    
    // Update cart badge
    updateCartBadge();
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cart-count');
    if (!cartBadge) return;
    
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartBadge.textContent = totalItems;
    
    if (totalItems > 0) {
        cartBadge.classList.add('active');
    } else {
        cartBadge.classList.remove('active');
    }
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartList || !cartTotal) return;
    
    cartList.innerHTML = '';
    
    if (cart.length === 0) {
        cartList.innerHTML = '<li class="empty-cart">Your cart is empty</li>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        total += item.totalPrice;
        
        const li = document.createElement('li');
        li.className = 'cart-item';
        
        const options = item.options.map(option => `<span class="item-option">${option.name} (+$${option.price.toFixed(2)})</span>`).join('');
        
        li.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-options">${options}</div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="decrease-cart-qty" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-cart-qty" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
            <div class="cart-item-price">$${item.totalPrice.toFixed(2)}</div>
        `;
        
        cartList.appendChild(li);
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Add event listeners for quantity controls
    document.querySelectorAll('.decrease-cart-qty').forEach(btn => {
        btn.addEventListener('click', function() {
            updateCartItemQuantity(btn.dataset.id, -1);
        });
    });
    
    document.querySelectorAll('.increase-cart-qty').forEach(btn => {
        btn.addEventListener('click', function() {
            updateCartItemQuantity(btn.dataset.id, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            removeCartItem(btn.dataset.id);
        });
    });
}

// Menu Display and Filtering
function displayMenuItems(items) {
    const menuContainer = document.getElementById('menu-items');
    if (!menuContainer) return;
    
    menuContainer.innerHTML = '';
    
    if (items.length === 0) {
        menuContainer.innerHTML = '<div class="no-results">No items match your criteria</div>';
        return;
    }
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.id = item.id;
        
        const dietaryIcons = item.dietary.map(diet => `<span class="dietary-icon ${diet}">${diet}</span>`).join('');
        
        menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <div class="dietary-icons">${dietaryIcons}</div>
                    <div class="price">$${item.price.toFixed(2)}</div>
                </div>
            </div>
        `;
        
        menuItem.addEventListener('click', function() {
            showItemDetails(item);
        });
        
        menuContainer.appendChild(menuItem);
    });
}

function filterMenuItems() {
    let filteredItems = menuItems;
    
    // Filter by category
    if (currentFilter !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentFilter);
    }
    
    // Filter by dietary restrictions
    if (currentDietary.length > 0) {
        filteredItems = filteredItems.filter(item => 
            currentDietary.every(diet => item.dietary.includes(diet))
        );
    }
    
    // Filter by price
    filteredItems = filteredItems.filter(item => item.price <= currentMaxPrice);
    
    // Filter by search term
    if (currentSearchTerm !== '') {
        const searchLower = currentSearchTerm.toLowerCase();
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower)
        );
    }
    
    displayMenuItems(filteredItems);
}

// Initialize Page
function initPage() {
    // Load cart from local storage
    const savedCart = localStorage.getItem('restaurant-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartBadge();
    }
    
    // Initialize menu filters
    if (document.getElementById('menu-items')) {
        filterMenuItems();
    }
    
    // Add event listeners for menu filters
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelector('.filter-btn.active').classList.remove('active');
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                filterMenuItems();
            });
        });
    }
    
    if (dietaryFilters) {
        dietaryFilters.forEach(filter => {
            filter.addEventListener('change', function() {
                if (filter.checked) {
                    currentDietary.push(filter.dataset.dietary);
                } else {
                    currentDietary = currentDietary.filter(diet => diet !== filter.dataset.dietary);
                }
                filterMenuItems();
            });
        });
    }
    
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            currentMaxPrice = parseInt(priceRange.value);
            priceValue.textContent = `$${currentMaxPrice}`;
            filterMenuItems();
        });
    }
    
    if (menuSearch && searchBtn) {
        searchBtn.addEventListener('click', function() {
            currentSearchTerm = menuSearch.value;
            filterMenuItems();
        });
        
        menuSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                currentSearchTerm = menuSearch.value;
                filterMenuItems();
            }
        });
    }
    
    // Back to top button
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Gallery filtering
    if (galleryBtns) {
        galleryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelector('.gallery-btn.active').classList.remove('active');
                btn.classList.add('active');
                currentGalleryFilter = btn.dataset.filter;
                displayGalleryItems();
            });
        });
    }
    
    // Form submissions
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleReservationSubmit);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmit);
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

// Initialize the page when DOM is fully loaded
initPage();

});
