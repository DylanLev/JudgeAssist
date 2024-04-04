import React from 'react';
import "./Banner.scss";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1>Write a judgement in minutes</h1>
        <p>Pre-designed models. Just add your touch.</p>
      </div>
      
        <Link className="try-button" to="/login">
                <p>Try JudgeAssist</p>
        
        </Link>
    </div>
  );
}

export default Banner;
