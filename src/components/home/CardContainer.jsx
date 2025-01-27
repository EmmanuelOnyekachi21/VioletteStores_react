import HomeCard from "./HomeCard"


const CardContainer = ({products}) => {
  return (
    <section className="py-5" id="shop">
    <h1 className="poppins-bold text-center my-3" style={{ textAlign: "center" }}>FEATURED PRODUCTS</h1>

    <div className="container px-4 px-lg-5 mt-5">
      <div className="row justify-content-center">
        {products.map((product) => <HomeCard key={product.id} product={product} />)}
          
      </div>
    </div>
  </section>
  )
}

export default CardContainer
