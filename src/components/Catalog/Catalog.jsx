import Card from '../Card/Card'
import './Catalog.css'
import {product} from '../../database'

export default function Catalog(){
    return(
        <div className="container">
            <section className="catalog">
            <div className="catalog_list">
                {product.map((card,index) =>{
                    return(
                        <Card key={index} {...card}/>
                    )
                })}
            </div>
        </section> 
        </div>
    )
}