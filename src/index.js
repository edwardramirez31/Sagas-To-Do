/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// https://github.com/conventional-changelog/commitlint#getting-started
// https://typicode.github.io/husky/#/?id=create-a-hook
// yarn add -D husky
// yarn husky install
// yarn husky add .husky/pre-commit "yarn lint-staged"
// yarn husky add .husky/pre-commit "yarn test"
// npm install --save-dev @commitlint/config-conventional @commitlint/cli
// yarn husky add .husky/commit-msg 'npx --no-install commitlint --edit ""'
// yarn add eslint
// yarn add lint-staged
// yarn eslint --init
