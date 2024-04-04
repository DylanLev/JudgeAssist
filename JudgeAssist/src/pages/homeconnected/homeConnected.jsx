import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./homeConnected.scss";

const HomeConnected = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  // Function to handle model button click
  const handleModelClick = (modelName) => {
    // Redirect user to the /draft page with the model name as a prop
    navigate(`/draft/${encodeURIComponent(modelName)}`);
  };

  return (
    <div className="home-connected-container">
      <div className="dashboard-container">
        <div className="welcome-message">Welcome, Judge {username}.</div>
        <div className="models-container">
          <h2>Predefined Models</h2>
          <ul className="model-grid">
            <li>
              <button className="model-button" onClick={() => handleModelClick("Civil Judgment")}>
                <img src="../public/img/marteau1.png" alt="Paper" />
                <span>Civil Judgment</span>
              </button>
            </li>
            <li>
              <button className="model-button" onClick={() => handleModelClick("Criminal Judgment")}>
                <img src="../public/img/marteau2.png" alt="Paper" />
                <span>Criminal Judgment</span>
              </button>
            </li>
            <li>
              <button className="model-button" onClick={() => handleModelClick("Family Court Judgment")}>
                <img src="../public/img/marteau3.png" alt="Paper" />
                <span>Family Court Judgment</span>
              </button>
            </li>
            <li>
              <button className="model-button" onClick={() => handleModelClick("Administrative Judgment")}>
                <img src="../public/img/marteau4.png" alt="Paper" />
                <span>Administrative Judgment</span>
              </button>
            </li>
            <li>
              <button className="model-button" onClick={() => handleModelClick("Constitutional Judgment")}>
                <img src="../public/img/marteau5.png" alt="Paper" />
                <span>Constitutional Judgment</span>
              </button>
            </li>
            <li>
              <button className="model-button" onClick={() => handleModelClick("Appellate Judgment")}>
                <img src="../public/img/marteau6.png" alt="Paper" />
                <span>Appellate Judgment</span>
              </button>
            </li>
            {/* Add more predefined models as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeConnected;
