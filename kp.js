document.addEventListener('DOMContentLoaded', () => {
    // --- 1. TAB SWITCHING FUNCTIONALITY ---

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('id').replace('-tab', ''); // e.g., converts 'reviews-tab' to 'reviews'
            const targetContent = document.querySelector(`.${targetId}-content`);

            // Remove 'active' class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked button and its content
            button.classList.add('active');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Initialize: Ensure the 'Description' tab is active on load
    // We assume the first button/content is 'Description' in the HTML
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');
    }

    // --- 2. PRODUCT GALLERY FUNCTIONALITY ---

    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail-gallery img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Get the source (src) and alt text from the clicked thumbnail
            const newSrc = thumbnail.getAttribute('src');
            const newAlt = thumbnail.getAttribute('alt');

            // Update the main image source and alt text
            if (mainImage) {
                mainImage.setAttribute('src', newSrc);
                mainImage.setAttribute('alt', newAlt);
            }
        });
    });

    // --- 3. BASIC CART INTERACTION ---

    const addToCartButton = document.querySelector('.btn-primary');
    const cartCountElement = document.querySelector('.user-actions a[href="#"]'); // Target the 'Cart (0)' link

    let cartCount = 0; // Initialize cart count

    const updateCartDisplay = () => {
        // Simple regex to replace the number in the string "Cart (X)"
        if (cartCountElement) {
            cartCountElement.textContent = `Cart (${cartCount})`;
        }
    };

    addToCartButton.addEventListener('click', () => {
        cartCount++;
        updateCartDisplay();
        
        // Show a temporary confirmation message (e.g., a simple alert or a toast notification)
        alert('NexusShop Aura-Pro Max added to your cart!'); 
        
        // In a real application, you would send an AJAX request here to update the server-side cart.
    });
    
    // --- 4. WISHLIST SIMULATION ---
    
    const wishlistButton = document.querySelector('.btn-wishlist');
    
    wishlistButton.addEventListener('click', () => {
        // Toggle the style and message
        const isAdded = wishlistButton.classList.toggle('added');
        
        if (isAdded) {
            alert('Item added to your Wishlist!');
            wishlistButton.textContent = '❤️ Saved!';
        } else {
            alert('Item removed from Wishlist.');
            wishlistButton.textContent = '❤️ Wishlist';
        }
        // In a real application, this would update a user database
    });
});