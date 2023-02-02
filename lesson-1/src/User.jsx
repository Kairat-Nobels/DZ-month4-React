function User(props)
{
    console.log(props);
    return (
        <>
            <h2>Name: {props.name}</h2>
            <p>age: {props.age}</p>
        </>
    )
}
export default User