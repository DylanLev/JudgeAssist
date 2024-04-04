import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Draft.scss";
import Preview from '../preview/Preview.jsx'; // Import Preview component


const Draft = () => {
  
  const { modelName } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    plaintiffid: "",
    plaintiffstatus: "",
    plaintiffrepresentative: "",
    defendantid: "",
    defendantstatus: "",
    defendantrepresentative: "",
    facts: "",
    plaintiffallegations: "",
    defendantcounterclaims: "",
    reasons: "",
    finaldeclarations: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the Preview page with form data
    navigate('/preview', { state: { modelName, formData } }); 
  };
  

  return (
    <div className="draft-container">
      <h1 className="main-title">{modelName} <p>(Draft)</p></h1>
      <form className="judgment-form">
        
        <div className="form-group">
          <label htmlFor="plaintiffid">Identity of the Plaintiff: (זהות התובע) </label>
          <textarea id="plaintiffid" name="plaintiffid" rows="4" cols="50" value={formData.plaintiffid} onChange={handleChange}  required></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="plaintiff-status">Description of the plaintiff's legal status: (תיאור מצבו המשפטי של התובע)</label>
          <textarea id="plaintiff-status" name="plaintiffstatus" rows="4" cols="50" value={formData.plaintiffstatus} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="plaintiff-representative">Plaintiff's Legal Representative: (הנציג המשפטי של התובע)</label>
          <textarea id="plaintiff-representative" name="plaintiffrepresentative" rows="4" cols="50" value={formData.plaintiffrepresentative} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="defendantid">Identity of the Defendant: (זהות הנתבע)</label>
          <textarea id="defendantid" name="defendantid" rows="4" cols="50" value={formData.defendantid} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="defendant-status">Description of the defendant's legal status: (תיאור מעמדו המשפטי של הנתבע)</label>
          <textarea id="defendant-status" name="defendantstatus" rows="4" cols="50" value={formData.defendantstatus} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="defendant-representative">Defendant's Legal Representative: (הנציג המשפטי של הנתבע)</label>
          <textarea id="defendant-representative" name="defendantrepresentative" rows="4" cols="50" value={formData.defendantrepresentative} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="facts">Facts of the dispute: (עובדות המחלוקת)</label>
          <textarea id="facts" name="facts" rows="4" cols="50" value={formData.facts} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="plaintiff-allegations">Detailed Description of Plaintiff's Allegations: (תיאור מפורט של התביעות של התובע)</label>
          <textarea id="plaintiff-allegations" name="plaintiffallegations" rows="4" cols="50" value={formData.plaintiffallegations} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="defendant-counterclaims">Detailed Description of Defendant's Counterclaims: (תיאור מפורט של תביעות הנגד של הנתבע)</label>
          <textarea id="defendant-counterclaims" name="defendantcounterclaims" rows="4" cols="50" value={formData.defendantcounterclaims} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="reasons">Reasons for decision: (נימוקים להחלטה)</label>
          <textarea id="reasons" name="reasons" rows="4" cols="50" value={formData.reasons} onChange={handleChange} required></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="final-declarations">Final declarations: (הצהרות סופיות)</label>
          <textarea id="final-declarations" name="finaldeclarations" rows="4" cols="50" value={formData.finaldeclarations} onChange={handleChange} required></textarea>
        </div>
        
        <div className="form-group">
        <label htmlFor="signatures">Signature (חתימה)</label>
        <input type="checkbox" id="signatures" name="signatures" required />
        <label htmlFor="signatures">I confirm that this judgment is accurate and complete</label>
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>

      </form>
      
    </div>
  );
}

export default Draft;
