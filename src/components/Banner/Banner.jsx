import banner from '/banner/banner.jpg'
import './Banner.css'
import Button from '../Button/Button'
export default function Banner(){
    return(
        <div className="container">
            <section className="banner">
            <img src={banner} alt="" />
            <div className="banner_head">
                <h1>clo Brand</h1>
                <p>Your choose in clothes</p>
                <Button title="Catalog"/>
            </div>
        </section>
        </div>
    )
}