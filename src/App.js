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

	return (
		<BookContext.Provider value={{ state: state }}>
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
