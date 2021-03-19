import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryHelper from '../../helper/Category.helper';
import ColorHelper from '../../helper/Color.helper';
import CompanyHelper from '../../helper/Company.helper';
import { fetchProduct } from '../../store/app/productsSlice';
import { selectProducts, selecttorLoading } from '../../store/app/selector';
import './Product.css';
import ProductsItem from './ProductsItem';
const Products = () => {
  const show = useSelector(selectProducts);
  const isLoading = useSelector(selecttorLoading);
  // const currentFormat = CurrentFormat()
  const [newProduct, setNewProduct] = useState([]);
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
  const reset = (e) => {
    setFilter({
      searchText: '',
      filterCategory: 'all',
      filterCompany: 'all',
      filterColor: 'all',
      filterPrice: 309999,
      isFilterFreeShopping: false,
      sortBy: '',
    });
  };
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const fillterAll = (e) => {
    let arrfilter = show ? show : [];

    if (filter.searchText) {
      arrfilter =
        filter.searchText !== ''
          ? arrfilter.filter((name) =>
              name.name.toLowerCase().includes(filter.searchText.toLowerCase())
            )
          : arrfilter;
    }
    if (filter.filterCategory) {
      arrfilter =
        filter.filterCategory !== 'all'
          ? arrfilter.filter(
              (category) => category.category === filter.filterCategory
            )
          : arrfilter;
    }
    if (filter.filterCompany) {
      arrfilter =
        filter.filterCompany !== 'all'
          ? arrfilter.filter((com) => com.company === filter.filterCompany)
          : arrfilter;
    }
    if (filter.filterColor) {
      arrfilter =
        filter.filterColor !== 'all'
          ? arrfilter.filter((color) => color.colors[0] === filter.filterColor)
          : arrfilter;
    }
    if (filter.filterPrice) {
      arrfilter = arrfilter.filter((price) => price.price < filter.filterPrice);
    }
    if (filter.isFilterFreeShopping) {
      console.log(filter.isFilterFreeShopping);
      arrfilter = arrfilter.filter((free) => free.shipping);
    }
    if (filter.sortBy) {
      console.log('aa', arrfilter);
      if (filter.sortBy === 'price-lowest') {
        arrfilter = arrfilter.sort((a, b) => a.price - b.price);
      } else if (filter.sortBy === 'price-highest') {
        arrfilter = arrfilter.sort((a, b) => b.price - a.price);
      } else if (filter.sortBy === 'name-a') {
        arrfilter = arrfilter.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filter.sortBy === 'name-z') {
        arrfilter = arrfilter.sort((a, b) => b.name.localeCompare(a.name));
      }
    }

    setNewProduct(arrfilter);
  };
  useEffect(() => {
    if (show.length > 0) {
      setNewProduct([...show]);
    }
    fillterAll();
  }, [filter, show]);

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
                      max="309999"
                      min="0"
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
                      className="checkbox"
                      type="checkbox"
                      checked={filter.isFilterFreeShopping}
                      onChange={(e) =>
                        setFilter((prev) => ({
                          ...prev,
                          isFilterFreeShopping: !filter.isFilterFreeShopping,
                        }))
                      }
                    ></input>
                  </div>
                </form>
                <button
                  onClick={(e) => reset(e)}
                  type="button"
                  className="clear-btn"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            <section className="sc-crrsfI iDhzRL">
              <section className="sc-bqyKva ehfErK">
                <div className="btn-container">
                  <button className="button-sort1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="button-sort2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <p>23 products found</p>
                  <form>
                    <label>Sort by</label>
                    <select
                      onClick={(e) =>
                        setFilter((prev) => ({
                          ...prev,
                          sortBy: e.target.value,
                        }))
                      }
                      className="sort-input"
                      name="sort"
                      id="sort"
                    >
                      <option value="price-lowest">Price (lowest)</option>
                      <option value="price-highest">Price (highest)</option>
                      <option value="name-a">Price Name (a-z)</option>
                      <option value="name-z">Price Name (z-a)</option>
                    </select>
                  </form>
                  <hr />
                </div>
              </section>
              <div className="products-container">
                {isLoading === true ? (
                  <div className="div-loader">
                    <div className="loader"></div>
                  </div>
                ) : newProduct.length > 0 ? (
                  newProduct.map((j, index) => (
                    <ProductsItem
                      id={j.id}
                      key={index}
                      name={j.name}
                      price={j.price}
                      image={j.image}
                    />
                  ))
                ) : (
                  <div>
                    <h1>Not Product</h1>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
