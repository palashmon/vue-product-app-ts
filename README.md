# vue-product-app-ts

Building a searchable product data table using Vue + TypeScript

### Steps

- Start With A Mock
- Break The UI Into A Component Hierarchy
- Build A Static Version in React
- Identify The Minimal (but complete) Representation Of UI State
- Identify Where Your State Should Live
- Add Inverse Data Flow

A simple product list display app with simple user interaction. Components hierarchy is like:

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
