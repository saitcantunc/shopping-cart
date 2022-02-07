import React, { useContext } from "react";
import { BookContext } from "../Context";

const Cart = () => {
	const context = useContext(BookContext);

	return (
		<div className='container'>
			{context.state.cart.map((book, index) => (
				<div className='book' key={index}>
					<img src={book.image} alt={book.name} />
					<div>
						<h4>{book.name}</h4>
						<p>Yazar: {book.author}</p>
						<p>Fiyat: $ {book.price}</p>
						<p>Toplam: $</p>
						<p>Sepetinizde bu kitaptan toplam adet var.</p>
						<button>
							<i class='fas fa-plus'></i>
						</button>
						<button>
							<i class='fas fa-cart-arrow-down'></i>
						</button>
						<button>
							<i class='fas fa-minus'></i>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cart;
