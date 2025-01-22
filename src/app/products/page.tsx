


'use client';

import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import Image from 'next/image';

const sanity = sanityClient({
    projectId: '5quxk6jf', 
    dataset: 'production', 
    apiVersion: '2023-01-01', 
    useCdn: true, 
});

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    imageUrl: string; 
    tags: string[];
}

const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const query = `
              *[_type == "product"] {
                _id,
                title,
                price,
                description,
                discountPercentage,
                "imageUrl": productImage.asset->url, // Fetch image URL correctly
                tags
              }
            `;
            const data = await sanity.fetch(query);
            console.log("Fetched Products:", data); 
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.title} has been added to your cart!`);
    };

    const truncateDescription = (description: string) => {
        return description.length > 100
            ? description.substring(0, 100) + "..."
            : description;
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (!products.length) {
        return <p className="text-center">Loading products...</p>;
    }

    return (
        <div className="pt-4">
            <h2 className="text-center font-bold text-3xl  text-black mt-11 py-9">Products from API Data</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
                        <Image
                            src={product.imageUrl || '/default-placeholder.png'} 
                            alt={product.title || 'Product image'}
                            height={300}
                            width={300}
                            className="w-full h-48 object-cover rounded-t-md"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-slate-500 mt-2 text-sm">
                                {truncateDescription(product.description)}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-slate-700 font-bold">$ {product.price}</p>
                                {product.discountPercentage > 0 && (
                                    <p className="text-sm text-green-500">
                                        {product.discountPercentage}% OFF
                                    </p>
                                )}
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {product.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-slate-200 text-black px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <button
                                className="mt-4 w-full bg-[#B88E2F] text-white py-2 "
                                onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-[#FCF8F3] shadow-md rounded-lg p-4">
                <h2 className="text-lg font-bold text-black">Cart Summary</h2>
                {cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                                <div>
                                    <p className="font-medium text-gray-700">{item.title}</p>
                                    <p className="text-sm text-gray-500">
                                        $ {item.price.toFixed(2)}
                                    </p>
                                </div>
                                <Image
                                    src={item.imageUrl || '/default-placeholder.png'} 
                                    alt={item.title || 'Product image'}
                                    width={50}
                                    height={50}
                                    className="rounded-md"
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-center">Your cart is empty. Please add some products!</p>
                )}
            </div>
        </div>
    );
};

export default ProductCards;
