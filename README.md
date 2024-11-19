<<<<<<< HEAD

# **Doodocs Test Project**

### **Описание проекта**
Doodocs — это веб-приложение, предназначенное для автоматизации создания персонализированных документов. С его помощью пользователи могут загрузить HTML-шаблон и JSON-файл с данными, заполнить форму и получить готовый документ. Приложение удобно для использования в образовании, HR, юриспруденции и других сферах, где требуются персонализированные документы.

---

### **Функциональность**
1. **Загрузка файлов**  
   - Пользователь загружает HTML-шаблон, определяющий структуру документа.  
   - JSON-файл содержит переменные, такие как имя, фамилия и идентификатор.

2. **Генерация формы**  
   - Приложение автоматически генерирует форму на основе данных из JSON-файла.  

3. **Превью документа**  
   - Предпросмотр документа обновляется в реальном времени по мере ввода данных в форму.  

4. **Скачивание документа**  
   - Пользователь может сохранить обновленный HTML-документ с заполненными данными.

---

### **Как работает проект?**

1. **TemplateUploadForm**  
   Компонент для загрузки HTML-шаблона и JSON-файла.  
   Код для чтения файлов:
   ```javascript
   reader.onload = () => setTemplate(reader.result);
   ```
   JSON-файл обрабатывается, проверяется на валидность и преобразуется в массив объектов.

2. **TemplateForm**  
   На основе JSON-файла генерируется динамическая форма с помощью библиотеки **Formik**. Это упрощает управление состоянием и валидацией.

3. **TemplatePreview**  
   Обновление документа происходит через замену placeholders, таких как `{{ input "id" }}`, на введённые пользователем значения:
   ```javascript
   Object.entries(values).forEach(([key, value]) => {
     const regex = new RegExp(`{{ input "${key}" }}`, "g");
     filledTemplate = filledTemplate.replace(regex, value || `{{ input "${key}" }}`);
   });
   ```

---

### **Технологии**
- **React** — библиотека для создания пользовательских интерфейсов.
- **Formik** — библиотека для управления формами.
- **CSS Flexbox** — для адаптивного дизайна.
- **HTML/JSON** — для загрузки шаблонов и данных.

---

### **Установка и запуск**
1. **Склонируйте репозиторий:**
   ```bash
   git clone https://github.com/username/doodocs-test.git
   ```
2. **Перейдите в директорию проекта:**
   ```bash
   cd doodocs-test
   ```
3. **Установите зависимости:**
   ```bash
   npm install
   ```
4. **Запустите приложение:**
   ```bash
   npm start
   ```
5. Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

---

### **Использование**
1. Загрузите HTML-шаблон и JSON-файл через форму.
2. Нажмите «Продолжить», чтобы сгенерировать форму.
3. Заполните поля формы. Документ обновится в реальном времени.
4. Скачайте готовый документ, нажав кнопку «Сохранить обновленный файл».

---

### **Пример JSON-файла**
```json
[
  {
    "id": "name",
    "type": "INPUT_TEXT",
    "name": "Имя",
    "is_required": true
  },
  {
    "id": "surname",
    "type": "INPUT_TEXT",
    "name": "Фамилия",
    "is_required": true
  }
]
```

### **Пример HTML-шаблона**
```html
<html>
  <body>
    <p>Имя: {{ input "name" }}</p>
    <p>Фамилия: {{ input "surname" }}</p>
  </body>
</html>
```

---

### **Стили**
- Дизайн построен с использованием Flexbox.
- **Центр экрана** — превью документа.
- **Правая часть** — динамическая форма.

---

### **Примеры использования**
1. **Образование:** Генерация сертификатов.
2. **HR:** Создание персонализированных офферов.
3. **Юридические документы:** Автоматизация договоров.

---

=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 4353dee (Initial commit)
