# React Template With Redux
This React template is built using React's CLI, create-react-app. Redux has been integrated and set up with some initial scripts.

```
npm install
```

## Configurations
- SCSS Support: Don't need to add CSS files. Webpack will not generate CSS files either. This app reads .scss files.
- Path alias for dependency injection
- '@' is used for the main 'src' directory
- Do not import packages or components with relative paths. Import them using the alias. Ex: import Component from '@/components/Component';
- Alias added for node module 'Bulma' the Flexbox CSS Framework. import Bulma from 'bulma';

## Add A New Alias
1. Navigate to config/webpack.config.dev.js
2. Find the 'alias' object
3. Add a new property and value...

```javascript
'@': path.resolve('src'),
```

Your alias object should look like this...

```javascript
alias: {
  '@': path.resolve('src'),
  'react-native': 'react-native-web'
}
```
You can add as many as you need (don't go crazy with alias though...).

## Component Naming Conventions
For readability, please follow the naming convention for components.

__NOTE:__ All of the component's files live inside a sub-directory with the component name (camelCase). Any styles that are needed for that component live in the 'styles' folder in the components directory.

- Component.jsx (container)
- ComponentItem.JSX

__Example__
- Dashboard.jsx
- DashboardNewsFeed.jsx
- DashboardQuickSettings.jsx
- DashboardRecentlyViewed.jsx

It's also worth noting that it's best practice to name the import variable and stylesheet the same as the component.

```javascript
import Component from '@/components/Component/Component';
import AnotherComponent from '@/components/anotherComponent/AnotherComponent';
import Base from '@/styles/'
import Styles from '@/components/Component/styles/Component'
```