import Card from '../Card/Card'
import './Catalog.css'
import {product} from '../../database'
import Button from '../Button/Button'

export default function Catalog(){
    return(
        <div className="container">
            <section className="catalog">
            <div className="catalog_list">
                {product.map((product,index) =>(
                    <Card key={index} {...product}/>
                ))}
            </div>
            <div className="catalog_footer">
                <Button title="Catalog" style="dark" />
            </div>
        </section> 
        </div>
    )
}