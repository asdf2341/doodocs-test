import React, { useState } from "react";

function TemplateUploadForm({ onUpload }) {
  const [template, setTemplate] = useState(null); // Holds the HTML template
  const [variables, setVariables] = useState(null); // Holds the JSON variables

  const handleTemplateChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setTemplate(reader.result); // Store the HTML template as a string
      reader.readAsText(file);
    }
  };

  const handleVariablesChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsedVariables = JSON.parse(reader.result);
          setVariables(parsedVariables); 
        } catch (error) {
          alert("Invalid JSON file");
        }
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (template && variables) {
      // Inject missing placeholders into the template
      let updatedTemplate = template;
      variables.forEach((field) => {
        const placeholder = `{{ input "${field.id}" }}`;
        if (!updatedTemplate.includes(placeholder)) {
          updatedTemplate += `<p>${field.name}: ${placeholder}</p>\n`;
        }
      });
      onUpload(updatedTemplate, variables);
    } else {
      alert("Please upload both the HTML and JSON files.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label>Загрузить HTML-шаблон:</label>
        <input type="file" accept=".html" onChange={handleTemplateChange} />
      </div>
      <div>
        <label>Загрузите переменные JSON:</label>
        <input type="file" accept=".json" onChange={handleVariablesChange} />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
      Продолжить
      </button>
    </form>
  );
}

export default TemplateUploadForm;
