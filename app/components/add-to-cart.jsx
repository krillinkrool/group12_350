import React from 'react';
import Link from 'next/link';


const Checkout = () => {
  const items = [
    { id: 1, name: 'gahod kimmie hoodie', price: 2500, size: 'XXL', quantity: 1, img: '/images/products/gahodhoodie.png' },
    { id: 2, name: 'fairy kimmie tee', price: 1500, size: 'XL', quantity: 2, img: '/images/products/fairykimmie.png' } // Replace with actual image paths
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 120;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
    // Add your checkout logic here
  };

  return (
    <div className="checkout-container">
      <header>
        <h1>KIMMIE CO.</h1>
        <nav>
          <ul>
            <li><Link href="/collection">COLLECTION</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
          </ul>
        </nav>
      </header>
      <h2>KIMMIE CHECKOUT</h2>
      <div className="checkout">
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.price} Php</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: {subtotal} Php</p>
          <p>Shipping: {shipping} Php</p>
          <p>Total: {total} Php</p>
          <button onClick={handleCheckout} className="btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
