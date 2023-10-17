import React, { useState } from 'react';
import './style.css';
import { Height } from '@mui/icons-material';

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [plantInfo, setPlantInfo] = useState(null);
  const [isScanning, setIsScanning] = useState(false);


  const handleScanButtonClick = () => {
    const scanEffectElement = document.getElementById('scanEffect');
    scanEffectElement.classList.toggle('active');

    // Simulate a delay for the scan effect (adjust the duration as needed)
    setTimeout(() => {
      // Simulating fetching plant information for demonstration purposes
      const samplePlantInfo = {
        name: 'Lavender (Lavandula angustifolia)',
        commonName: 'Lavender',
        scientificName: 'Lavandula angustifolia',
        family: 'Sample Family',
        geo:' Lavender is native to the Mediterranean region, including countries such as France, Spain, Italy, Greece, and parts of northern Africa. It has also been naturalized in various other regions around the world.',
       
        allinfo:'Medicinal Uses: Lavender is known for its calming and relaxing properties. It is often used to reduce anxiety, improve sleep, and soothe minor burns or insect bites. Lavender oil is also used in aromatherapy',

        allinfo1:'Lavender has anti-inflammatory and antiseptic properties, making it beneficial for treating minor burns, insect bites, and skin irritations. Lavender oil can be diluted and applied topically to the affected area to reduce redness, swelling, and pain',
        

        allinfo2:'Lavender possesses antibacterial properties, which can make it useful in preventing infections and aiding wound healing. It often used as a natural alternative to conventional antiseptics',

        allinfo3:'Medicinal Uses',
        
        medicinalUses: ['Anti-inflammatory and Antiseptic', 'Anti-inflammatory and Antiseptic'],
        precautions: ['Sample Precaution 1', 'Sample Precaution 2'],
      };
      setPlantInfo(samplePlantInfo);
    }, 4000); // Simulated 2-second delay for the scan effect
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
      // Simulating fetching plant information for demonstration purposes
      const samplePlantInfo = {
        name: 'Sample Plant',
        description: 'This is a sample plant description.',
      };
      setIsScanning(false);
      setPlantInfo(samplePlantInfo);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="container">




      <div className="sidebar">
      <button>Get started</button>
        <button>Ai chatbot</button>
        
        <button>User info</button>
        <button>previous scans</button>
        <button>logout</button>
      </div>
      <div className="content">
        <div className="upload-section">
          <label htmlFor="imageUpload" className="upload-button">
            Upload Plant Image
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        {uploadedImage && (
          <div className="image-display" >
            <img   src={uploadedImage} alt="Uploaded Plant" />
          </div>
        )}
       <button onClick={handleScanButtonClick} className="scan-button">
          Scan Image
        </button>
        {/* <div id="scanEffect" className="scan-effect">
          Placeholder for the scan effect
          {/* <img src={uploadedImage} alt="Uploaded Plant" /> */}
        {/* </div> */} 


        <div id="scanEffect" className={`scan-effect ${isScanning ? 'active' : ''}`}>
  <div className="scan-line" />
</div>


        {plantInfo && (
          <div className="plant-info">
            <h2>{plantInfo.name}</h2>
            <div className="medical-info">
              <div className="info-item">
                <strong>Common Name:</strong> {plantInfo.commonName}
              </div>
              <div className="info-item">
                <strong>Scientific Name:</strong> {plantInfo.scientificName}
              </div>
              <div className="info-item">
                <strong>Family:</strong> {plantInfo.family}
              </div>

              <div className="info-item">
                <strong>geographical Origin:</strong> {plantInfo.geo}
              </div>
              <hr />
               <h2>{plantInfo.allinfo3}</h2>
              <p>{plantInfo.allinfo}</p>
              <p>{plantInfo.allinfo1}</p>

<p>{plantInfo.allinfo2}
</p>

               {/* <div className="info-item">
                <strong>Medicinal Uses:</strong>
                <ul>
                  {plantInfo.medicinalUses.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>  */}
              {/* <div className="info-item">
                <strong>Precautions:</strong>
                <ul>
                  {plantInfo.precautions.map((precaution, index) => (
                    <li key={index}>{precaution}</li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Home;
