import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div>
      <section className="sc-gKsewC gnwqMi section-center">
        <article className="content">
          <h1>
            design your
            <br />
            comfort zone
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link className="btn hero-btn" to="/">
            shop now
          </Link>
        </article>
        <article className="img-container">
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
            alt="nice table"
            className="main-img"
          />
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg"
            alt="person working"
            className="accent-img"
          />
        </article>
      </section>
      <section className="sc-gsTCUz bhdLno section">
        <div className="title">
          <h2 className="h2title">featured products</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center featured">
          <article className="sc-bdfBwQ cIKpxU">
            <div className="container">
              <img
                src="https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af"
                alt="entertainment center"
              />
              <a className="link" href="/products/recNZ0koOqEmilmoz">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
              </a>
            </div>
            <footer>
              <h5>entertainment center</h5>
              <p>$599.99</p>
            </footer>
          </article>
          <article className="sc-bdfBwQ cIKpxU">
            <div className="container">
              <img
                src="https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f"
                alt="entertainment center"
              />
              <a className="link" href="/products/recNZ0koOqEmilmoz">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
              </a>
            </div>
            <footer>
              <h5>high-back bench</h5>
              <p>$399.99</p>
            </footer>
          </article>
        </div>
        <Link className="btn" to="/">
          all products
        </Link>
      </section>
      <section className="sc-iBPRYJ cOWINi">
        <div className="section-center">
          <article className="header">
            <h3>
              custom furniture <br /> built only for you
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
