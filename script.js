let cart = [];

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card'); // Find the closest product card
    const product = {
      name: card.querySelector('h3').textContent, // Get the product name from h3
      price: card.querySelector('.price').textContent, // Get the price from the .price element
      image: card.querySelector('.product-image').style.backgroundImage // Get the background image style
    };

    // Add product to the cart
    cart.push(product);

    // Optionally, log the cart to the console
    console.log(cart);
  });
});
cart.push(product);

// Animation feedback
button.textContent = 'Added!';
button.style.background = 'var(--secondary)';

setTimeout(() => {
  button.textContent = 'Add to Cart';
  button.style.background = 'var(--primary)';
}, 1000);

// Update cart count

document.querySelector('.cart').setAttribute('data-count', cart.length);



document.querySelector('.cart').addEventListener('click', () => {
let cartTotal = cart.reduce((total, item) => {
return total + parseFloat(item.price.replace('$', ''));
}, 0);

alert(`Cart Contents (${cart.length} items):\n` + 
cart.map(item => `${item.name} - ${item.price}`).join('\n') +
`\n\nTotal: $${cartTotal.toFixed(2)}`);
});