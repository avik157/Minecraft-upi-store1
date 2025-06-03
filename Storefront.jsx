import React from "react";

const products = [
  {
    id: 1,
    name: "Cherry Blossom Set",
    description: "A beautiful Minecraft model set featuring cherry blossom trees and themed tools.",
    price: "₹149",
    file: "/downloads/Cherry-Blossom-Set.zip",
    image: "https://placehold.co/600x400?text=Cherry+Blossom+Set"
  }
];

export default function Storefront() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#00ff99', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>Minecraft UPI Store</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>Buy exclusive Minecraft plugins, models & lobbies with UPI</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff99', borderRadius: '12px', padding: '15px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '12px' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
            <button style={{ display: 'block', marginTop: '10px', backgroundColor: '#00ff99', color: '#000', padding: '10px', borderRadius: '6px' }}>
              Buy via UPI
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}