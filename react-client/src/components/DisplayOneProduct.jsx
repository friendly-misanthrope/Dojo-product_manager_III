import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const DisplayOneProduct = (props) => {

  const { id } = useParams()
  const [product, setProduct] = useState({})
  const {title, price, description} = product

  useEffect(() => {
    axios.get(`http://172.19.219.207:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h2>{title}</h2>
      <p><b>Price: </b>{price}</p>
      <p><b>Description: </b>{description}</p>
    </div>
  );
}

export default DisplayOneProduct;