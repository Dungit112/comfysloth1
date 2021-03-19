import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCard,
  decrement,
  fetchProductId,
  increment,
} from '../../store/app/productsSlice';
import {
  selecttorLoading,
  selecttorValueProduct,
} from '../../store/app/selector';
import './ProductDetails.css';
const ProductDetail = ({ match }) => {
  const url = match.params.id;
  const product = useSelector(selecttorValueProduct);
  const load = useSelector(selecttorLoading);
  const [imageCurrent, setImageCurrent] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductId(url));
  }, [dispatch, url]);
  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setImageCurrent(product.images[0].url);
    }
  }, [product, url]);

  return (
    <div className="section page">
      <div className="container">
        <Link className="btn" to="/">
          back to products
        </Link>
        {product && !load ? (
          <div className="product-center">
            <section className="sc-pFZIQ gbgfMs">
              <img
                src={product.images ? imageCurrent : ''}
                alt=""
                className="main "
              />
              <div className="gallery">
                {(product.images || []).map((image, index) => (
                  <img
                    src={image.url}
                    alt="ima"
                    key={index}
                    onClick={() => setImageCurrent(image.url)}
                    className="active"
                  />
                ))}
              </div>
            </section>
            <section className="content">
              <h2>{product.name}</h2>
              <div className="sc-kstrdz btjemE">
                <div className="stars">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </span>
                </div>
                <p className="reviews">({product.reviews} customer reviews)</p>
              </div>
              <h5 className="price-detail">{product.price}</h5>
              <p className="desc">{product.description}</p>
              <p className="info">
                <span>Available : </span>In stock
              </p>
              <p className="info">
                <span>SKU :</span>
                {product.id}
              </p>
              <p className="info">
                <span>Brand :</span>
                {product.company}
              </p>
              <hr />
              <section className="sc-kEjbxe jbJDWL">
                <div className="colors">
                  <span> colors:</span>
                  {(product.colors || []).map((color, index) => (
                    <button
                      key={index}
                      style={{ background: `${color}` }}
                      className="color-btn"
                    ></button>
                  ))}
                </div>
                <div className="btn-container">
                  <div className="sc-jrAGrp dXWCyY amount-btns">
                    <button
                      type="button"
                      onClick={() => dispatch(decrement())}
                      className="amount-btn"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>
                    <h2 className="amount">{product.amount}</h2>
                    <button
                      type="button"
                      onClick={() => dispatch(increment())}
                      className="amount-btn"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>
                    <Link
                      className="btn"
                      to="/cart"
                      onClick={() => dispatch(addToCard(product.id))}
                    >
                      add to cart
                    </Link>
                  </div>
                </div>
              </section>
            </section>
          </div>
        ) : (
          <div className="div-loader">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
