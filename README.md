# vue-npmpackage

A simple vue application to to retrieve iterative dependencies of a npm package.

## Demo

[Demo](https://vue-npmpackage.vercel.app/)


## Getting Started

- Clone repository

- Create .env file and add the following

```
VUE_APP_API_URL=__api_url__
```

- Dev command

```
npm run serve
```

- Build

```
npm run build
```

## Info

Application is based on 2 components:

- ./src/components/Package.vue (search package)
- ./src/components/PackageTree.vue (reiterative)

#### Package.vue

Search NPM Package by name and version.
First search 2 levels iterative dependencies.

#### PackageTree.vue

Reiterative component to build a complete tree view. 
Click on any dependency to get iterative dependencies (2 levels)



