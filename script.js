document.addEventListener('DOMContentLoaded', function() {
    // Loader
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    // Hide loader after 2 seconds
    setTimeout(() => {
        loaderWrapper.classList.add('fade-out');
    }, 2000);
    
    // Remove loader after animation completes
    loaderWrapper.addEventListener('transitionend', () => {
        loaderWrapper.style.display = 'none';
    });

    // Sticky Header
    const header = document.querySelector('.sticky-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        mainNav.classList.toggle('active');
        menuBtn.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuBtn.classList.remove('fa-times');
        });
    });

    // Search Toggle
    const searchBtn = document.getElementById('search-btn');
    const searchClose = document.getElementById('search-close');
    const searchForm = document.querySelector('.search-form-container');
    
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchForm.classList.add('active');
    });
    
    searchClose.addEventListener('click', () => {
        searchForm.classList.remove('active');
    });

    // Cart Toggle
    const cartBtn = document.getElementById('cart-btn');
    const cartClose = document.getElementById('cart-close');
    const cartSidebar = document.querySelector('.cart-sidebar');
    
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.add('active');
    });
    
    cartClose.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.cart-sidebar') && !e.target.closest('#cart-btn')) {
            cartSidebar.classList.remove('active');
        }
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Featured Books Slider
    const sliderContainer = document.querySelector('.slider-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let scrollAmount = 0;
    const scrollStep = 300;
    
    nextBtn.addEventListener('click', () => {
        scrollAmount += scrollStep;
        if (scrollAmount > sliderContainer.scrollWidth - sliderContainer.clientWidth) {
            scrollAmount = sliderContainer.scrollWidth - sliderContainer.clientWidth;
        }
        sliderContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    prevBtn.addEventListener('click', () => {
        scrollAmount -= scrollStep;
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
        sliderContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Daily Deal Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        
        const diff = endOfDay - now;
        
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Book Data
    const books = [
        {
            id: 1,
            title: "The Midnight Library",
            author: "Matt Haig",
            price: 12.99,
            oldPrice: 16.99,
            rating: 4,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            badge: "Bestseller"
        },
        {
            id: 2,
            title: "Where the Crawdads Sing",
            author: "Delia Owens",
            price: 10.49,
            oldPrice: 14.99,
            rating: 5,
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Atomic Habits",
            author: "James Clear",
            price: 11.99,
            oldPrice: 15.99,
            rating: 5,
            image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            badge: "New"
        },
        {
            id: 4,
            title: "The Silent Patient",
            author: "Alex Michaelides",
            price: 9.99,
            oldPrice: 12.99,
            rating: 4,
            image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Educated",
            author: "Tara Westover",
            price: 13.25,
            oldPrice: 17.50,
            rating: 5,
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            badge: "Sale"
        },
        {
            id: 6,
            title: "The Vanishing Half",
            author: "Brit Bennett",
            price: 14.99,
            oldPrice: 19.99,
            rating: 4,
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
        id: 7, // Make sure IDs are unique
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 20.99,
        oldPrice: 19.99,
        rating: 5,
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        badge: "Bestseller"
    },
    {
        id: 8,
        title: "Dune",
        author: "Frank Herbert",
        price: 9.99,
        oldPrice: 12.99,
        rating: 5,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        badge: "Classic"
    }
    ];

    // Categories Data
    const categories = [
        {
            name: "Fiction",
            icon: "fas fa-book",
            count: 125
        },
        {
            name: "Science Fiction",
            icon: "fas fa-rocket",
            count: 89
        },
        {
            name: "Mystery",
            icon: "fas fa-search",
            count: 76
        },
        {
            name: "Romance",
            icon: "fas fa-heart",
            count: 112
        },
        {
            name: "Biography",
            icon: "fas fa-user",
            count: 64
        },
        {
            name: "Self-Help",
            icon: "fas fa-hand-holding-heart",
            count: 93
        }
    ];

    // Testimonials Data
    const testimonials = [
        {
            content: "BookNest has the best selection of books at competitive prices. I always find what I'm looking for and the delivery is super fast!",
            author: "Sarah Johnson",
            role: "Avid Reader",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/43.jpg"
        },
        {
            content: "As a book collector, I appreciate the quality of the books I receive from BookNest. They're always in perfect condition and often arrive before the estimated date.",
            author: "Michael Chen",
            role: "Book Collector",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            content: "The customer service is exceptional. When I had an issue with my order, they resolved it immediately and went above and beyond to make it right.",
            author: "Emily Rodriguez",
            role: "Librarian",
            rating: 4,
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        }
    ];

    // Render Featured Books
    function renderFeaturedBooks() {
        const sliderContainer = document.querySelector('.slider-container');
        
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
                <div class="book-img">
                    <img src="${book.image}" alt="${book.title}">
                    ${book.badge ? `<span class="book-badge">${book.badge}</span>` : ''}
                </div>
                <div class="book-content">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">By ${book.author}</p>
                    <div class="book-stars">
                        ${'<i class="fas fa-star"></i>'.repeat(book.rating)}
                        ${'<i class="far fa-star"></i>'.repeat(5 - book.rating)}
                    </div>
                    <div class="book-price">
                        <div>
                            <span class="old-price">$${book.oldPrice.toFixed(2)}</span>
                            <span class="price">$${book.price.toFixed(2)}</span>
                        </div>
                        <div class="add-to-cart" data-id="${book.id}">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                </div>
            `;
            sliderContainer.appendChild(bookCard);
        });
    }

    // Render Categories
    function renderCategories() {
        const categoryGrid = document.querySelector('.category-grid');
        
        categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.innerHTML = `
                <i class="${category.icon} category-icon"></i>
                <h3>${category.name}</h3>
                <p>${category.count} books</p>
            `;
            categoryGrid.appendChild(categoryCard);
        });
    }

    // Render Testimonials
    function renderTestimonials() {
        const testimonialSlider = document.querySelector('.testimonial-slider');
        
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            testimonialCard.innerHTML = `
                <p class="testimonial-content">${testimonial.content}</p>
                <div class="testimonial-author">
                    <div class="author-img">
                        <img src="${testimonial.image}" alt="${testimonial.author}">
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.role}</p>
                        <div class="testimonial-rating">
                            ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                            ${'<i class="far fa-star"></i>'.repeat(5 - testimonial.rating)}
                        </div>
                    </div>
                </div>
            `;
            testimonialSlider.appendChild(testimonialCard);
        });
    }

    // Render Daily Deals
    function renderDailyDeals() {
        const dealProducts = document.querySelector('.deal-products');
        
        // Get 3 random books for deals
        const shuffled = [...books].sort(() => 0.5 - Math.random());
        const selectedDeals = shuffled.slice(0, 3);
        
        selectedDeals.forEach(book => {
            const dealCard = document.createElement('div');
            dealCard.className = 'deal-card';
            dealCard.innerHTML = `
                <div class="deal-img">
                    <img src="${book.image}" alt="${book.title}">
                </div>
                <div class="deal-content">
                    <h3>${book.title}</h3>
                    <div class="price">$${book.price.toFixed(2)} <span class="old-price">$${book.oldPrice.toFixed(2)}</span></div>
                    <div class="deal-progress">
                        <div class="progress-bar">
                            <div class="progress" style="width: ${Math.floor(Math.random() * 50) + 50}%"></div>
                        </div>
                        <p class="deal-stock">Only ${Math.floor(Math.random() * 10) + 5} left in stock</p>
                    </div>
                    <button class="btn add-to-cart-btn" data-id="${book.id}">Add to Cart</button>
                </div>
            `;
            dealProducts.appendChild(dealCard);
        });
    }

    // Initialize all renders
    function initialize() {
        renderFeaturedBooks();
        renderCategories();
        renderTestimonials();
        renderDailyDeals();
        
        // Initialize testimonial slider (simple version)
        $('.testimonial-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    // Shopping Cart Functionality
    let cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-total span');
    const cartCountElement = document.querySelector('.cart-count');
    
    // Add to cart
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart') || e.target.closest('.add-to-cart-btn')) {
            const addButton = e.target.closest('.add-to-cart') || e.target.closest('.add-to-cart-btn');
            const bookId = parseInt(addButton.getAttribute('data-id'));
            const book = books.find(b => b.id === bookId);
            
            // Check if book is already in cart
            const existingItem = cart.find(item => item.id === book.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...book,
                    quantity: 1
                });
            }
            
            updateCart();
            
            // Show cart sidebar
            cartSidebar.classList.add('active');
            
            // Animation for add to cart button
            if (addButton.classList.contains('add-to-cart')) {
                addButton.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    addButton.innerHTML = '<i class="fas fa-shopping-cart"></i>';
                }, 1000);
            }
        }
        
        // Remove item from cart
        if (e.target.classList.contains('remove-item')) {
            const cartItem = e.target.closest('.cart-item');
            const bookId = parseInt(cartItem.getAttribute('data-id'));
            
            cart = cart.filter(item => item.id !== bookId);
            updateCart();
        }
    });
    
    // Update cart UI
    function updateCart() {
        // Clear cart items
        cartItemsContainer.innerHTML = '';
        
        // Add items to cart
        let total = 0;
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.setAttribute('data-id', item.id);
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>By ${item.author}</p>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                    <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                    <span class="remove-item">Remove</span>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            
            total += item.price * item.quantity;
        });
        
        // Update total and count
        cartTotalElement.textContent = `$${total.toFixed(2)}`;
        cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        // Show empty message if cart is empty
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        }
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        // Simple validation
        if (email && email.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            this.querySelector('input').value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
    
    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize everything when DOM is loaded
    initialize();
});