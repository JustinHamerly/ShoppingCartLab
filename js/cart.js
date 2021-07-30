/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart(cart);
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const emptyCart = document.querySelector('.empty-cart');
  document.querySelector('tbody').textContent = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart(tagName, parent, text) {
  const element = document.createElement(tagName);
  parent.appendChild(element);
  let tbodyElem = document.querySelector('tbody');
  for (let i = 0; i < cart.length; i++) {
    const trElem = newElement('tr', tbodyElem, null);
    for (let j = 0; j < items.length; j++) {
      const tdElem = newElement('td', trElem, null);
      tdElem.textContent = items[j];
    }
  }
  // TODO: Find the table body
  /// ------------------ querySelector ---------------------------///

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  event.target.querySelector('td')
  if (event.target)
    const emptyButton = document.querySelector('cart');
  const cartItems = getItem();
  cartItems.innerHTML = '';
  cart.removeItem
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
