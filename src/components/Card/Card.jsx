import Button from '../Button/Button'
import product from '/card/product.webp'
import './Card.css'

export default function Card({name,price}){
    // alert(price)
    return(
        <div className="catalog_item">
            <img src={product} alt="" />
            <div className="car_title">
                {name}
            </div>
            <div className="card_price">
                {price}
            </div>
            <Button title="Order" style="dark" />
        </div>
    )
}



