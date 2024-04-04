import React from 'react';
import "./Preview.scss";
import { useLocation } from 'react-router';
import Civil from "../../judgementmodels/Civil.jsx";
import Administrative from "../../judgementmodels/Administrative.jsx";
import Appellate from '../../judgementmodels/Appellate.jsx';
import Constitutional from '../../judgementmodels/Constitutional.jsx';
import Criminal from '../../judgementmodels/Criminal.jsx';
import FamilyCourt from '../../judgementmodels/FamilyCourt.jsx';
import ReactDOMServer from 'react-dom/server';



 const Preview = () => {

    const { modelName } = useLocation().state;
    const location = useLocation();
    const formData = location.state.formData;


    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([generateFileContent()], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${modelName.replace(/\s/g, '')}_Copy.txt`;
        document.body.appendChild(element);
        element.click();
    };

    const generateFileContent = () => {
        switch (modelName) {
            case "Civil Judgment":
                return generateCivilContent();
            case "Administrative Judgment":
                return generateAdministrativeContent();
            case "Appellate Judgment":
                return generateAppellateContent();
            case "Constitutional Judgment":
                return generateConstitutionalContent();
            case "Criminal Judgment":
                return generateCriminalContent();
            case "Family Court Judgment":
                return generateFamilyCourtContent();
            default:
                return '';
        }
    };

    // const generateCivilContent = () => {
    //     const civilComponent = <Civil {...formData} />;
    //     const civilContentWithTags = ReactDOMServer.renderToStaticMarkup(civilComponent);
    //     // Remove HTML tags using regex
    //     const civilContentWithoutTags = civilContentWithTags.replace(/<[^>]+>/g, '\n');
    //     return civilContentWithoutTags;
    // };
    
    const generateContentFromComponent = (component) => {
        const contentWithTags = ReactDOMServer.renderToStaticMarkup(component);
        // Remove HTML tags using regex
        const contentWithoutTags = contentWithTags.replace(/<[^>]+>/g, '\n');
        return contentWithoutTags;
    };
    
    const generateCivilContent = () => {
        const civilComponent = <Civil {...formData} />;
        return generateContentFromComponent(civilComponent);
    };
    
    const generateAdministrativeContent = () => {
        const administrativeComponent = <Administrative {...formData} />;
        return generateContentFromComponent(administrativeComponent);
    };
    
    const generateAppellateContent = () => {
        const appellateComponent = <Appellate {...formData} />;
        return generateContentFromComponent(appellateComponent);
    };
    
    const generateConstitutionalContent = () => {
        const constitutionalComponent = <Constitutional {...formData} />;
        return generateContentFromComponent(constitutionalComponent);
    };
    
    const generateCriminalContent = () => {
        const criminalComponent = <Criminal {...formData} />;
        return generateContentFromComponent(criminalComponent);
    };
    
    const generateFamilyCourtContent = () => {
        const familyCourtComponent = <FamilyCourt {...formData} />;
        return generateContentFromComponent(familyCourtComponent);
    };
    


    const handleShare = () => {
        const content = generateFileContent(); // Generate the content based on the selected judgment
        navigator.clipboard.writeText(content)
            .then(() => {
                alert('Content copied to clipboard successfully!');
            })
            .catch((error) => {
                console.error('Error copying content to clipboard:', error);
                alert('Failed to copy content to clipboard. Please try again.');
            });
    };
    
    


   

  return (
    <div className='preview'>
     
      <div className="judgment-copy-content">
       
        {/* <h1>{modelName} Preview</h1> */}
       

       
        {modelName === "Civil Judgment" && <Civil plaintiffid={formData.plaintiffid} plaintiffstatus={formData.plaintiffstatus} plaintiffrepresentative={formData.plaintiffrepresentative} defendantid={formData.defendantid} defendantstatus={formData.defendantstatus} defendantrepresentative={formData.defendantrepresentative} facts={formData.facts} plaintiffallegations={formData.plaintiffallegations} defendantcounterclaims={formData.defendantcounterclaims} reasons={formData.reasons} finaldeclarations={formData.finaldeclarations}/>}
        {modelName === "Administrative Judgment" && <Administrative plaintiffid={formData.plaintiffid} plaintiffstatus={formData.plaintiffstatus} plaintiffrepresentative={formData.plaintiffrepresentative} defendantid={formData.defendantid} defendantstatus={formData.defendantstatus} defendantrepresentative={formData.defendantrepresentative} plaintiffallegations={formData.plaintiffallegations} defendantcounterclaims={formData.defendantcounterclaims} reasons={formData.reasons} finaldeclarations={formData.finaldeclarations} />}
        {modelName === "Appellate Judgment" && <Appellate plaintiffid={formData.plaintiffid} plaintiffstatus={formData.plaintiffstatus} plaintiffrepresentative={formData.plaintiffrepresentative} defendantid={formData.defendantid} defendantstatus={formData.defendantstatus} defendantrepresentative={formData.defendantrepresentative} plaintiffallegations={formData.plaintiffallegations} defendantcounterclaims={formData.defendantcounterclaims} reasons={formData.reasons} finaldeclarations={formData.finaldeclarations} />}
        {modelName === "Constitutional Judgment" && <Constitutional plaintiffid={formData.plaintiffid} plaintiffstatus={formData.plaintiffstatus} plaintiffrepresentative={formData.plaintiffrepresentative} defendantid={formData.defendantid} defendantstatus={formData.defendantstatus} defendantrepresentative={formData.defendantrepresentative} plaintiffallegations={formData.plaintiffallegations} defendantcounterclaims={formData.defendantcounterclaims} reasons={formData.reasons} finaldeclarations={formData.finaldeclarations} />}
        {modelName === "Criminal Judgment" && <Criminal plaintiffid={formData.plaintiffid} plaintiffrepresentative={formData.plaintiffrepresentative} defendantid={formData.defendantid} defendantrepresentative={formData.defendantrepresentative} facts={formData.facts} plaintiffallegations={formData.plaintiffallegations} defendantcounterclaims={formData.defendantcounterclaims} reasons={formData.reasons} finaldeclarations={formData.finaldeclarations} />}
        {modelName === "Family Court Judgment" && <FamilyCourt plaintiffid={formData.plaintiffid} plaintiffrepresentative={formData.plaintiffrepresentative} defendantid={formData.defendantid} defendantstatus={formData.defendantstatus} defendantrepresentative={formData.defendantrepresentative}  plaintiffallegations={formData.plaintiffallegations} defendantcounterclaims={formData.defendantcounterclaims} reasons={formData.reasons} finaldeclarations={formData.finaldeclarations} />}

      </div>

      {/* Buttons for download, share, and collaborate actions */}
      <div className="action-buttons">
        <button onClick={handleDownload}>Download</button>
        <button onClick={handleShare}>Share</button>
      </div>
    </div>
  );
}



export default Preview;
