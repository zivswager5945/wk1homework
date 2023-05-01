export default function Productitem({product}) {
    return(
        <section className="image" key={product.id}>
        <div className="row"> 
        <div className="image">
        <a href="" className="image__link">
          <img src={product.image} alt={product.name} className="image__style"/>
        </a>
        <p className="image_title">{product.name}</p>
      </div></div>
        </section>
    )
}