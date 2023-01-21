import './Tovar.css'

function Tovar(props)
{
    return (
        <div className="Tovar">
            <div className="tovarImage">
                <img src={props.image} alt="" />
            </div>
            <div className="tovarText">
                <h2>Sample Headline</h2>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <span>${props.price}</span>
            </div>
        </div>
    )
}
export default Tovar