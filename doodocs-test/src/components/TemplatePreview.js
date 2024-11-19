import React from "react";

function TemplatePreview({ template, values }) {
  let filledTemplate = template;

  Object.entries(values).forEach(([key, value]) => {
    const regex = new RegExp(`{{ input "${key}" }}`, "g");
    filledTemplate = filledTemplate.replace(regex, value || `{{ input "${key}" }}`);
  });

  // Function to download the updated HTML file
  const downloadUpdatedFile = () => {
    const blob = new Blob([filledTemplate], { type: "text/html" }); // Create a Blob with the updated HTML content
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "updated_template.html"; // Set the default file name
    link.click(); // Trigger the download
  };

  return (
    <div className="preview-container">
      <div
        dangerouslySetInnerHTML={{ __html: filledTemplate }}
        className="border p-4 bg-white shadow mb-4"
      ></div>
      <button
        onClick={downloadUpdatedFile}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Сохранить обновленный файл
      </button>
    </div>
  );
}

export default TemplatePreview;


