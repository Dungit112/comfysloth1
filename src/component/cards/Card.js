import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { selecttorLoading, selecttorAdd } from '../../store/app/selector';
import { decrement, increment } from '../../store/app/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
const Card = () => {
  const dispatch = useDispatch();
  const cardProduct = useSelector(selecttorAdd);
  console.log(cardProduct);
  return (
    <div className="container">
      <div className="sc-fKFyDc nwOmR page">
        <section className="sc-bkzZxe cSnsVU  section-center">
          <div className="sc-hBEYos dWjUC">
            <div className="content">
              <h5>Item</h5>
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Subtotal</h5>
              <span />
            </div>
          </div>
          {cardProduct.length > 0 ? (
            cardProduct.map((card) => (
              <article key={card.id} className="sc-fodVxV cYLuAZ">
                <div className="title">
                  <img src={card.images[0].url} alt={card.name} />
                  <div>
                    <h5 className="name">{card.name}</h5>
                    <p className="color">
                      Color
                      <span style={{ background: 'rgb(0,0,0)' }} />
                    </p>
                  </div>
                </div>
                <h5 className="price">{card.price}</h5>
                <div className="sc-jrAGrp dXWCyY amount-btns">
                  <button
                    type="button"
                    onClick={() => dispatch(decrement(card.id))}
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
                  <h2 className="amount">{card.amount}</h2>
                  <button
                    type="button"
                    onClick={() => dispatch(increment(card.id))}
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
                </div>
                <h5 className="subtotal">$61.98</h5>
                <button className="remove-btn">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />
                  </svg>
                </button>
              </article>
            ))
          ) : (
            <div> Card is empty </div>
          )}

          <hr />
          <div className="link-container">
            <Link className="link-btn" to="/">
              continue shopping
            </Link>
            <button type="button" className="link-btn clear-btn">
              clear shopping cart
            </button>
          </div>
          <section className="sc-fFubgz bjNVbG">
            <div>
              <article>
                <h5>
                  subtotal :<span>$61.98</span>
                </h5>
                <p>
                  shipping fee :<span>$5.34</span>
                </p>
                <hr />
                <h4>
                  order total :<span>$67.32</span>
                </h4>
              </article>
              <button className="btn">login</button>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Card;
