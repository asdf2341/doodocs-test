// src/components/TemplateForm.js
import React from "react";
import { Formik, Form, Field } from "formik";

function TemplateForm({ variables, onSubmit }) {
  const initialValues = variables.reduce((acc, field) => {
    acc[field.id] = ""; 
    return acc;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)} 
      enableReinitialize
    >
      {({ values, handleChange }) => (
        <Form className="form-container">
          {variables.map((field) => (
            <div key={field.id} className="mb-4">
              <label className="block text-sm font-medium mb-1">{field.name}</label>
              <Field
                name={field.id}
                type="text"
                placeholder={`Введите ${field.name}`}
                className="w-full p-2 border rounded"
                onChange={handleChange} 
              />
            </div>
          ))}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Сохранить
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default TemplateForm;

