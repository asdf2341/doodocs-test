import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function TemplateForm({ variables, onSubmit }) {
  const initialValues = variables.reduce((acc, field) => {
    acc[field.id] = ""; // Инициализируем все поля пустыми значениями
    return acc;
  }, {});

  // Создаем схему валидации на основе JSON
  const validationSchema = Yup.object(
    variables.reduce((acc, field) => {
      let validator = Yup.string();

      // Условие: если поле "Фамилия" или "Имя", то разрешаем только буквы
      if (field.name === "Фамилия" || field.name === "Имя") {
        validator = validator.matches(
          /^[A-Za-zА-Яа-яЁё\s]+$/,
          "Поле может содержать только буквы"
        );
      }

      if (field.attrs?.has_min) {
        validator = validator.min(field.attrs.min, `Минимум ${field.attrs.min} символов`);
      }
      if (field.attrs?.has_max) {
        validator = validator.max(field.attrs.max, `Максимум ${field.attrs.max} символов`);
      }
      if (field.attrs?.numeric) {
        validator = validator.matches(/^\d+$/, "Только цифры");
      }
      if (field.is_required) {
        validator = validator.required("Это поле обязательно");
      }

      acc[field.id] = validator;
      return acc;
    }, {})
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema} // Добавляем схему валидации
      onSubmit={(values) => onSubmit(values)}
      enableReinitialize
    >
      {({ errors, touched, handleChange }) => (
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
              {errors[field.id] && touched[field.id] && (
                <div className="text-red-500 text-sm">{errors[field.id]}</div>
              )}
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

