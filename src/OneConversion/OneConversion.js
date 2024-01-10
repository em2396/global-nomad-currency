

export default function OneConversion({current}) {
    console.log(current, 'current inside one conversion')
    return (
        <div>
            <button>Delete</button>
            <h2>{current.id}</h2>
        </div>
    )
}