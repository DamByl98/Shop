import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../redux/actions/categoryActions';
import Header from './Header'

function CategotyList() {
    const categories = useSelector((state)=>state);
    const dispatch = useDispatch()

    const fetchCategory = async()=>{
        const response = await axios
        .get("https://fakestoreapi.com/products/categories")
        .catch((err)=>{
            console.log("Error: ", err)
        });
        dispatch(setCategories(response.data))
    };
    useEffect(()=>{
        fetchCategory();
    },[])
    console.log(categories);
  return (
    <div className='container'>
        <div className='list'>
            <Header/>
        </div>
    </div>
)
}

export default CategotyList