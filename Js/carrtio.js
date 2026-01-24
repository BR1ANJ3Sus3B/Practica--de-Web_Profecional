const cartBtns = document.querySelectorAll('.cart-btn');
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cartTotal');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');

let cart = [];

// Abrir modal
function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += parseFloat(item.price);
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartItemsContainer.appendChild(div);
  });
  cartTotal.textContent = total.toFixed(2);
  cartModal.classList.add('active');
}

// Agregar al carrito
cartBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.card');
    const name = card.querySelector('h3').textContent;
    const price = card.querySelector('.price').textContent;
    cart.push({name, price});
    updateCart();
  });
});

// Cerrar carrito
closeCart.addEventListener('click', () => cartModal.classList.remove('active'));

// Eliminar item
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Checkout (solo alerta)
checkoutBtn.addEventListener('click', () => {
  if(cart.length === 0) return alert('El carrito está vacío.');
  alert('Gracias por tu compra! Total: $' + cartTotal.textContent + ' MXN');
  cart = [];
  updateCart();
});
