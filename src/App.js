import React, { useState } from "react";
import TemplateUploadForm from "./components/TemplateUploadForm";
import TemplateForm from "./components/TemplateForm";
import TemplatePreview from "./components/TemplatePreview";
import "./App.css";

function App() {
  const [template, setTemplate] = useState(null); // Holds the updated HTML template
  const [variables, setVariables] = useState(null); // Holds the JSON variables
  const [formValues, setFormValues] = useState({}); // Holds user input from the form

  const handleUpload = (uploadedTemplate, uploadedVariables) => {
    setTemplate(uploadedTemplate); // Set the processed HTML template
    setVariables(uploadedVariables); // Set the JSON variables
  };

  const handleFormSubmit = (values) => {
    setFormValues(values); // Update the form values for live preview
  };

  return (
    <div className="App">
      {!template || !variables ? (
        <TemplateUploadForm onUpload={handleUpload} />
      ) : (
        <div className="flex">
          <div className="w-1/3 p-4 border-r">
            <TemplateForm variables={variables} onSubmit={handleFormSubmit} />
          </div>
          <div className="w-2/3 p-4">
            <TemplatePreview template={template} values={formValues} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;



