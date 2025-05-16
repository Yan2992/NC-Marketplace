import { getCategories, getItemsByCategory } from "../../Api"
import { useEffect, useState } from "react";

export const Shop = ({ categories, setCategories, basket, setBasket }) => {
    const [items, setItems] = useState([])
  useEffect(() => {
    getCategories()
      .then(data => setCategories(data))
  }, [setCategories]);

  const categoryClick = (categoryName) => { 
    getItemsByCategory(categoryName)
    .then((data) => {
        console.log(data)
        setItems(data)
    }) 
}

    const addToBasket = (item) => {
      setBasket(prevBasket => [...prevBasket, item]);
    }

  return (
    <main>
      <h1 className="shop-header">Shop</h1>
      <h2 className="category-header">Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.category_name}>
        <button onClick={() => categoryClick(category.category_name)}></button>
         {category.category_name}</li>
        ))}
      </ul>
      <section>
        <h3>Items in Category</h3>
        <ul>
            {items.map(item => (
                <li key={item.item_id}>{item.item_name}- £{item.price.toFixed(2)}
                <button onClick={() => addToBasket(item)}>Add item to Basket</button></li>))}
        </ul>
      </section>
    </main>
  )
}


    


