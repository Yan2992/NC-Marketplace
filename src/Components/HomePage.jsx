import { useEffect } from "react";
import { getItems } from "../../Api";

export const HomePage = ({items, setItems}) => {
    useEffect(() => {
        getItems()
        .then((data) => {
            console.log(data)
            setItems(data)
        })
    }, [setItems])
    return (
        <main>
            <h1>Intro Page</h1>
            <h2>Featured Items</h2>
            <ul>{items.slice(0, 5).map((item) => (
                <li key={item.item_id}><img src={items.img_url} alt={item.item_name}/></li>
            ))}</ul>
        </main>
    )
}

