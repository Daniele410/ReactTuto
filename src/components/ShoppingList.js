import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	// Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currenrPlantAdded = cart.find((plant) => plant.name === name)
		if (currenrPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currenrPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
							<div key={id}>
								<PlantItem
									cover={cover}
									name={name}
									water={water}
									light={light}
									price={price}
								/>
								<button onClick={() => addToCart(name, price)}>Ajouter</button>
							</div>
						) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList