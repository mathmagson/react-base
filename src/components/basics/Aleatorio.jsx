export default props => {
    const {min, max} = props

    const random = Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <div>
            <h2>Numero Randomico entre {min} e {max}:</h2>
            <p>
                <strong>{random}</strong>
            </p>
        </div>
    )
}