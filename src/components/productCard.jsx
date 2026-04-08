
export default function ProductCard(props) {

    console.log(props)

    return (
        <div className="border w-56 h-80" align="center"  padding="2">
            <h1>{props.name}</h1>
            <img src={props.photo} alt={props.name} className="w-full h-48 object-cover" />
            <p className="text-green-800 text-lg font-bold">${props.price}</p>

        </div>
    )
}

