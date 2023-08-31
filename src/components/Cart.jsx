import { useDispatch, useSelector } from 'react-redux';
import { reduceQuantity, removeFromCart, incrementQuantity } from '../redux/cartSlice';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import { FaceFrownIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Cart() {
	const dispach = useDispatch();
	const cart = useSelector((state) => state.cart.cartItems);

	const handleRemoveProduct = (product) => {
		dispach(removeFromCart(product));
	};

	const reduceQuantityOfProduct = (product) => {
		dispach(reduceQuantity(product));
	};
	const incrementQuantityOfProduct = (product) => {
		dispach(incrementQuantity(product));
	};

	return (
		<div className=''>
			<div className='flex items-center gap-4 mb-4 border-b-2 pb-2'>
				<ShoppingCartIcon className='h-8 w-8' aria-hidden='true' />
				<h2 className='font-bold text-xl'>Cart</h2>
			</div>
			{cart.length > 0 ? (
				<div className='grid grid-cols-1 gap-8'>
					{cart.map((product) => (
						<div
							key={product.id}
							className='overflow-hidden rounded-md bg-white shadow p-6 h-24 flex flex-row items-center justify-between'>
							<div className='flex items-center gap-4 justify-center'>
								<p className=''>{product.name} </p>
								<span className='font-bold text-indigo-600'>
									(x{product.quantity}) | {(product.quantity * product.price).toFixed(2)} €
								</span>
							</div>
							<div className='flex justify-center gap-2'>
								<button
									type='button'
									onClick={() => incrementQuantityOfProduct(product)}
									className='rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
									<PlusIcon className='h-5 w-5' aria-hidden='true' />
								</button>
								<button
									type='button'
									onClick={() => reduceQuantityOfProduct(product)}
									className='rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
									<MinusIcon className='h-5 w-5' aria-hidden='true' />
								</button>
								<button
									onClick={() => handleRemoveProduct(product)}
									className='rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'>
									Remove
								</button>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className='flex flex-col justify-center items-center gap-4 select-none'>
					<FaceFrownIcon className='h-8 w-8' aria-hidden='true' />
					<p>The cart is empty</p>
				</div>
			)}
		</div>
	);
}
