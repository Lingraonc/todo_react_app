# todo_react_app

После загрузки проекта нужно создать `.env` файл в `server/` с данными MongoDB

```env

MONGO_SECRET=mongodb+srv://youre_data_here

```

Создать `.env` файл в `frontend/` с BASE_URL сервера

```env

REACT_APP_BASE_URL=http://localhost:5000/

```

Произвести установку `npm install` в `server/` и `frontend/` и запустить

```js

cd server/
node index

--------------

cd frontend/
npm run start

```
