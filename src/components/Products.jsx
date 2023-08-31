import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { CubeIcon } from '@heroicons/react/24/outline';

export default function Products() {
	const dispach = useDispatch();

	const handleAddProduct = (product) => {
		dispach(addToCart(product));
	};

	const productList = [
		{
			id: 1,
			name: 'Product 1',
			price: 10.99,
		},
		{
			id: 2,
			name: 'Product 2',
			price: 25.49,
		},
		{
			id: 3,
			name: 'Product 3',
			price: 7.99,
		},
		{
			id: 4,
			name: 'Product 4',
			price: 49.99,
		},
		{
			id: 5,
			name: 'Product 5',
			price: 15.0,
		},
	];

	return (
		<div>
			<div className='flex items-center gap-4 mb-4 border-b-2 pb-2'>
				<CubeIcon className='h-8 w-8' aria-hidden='true' />
				<h2 className='font-bold text-xl'>Products</h2>
			</div>

			<div className='grid grid-cols-1 gap-8'>
				{productList.map((product) => (
					<div
						key={product.id}
						className='overflow-hidden rounded-md bg-white px-6 shadow p-6 h-24 flex flex-row items-center justify-between'>
						<div className='flex items-center gap-4 justify-center'>
							<p className=''>{product.name} </p>
							<span className='font-bold text-orange-600'>{product.price} €</span>
						</div>
						<button
							onClick={() => handleAddProduct(product)}
							className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							Add
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
