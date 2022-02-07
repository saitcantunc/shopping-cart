import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
// Context
import { BookContext } from "./Context";
// Data
import { data } from "./data";

function App() {
	const [state, setState] = useState({
		booklist: data,
		cart: [],
	});

	const addToCart = (book) => {
		setState({
			...state,
			cart: state.cart.find((cartItem) => cartItem.id === book.id)
				? state.cart.map((cartItem) =>
						cartItem.id === book.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
				  )
				: [...state.cart, { ...book, count: 1 }],
		});
	};

	const removeFromCart = (id) =>
		setState({
			...state,
			cart: state.cart.filter((cartItem) => cartItem.id !== id),
		});

	const increase = (id) => {
		setState({
			...state,
			cart: state.cart.map((cartItem) =>
				cartItem.id === id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
			),
		});
	};

	const decrease = (id) => {
		setState({
			...state,
			cart: state.cart.map((cartItem) =>
				cartItem.id === id
					? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
					: cartItem
			),
		});
	};

	const totalCartCount = state.cart.reduce((total, book) => (total = total + book.count), 0);

	return (
		<BookContext.Provider
			value={{ state: state, addToCart, increase, decrease, removeFromCart, totalCartCount }}>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/cart' element={<Cart />} />
					<Route path='/' element={<Products />} />
				</Routes>
			</div>
		</BookContext.Provider>
	);
}

export default App;
