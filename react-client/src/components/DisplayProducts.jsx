import { useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const DisplayProducts = (props) => {

  const {allProducts, setAllProducts} = props

  useEffect(() => {
    axios.get('http://172.19.219.207:8000/api/products')
      .then((res) => {
        setAllProducts(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="display-products">
      {
        allProducts.map((product) => (
          <div className="each-product" key={product._id}>
            <h2>{product.title}</h2>
            <p><b>Price: </b>{product.price}</p>
            <p><b>Description: </b>{product.description}</p>
            <Link to={`/products/${product._id}`}>View Product</Link>
          </div>
        ))
      }
    </div>
  );
}

export default DisplayProducts;
