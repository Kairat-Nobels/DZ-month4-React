import Tovar from './left/Tovar'
function Left()
{
    return (
        <div className='Cotalog'>
            <Tovar image="../../public/first.jpg" price="200"/>
            <Tovar image="../../public/second.jpg" price="300"/>
            <Tovar image="../../public/third.jpg" price="250"/>
        </div>
    )
}

export default Left