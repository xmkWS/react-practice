import './ProductOnce.css'
import {product} from '../../database'
import {Link} from 'react-router-dom'

export default function ProductOnce(){

    const {id} = Link();
    const productOnce = product.find(productOnce => productOnce.id === parseInt(id))

    return(
        <div className="container">
            <h1>{productOnce.name}</h1>
            <h1>{productOnce.price}</h1>
        </div>
    )
}