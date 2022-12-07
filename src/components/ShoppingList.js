import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce((accumulator, plant) => {
            return [...accumulator, plant.category]
        }, [] // base value
    );
    const singleCategorie = [...new Set(categories)];
    return <div>
        <ul>
            {singleCategorie.map((cat) => (<li key={cat}>{cat}</li>))}
        </ul>
        <ul className='lmj-plant-list'>
            {plantList.map((plant) => (
                <li key={plant.id} className='lmj-plant-item'>
                    {plant.name}
                    {plant.isSpecialOffer && <div className='lmj-sales'>Soldes !</div>}
                </li>))}
        </ul>
    </div>
}

export default ShoppingList