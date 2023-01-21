import './App.css'
import Search from './components/Search/Search'
import Tovar from './components/Tovar/Tovar'

function App() {
  const pizza = [
    { id: 1, name: '4 Сыра', price: 798, image: '../public/pizza1.png' },
    { id: 2, name: 'Барбекю', price: 788, image: '../public/pizza2.png' },
    { id: 3, name: 'Деревенская', price: 948, image: '../public/pizza3.png' },
    { id: 4, name: 'Классика', price: 728, image: '../public/pizza4.png' },
    { id: 5, name: 'Мегапепперони', price: 678, image: '../public/pizza5.png' },
    { id: 6, name: 'Мексиканка', price: 798, image: '../public/pizza6.png' },
    { id: 7, name: 'Куриная', price: 848, image: '../public/pizza7.png' },
    { id: 8, name: 'Шашлычная с говядиной', price: 828, image: '../public/pizza8.png' },
    { id: 9, name: 'Чили', price: 828, image: '../public/pizza9.png'},
  ]
  return (
    <div className="App">
      <Search />
      <div className="cotalog">
        {
          pizza.map(p => <Tovar key={p.id} data={p} />).reverse()
        }
      </div>
    </div>
  )
}

export default App
