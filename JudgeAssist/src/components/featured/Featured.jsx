import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Write judgements fast, easily and online.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "Write new document"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Judgement Models</button>
            <button>2024 news</button>
            <button>Frequently Asked Questions</button>
            <button>The Law in Israel</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/thelaw.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured