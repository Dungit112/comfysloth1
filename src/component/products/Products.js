import React, { useEffect, useState } from 'react';
import './Product.css';
import { selectProducts } from '../../store/app/selector';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/app/productsSlice';
import ProductsItem from './ProductsItem';
import CategoryHelper from '../../helper/Category.helper';
import CompanyHelper from '../../helper/Company.helper';
import ColorHelper from '../../helper/Color.helper';

const Products = () => {
  const show = useSelector(selectProducts);
  const [newState, setNewState] =useState();
  const [filter, setFilter] = useState({
    searchText: '',
    filterCategory: 'all',
    filterCompany: 'all',
    filterColor: 'all',
    filterPrice: 309999,
    isFilterFreeShopping: false,
  });
  const company = CompanyHelper();
  const category = CategoryHelper();
  const color = ColorHelper();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    fillterAll()
  },[filter])
  

  const fillterAll = (e) => {
    
    let arrfilter =  show ? show : [];
 
    if(filter.searchText) {
      arrfilter = filter.searchText !=='' ? (arrfilter).filter((name) => name.name.toLowerCase().includes(filter.searchText.toLowerCase())) : arrfilter;
      console.log("search", arrfilter)
    }
    if (filter.filterCategory) {
      arrfilter = filter.filterCategory !== 'all' ? (arrfilter).filter((category) => category.category=== filter.filterCategory) : arrfilter;
      console.log("category",arrfilter)
    }
     if (filter.filterCompany) {
      arrfilter = filter.filterCompany !=='all' ?(arrfilter).filter((com) => com.company=== filter.filterCompany) : arrfilter; 
      console.log("company",arrfilter)
    }
    if(filter.filterColor){
      arrfilter = filter.filterColor !=='all' ?(arrfilter).filter((color) => color.colors[0]=== filter.filterColor) : arrfilter; 
      console.log("color",arrfilter)
    // }if(filter.filterPrice){
    //   arrfilter = arrfilter.filter(price => price.price < filter.filterPrice )
    //   console.log(arrfilter)
    }if(filter.isFilterFreeShopping){
    console.log(filter.isFilterFreeShopping)
      arrfilter = filter.isFilterFreeShopping !==false ? arrfilter.filter(free => free.shipping) : arrfilter
      // console.log("freee", arrfilter)
    }
    // console.log("the last",arrfilter)
    return arrfilter;
  };
  let productArr = [];
  useEffect(() => {
    productArr = fillterAll()

  },[fillterAll, productArr, filter])

  return (
    <div className="container">
      <div className="row">
        <div className="sc-hHftDr kCQmsc page">
          <div className="section-center products">
            <div className="sc-iqHYGH hSaKRS">
              <div className="content">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-control">
                    <input
                      className="search-input"
                      placeholder="search"
                      onChange={(e) =>
                        setFilter((prev) => ({
                          ...prev,
                          searchText: e.target.value,
                        }))
                      }
                    ></input>
                  </div>

                  <div className="form-control">
                    <h5>Category</h5>
                    <br />
                    <div className="hSaKRS">
                      {category.map((ct, index) => (
                        <button
                          className="hSaKRS"
                          onClick={(e) =>
                            setFilter((prev) => ({
                              ...prev,
                              filterCategory: e.target.value,
                            }))
                          
                          }
                          value={ct}
                          type="submit"
                          key={index}
                        >
                          {ct}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-control">
                    <h5>Company</h5>

                    <select
                      className="company"
                      onClick={(e) =>
                        setFilter((prev) => ({
                          ...prev,
                          filterCompany: e.target.value,
                        }))
                      }
                    >
                      {company.map((cp, index) => (
                        <option key={index} value={cp}>
                          {cp}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-control hSaKRS">
                    <h5>Color</h5>
                    <div className="colors">
                      {color.map((cl, index) => (
                        <button
                          className="color-btn "
                          style={{ background: `${cl}` }}
                          onClick={(e) =>
                            setFilter((prev) => ({
                              ...prev,
                              filterColor: e.target.value,
                            }))
                          }
                          value={cl}
                          type="submit"
                          key={index}
                        ></button>
                      ))}
                    </div>
                  </div>
                  <div className="form-control">
                    <h5>Price</h5>
                    <p className="price">{filter.filterPrice}</p>
                    <br />
                    <input
                      type="range"
                      minValue={0}
                      maxValue={filter.filterPrice}
                      value={filter.filterPrice}
                      onChange={(e) =>
                        setFilter((prev) => ({
                          ...prev,
                          filterPrice: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="form-control shipping">
                    <h5>Free Shopping</h5>
                    <input
                      type="checkbox"
                      onClick={(e) =>
                        setFilter((prev) => ({
                          ...prev,
                          isFilterFreeShopping: e.target.value,
                        }))
                      }
                    ></input>
                  </div>
                </form>
                <button type="button" className="clear-btn">
                  Clear Filters
                </button>
              </div>
            </div>
            <section className="sc-crrsfI iDhzRL">
              <div className="products-container">
              
                  {show.map((j, index) => (
                    <ProductsItem
                      key={index}
                      name={j.name}
                      price={j.price}
                      image={j.image}
                    />
                  ))}
               
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
