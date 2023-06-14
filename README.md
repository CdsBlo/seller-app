# Oki doki

> Belle app des familles

Install dependencies:

```shell
yarn
```

Start the dev api server (powered by [JSON Server](https://github.com/typicode/json-server/blob/master/README.md))

```shell
yarn start:api
```

Start the dev server:

```shell
yarn start
```

Make your changes🐌
Commit you feature

```shell
git add .a
yarn commit
```

Ship it 👀

## Folder strcture

We tend tu ose the Atomic Design approch whil writing our components

```
/ src
    /contexts
    /ds
        /atoms
        /molecules
        /pages
        /templates
    /hooks
```

For all testing data, we use the ['/src/fixtures'](/src/fixtures)

## Testing

We will tend to use anytime/anywhere our custom `render` method to represent the context or our application.

This `render` method is defined in: `/src/test-utils.js`

## User context

It wil be in charge of usr tahtt **and** sales channel selection

```javascript
const user = {isLoggedIn: true, salesChannel: "guid"}
const App = ({user}) => (
    <UserContextProvider user={user}>
        <Routes/>
    </UserContextProvider>
);

const Route = {()} => {
    const {isLoggedIn, salesChannel} = UserContext.useUserContext();

    if (!isLoggedIn) return <Redirect />;

    return <p>{salesChannel}</p>
}
```

## Powered by CRA

[CRA Documentation](./docs/CRA.md)

## Bonus:

https://my-json-server.typicode.com/CdsBlo/seller-app/master/products

## TODO

- [x] faire une TODO
- [] faire fonctionner le contexte de tests
- [] use Context / useReducer
- [] Array#reduce
- [] Storybook
