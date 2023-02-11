import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../redux/actions/productActions';

function ProductDetails() {
    const {productId} = useParams();
    const dispache = useDispatch();
    const product = useSelector((state)=>state.product)

    console.log(product)

    const fetchDetail=async()=>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
            console.log('Error',err)
        });
        dispache(selectProduct(response.data));
        
    };

    useEffect(()=>{
        if(productId && productId!=='')fetchDetail(productId);
        
    },[productId])

  return (
    <div>
    <Container className='border rounded-sm d-flex align-items-center justify-content-center mt-4'>
      <div className='image'>
        <img src={product.image} alt={"Sorry "} style={{height:'20rem'}}/>
      </div>
      <div className='details'>
        <div className='title' style={styles.title}>{product.title}</div>
        <div style={styles.description}>{product.description}</div>
        <div style={styles.productInfo}>
            <div style={styles.price}>Price: {product.price}$</div>
            <div style={styles.category}>{product.category}</div>
        </div>
        <div style={styles.ratingInfo}>
            <div style={styles.rating}>
                <p style={{fontWeight:600, marginRight:'0.5rem'}}>Rating:</p>
                {product.rating.rate}
                <p className='text-muted'>/5</p>
            </div>
            <div style={{display:'flex'}}>
                <p style={{fontWeight:'600', marginRight:'0.5rem'}}>Amount: </p>
                <p className='border'>{product.rating.count}</p>
            </div>
        </div>
      </div>
    </Container>
    </div>
  )
  
}
const styles = {
    title:{
        fontWeight: 900,
        textAlign: 'center',
        fontSize: 23
    },
    description:{
        fontSize: 12
    },
    productInfo:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2rem'
    },
    ratingInfo:{
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between'
    },
    price:{
        border: '1px solid black',
        borderRadius: 5,
        backgroundColor:'#e5de00',
        width: '7rem',
        textAlign:'center',
        fontWeight: 600

    },
    rating:{
        display:'flex',
        height:'2rem',
        border: '1px solid black',
        borderRadius: 5,
        width: '7rem',
        textAlign:'center',
        fontWeight: 600
    },
    category:{
        border:'1px solid white',
        backgroundColor: '#00ab41',
        borderRadius: 5,
        width: '7rem',
        height:'2rem',
        textAlign:'center',
        fontWeight:600,
        color: 'white'
    }
    
  }

export default ProductDetails