import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import axios from "axios";
import Footer from "../Layout/Footer";
import { Header } from "../Home";

const Product = ({ product }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PRODUCT",
    item: product,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 border rounded-lg bg-white shadow-md cursor-move ${isDragging ? "opacity-50" : ""}`}
    >
      <img src={product.images[0]} alt={product.name} className="w-20 h-20 object-cover" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">${product.price}</p>
      <p className="text-xs text-gray-500">{product.description}</p>
      <p className="text-xs text-gray-500">{product.features}</p>
      <p className="text-xs text-blue-500 font-semibold">Category: {product.category}</p>
      <div className="flex space-x-2 mt-2">
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={`Product ${index}`} className="w-12 h-12 object-cover border rounded" />
        ))}
      </div>
    </div>
  );
};

const DropArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PRODUCT",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`min-h-[200px] p-6 border-2 border-dashed ${isOver ? "border-green-500 bg-green-100" : "border-gray-400"}`}
    >
      {isOver ? "Drop here" : "Drag products here or upload"}
    </div>
  );
};

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [droppedProducts, setDroppedProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    features: "",
    category: "",
    images: [],
  });

  const handleDrop = async (product) => {
    setDroppedProducts((prev) => [...prev, product]);
    try {
      await axios.post("/api/products", product);
    } catch (error) {
      console.error("Error saving product", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files).slice(0, 3);
    if (files.length < 3) {
      alert("Please upload exactly 3 images.");
      return;
    }
    
    const imagePromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((images) => {
      setNewProduct((prev) => ({ ...prev, images }));
    });
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category || newProduct.images.length !== 3) {
      alert("Please fill in all required fields and upload 3 images.");
      return;
    }
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: "", price: "", description: "", features: "", category: "", images: [] });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <div className="p-20 bg-gray-100 min-h-screen">

        <div className="flex gap-10">
          <div className="w-1/3 bg-white p-4 shadow rounded"
           style={{ boxShadow: '0 4px 6px rgba(253, 216, 53, 1)'
           }}>
            <h2 className="text-lg font-semibold mb-3">Add New Product</h2>
            <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} className="w-full mb-2 p-2 border rounded" />
            <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} className="w-full mb-2 p-2 border rounded" />
            <input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} className="w-full mb-2 p-2 border rounded" />
            <input type="text" name="features" placeholder="Features" value={newProduct.features} onChange={handleInputChange} className="w-full mb-2 p-2 border rounded" />
            <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleInputChange} className="w-full mb-2 p-2 border rounded" />
            <input type="file" onChange={handleFileUpload} className="mb-4" multiple />
            <button onClick={addProduct} className="w-full bg-yellow-500 text-black py-2 rounded">Add Product</button>
          </div>

          <div className="w-1/3 bg-white p-4 shadow rounded"
           style={{ boxShadow: '0 4px 6px rgba(253, 216, 53, 1)'
           }}>
            <h2 className="text-lg font-semibold mb-3">Available Products</h2>
            <div className="space-y-4">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white p-4 shadow rounded"
           style={{ boxShadow: '0 4px 6px rgba(253, 216, 53, 1)'
           }}>
            <h2 className="text-lg font-semibold mb-3">Selected Products</h2>
            <DropArea onDrop={handleDrop} />
            <ul className="mt-4">
              {droppedProducts.map((product, index) => (
                <li key={index} className="p-2 bg-gray-200 mt-2 rounded">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm">${product.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </DndProvider>
  );
};

export default AdminDashboard;
