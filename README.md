## Eureka 2.0
Eureka is a web based, social networking platform (similar to Reddit and Facebook) where users can create and share text based posts. It allows users to search posts by hashtags, bookmark a post, see threaded comments, like and comment on other users post.
[🚀 Live on web](https://eureka-v2.web.app) and [Github repos](https://github.com/hassanyakef/eureka_ver_2).

Here is the **tech stack** I used for this project:

- [Material-UI](https://material-ui.com/) 
- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Firebase](https://firebase.google.com/)
- [Redux form](https://redux-form.com/8.3.0/)
- Other tools (moment, react-html-parser, react-infinite-scroller, react-redux-toaster, ck-editor).

### How to run it locally?
- ``` npm install ```
- ``` npm run start ```

#### **keys_dev.js** needs to be created (inside src/app/config directory):
```
module.exports = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}
```