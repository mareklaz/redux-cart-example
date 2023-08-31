import Cart from './components/Cart';
import Products from './components/Products';

function App() {
	return (
		<div className='mx-auto max-w-5xl'>
			<div className='grid grid-cols-2 gap-8 py-12'>
				<Products />
				<Cart />
			</div>
		</div>
	);
}

export default App;
