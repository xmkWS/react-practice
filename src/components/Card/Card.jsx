import Button from '../Button/Button'
import productImg from '/card/product.webp'
import {Link} from 'react-router-dom'
import './Card.css'

export default function Card({name,price,id}){

    return(
        <div className="catalog_item">
            <img src={productImg} alt="" />
            <div className="car_title">
                {name}
            </div>
            <div className="card_price">
                {price}
            </div>
            <Link to={`${id}`}>
                <Button title="Order" style="dark" />
            </Link>
        </div>
    )
}



