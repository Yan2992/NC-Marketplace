export const Basket = ({basket}) => {
    const total = basket.reduce((acc, item) => acc + item.price, 0)
    return (
        <main>
            <h1 className="basket-header">Basket 🛒</h1>
            <h2 className="your-basket-header">Your Basket</h2>
            {basket.length === 0 ? (<p>Your Basket is Empty</p>) : (
                <ul className="basket-list">
                {basket.map((item, index) => (
                    <li key={index} className="basket-item">
                        <h4>{item.item_name}</h4>
                    </li>))}
            </ul>)}
            <h3>Total: £{total.toFixed(2)}</h3>
        </main>
    )
}

