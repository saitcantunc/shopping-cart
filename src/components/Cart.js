import React, { useContext } from "react";
import { BookContext } from "../Context";

const Cart = () => {
	const context = useContext(BookContext);

	const totalCartAmount = context.state.cart
		.reduce((total, book) => (total = total + book.price * book.count), 0)
		.toFixed(2);

	return (
		<div className='container'>
			<h3>Toplam Sepet Tutarı: ${totalCartAmount}</h3>

			{context.state.cart.map((book, index) => (
				<div className='book' key={index}>
					<img src={book.image} alt={book.name} />
					<div>
						<h4>{book.name}</h4>
						<p>Yazar: {book.author}</p>
						<p>Fiyat: $ {book.price}</p>
						<p>Toplam: $ {(book.price * book.count).toFixed(2)}</p>
						<p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
						<button onClick={() => context.decrease(book.id)}>
							<i class='fas fa-minus'></i>
						</button>
						<button onClick={() => context.removeFromCart(book.id)}>
							<i class='fas fa-cart-arrow-down'></i>
						</button>

						<button onClick={() => context.increase(book.id)}>
							<i class='fas fa-plus'></i>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cart;
