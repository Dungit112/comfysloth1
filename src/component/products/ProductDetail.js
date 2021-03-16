import React from 'react';
import './ProductDetails.css';
const ProductDetail = () => {
  return (
    <div className="section section-center page">
        <div className="container">
      <a className="btn" href="a">
        back to products
      </a>
      <div className="product-center">
        <section className="sc-pFZIQ gbgfMs">
          <img
            src="https://dl.airtable.com/.attachments/e2eef862d9b7a2fb0aa74fa24fbf97bb/25c4bc17/0-pexels-pixabay-462235.jpg"
            alt=""
            className="main "
          />
          <div className="gallery">
            <img
              src="https://dl.airtable.com/.attachments/e2eef862d9b7a2fb0aa74fa24fbf97bb/25c4bc17/0-pexels-pixabay-462235.jpg"
              alt=""
              className="active"
            />
            <img
              src="https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg"
              alt=""
              className="null"
            />
            <img
              src="https://dl.airtable.com/.attachments/a73777f8a2cbf4820ccaa6aa4349db01/c541de4b/z-extra-2.jpeg"
              alt=""
              className="null"
            />
            <img
              src="https://dl.airtable.com/.attachments/7a50daf83875879b373d91ebb9bb6012/c1695f7e/z-extra-3.jpeg"
              alt=""
              className="null"
            />
            <img
              src="https://dl.airtable.com/.attachments/5592998dcaee77b12c50bda63dd94d06/6ad61540/z-extra-4.jpeg"
              alt=""
              className="null"
            />
          </div>
        </section>
        <section className="content">
          <h2>modern poster</h2>
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
            <p className="reviews">(100 customer reviews)</p>
          </div>
          <h5 className="price">$30.99</h5>
          <p className="desc">Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
          <p className="info"><span>Available : </span>In stock</p>
          <p className="info"><span>SKU :</span>recQ0fMd8T0Vk211E</p>
          <p className="info"><span>Brand :</span>liddy</p>
          <hr/>
          <section className="sc-kEjbxe jbJDWL">
                <div className="colors">
                    <span> colors:</span>
                </div>
                <div className="btn-container">
                        <div className="sc-jrAGrp dXWCyY amount-btns">
                            <button type="button" className="amount-btn"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg></button>
                            <h2 className="amount">1</h2>
                            <button type="button" className="amount-btn" ><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg></button>
                            <a className="btn" href="a">add to cart</a>
                        </div>
                </div>
          </section>
        </section>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
