import reactLogo from './assets/react.svg'
import './App.css'
import User from './components/User/User'
import Text from './components/Text/Text'
function App()
{
  const person = { name: 'igor', profession: 'teacher' }
  const students = [
    {id:2, name: 'Alex', age: 30},
    {id:1, name: 'Kairat', age: 20 }
  ]
  return (
    <div>
      <ul>
        {
          students.map(student => <User key={student.id} data={student} person={person} />).reverse()
        }
      </ul>
      <Text/>
    </div>
  )
}

export default App
