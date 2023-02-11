import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

function ProductList() {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch()
    console.log(products)

    const fetchProduct=async()=>{
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err)=>{
                console.log("Error", err)
            });
            dispatch(setProducts(response.data));
    };

    useEffect(()=>{
        fetchProduct();
    },[])
    console.log("Products: ",products)
  return (
    <div className='container'>
        <div className='list'>
            <ProductComponent/>
        </div>
    </div>
)
}

export default ProductList