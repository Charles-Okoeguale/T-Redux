# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


TUTORIAL TERNMOLOGIES

Reducer - This is a function that returns a state. It interpretes what the action is meant for. Like the banker.
Action - This is the function in execution. It contains the type and payload. 
Action Creator - This is a specific function that is tasked with executing a particular task or updating our store
Action Type - This is the description or the name of the action. This is what the reducer reads and knows what type of function is to be performed.
Action Payload - This is the data gotten as a result of the action taken.
Dispatch - This is what performs the function
useDispatch - This is used to create a reference for the dispatch function which performs the function
Store - This is redux itself.
useSelector - this is a hook or function used to acess data from the store, basically accessing the reducer.
bindActionCreator - this is a function that binds together all the action creators. It takes in two parameters ( the actionCreator & what you want to attach to them )

