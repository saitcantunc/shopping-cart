import { BookContext } from "../Context";
import { useContext } from "react";

const Products = () => {
	const context = useContext(BookContext);

	return (
		<div className='products-container'>
			{context.state.booklist.map((book, index) => (
				<div className='book' key={index}>
					<img src={book.image} alt={book.name} />
					<div>
						<h4>{book.name}</h4>
						<p>{book.author}</p>
						<p>Fiyat: $ {book.price}</p>
						<button onClick={() => context.addToCart(book)}>
							<i class='fas fa-cart-plus'></i>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
