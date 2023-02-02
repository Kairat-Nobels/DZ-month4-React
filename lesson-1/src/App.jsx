import './App.css'
import User from './User';

function App() {
  return (
    <div className="App">
      <h1 className=''>Hello world!</h1>
      <label htmlFor="name"></label>
      <input type="text" id='name' />
      <User name="Kairat" age={20} />
    </div>
  )
}

export default App
