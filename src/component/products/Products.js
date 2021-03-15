import React, { useEffect, useState } from "react";
import "./Product.css";
import { selectProducts } from "../../store/app/selector";
import { useDispatch, useSelector } from "react-redux";
import {fetchProduct } from "../../store/app/productsSlice";
import ProductsItem from "./ProductsItem";
import CategoryHelper  from '../../helper/Category.helper'

const categories = [
    {
        value: 0,
        text: "office",
    }
];

const Products = () => {

const show = useSelector(selectProducts);
const [searchVal, setSearchVal] = useState('')
const [categoryVal, setCategoryVal] = useState()
const [companyVal, setCompanyVal] = useState()
const [colorVal, setColorVal] = useState()
const [priceVal, setPriceVal] = useState()
const [freeShoppingVal, setFreeShoppingVal] = useState()
const category = CategoryHelper();
const dispatch = useDispatch();
useEffect(() => {
dispatch(fetchProduct())
}, [dispatch,]);

const handleChangeSearch = (val) => {
    setSearchVal(val);
    handleOnClick();
}

 const handleOnClick = (e) =>{
     const {value} = e.target
     console.log(value)
     let filter = []

    const selected = categories.find(cat => (cat.value === value));

    filter = show.filter(cat => (value % 2 === 0));
    let filter2 = filter.filter(cat => (cat.value === value));
     if(value===0){
        return show

    }
    

 }
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <form>
              <h3>Search</h3>
              <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)}></input>
          </form>
          <div className="category">
            <span>Category</span>
            <br/>
          </div>
          <div className="buttonfilter">
        {category.map((ct,index) =>(
            <button onClick={(e)=>handleOnClick(e)} value={index} type="submit"key={index}>{ct}</button>
        ))}
          
          </div>
        </div>
        <div className="col-10 bigtitle">
            {show.map((j,index) =>(
                <ProductsItem 
                key={index}
                name={j.name}
                price={j.price}
                image={j.image}
                />
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default Products;
