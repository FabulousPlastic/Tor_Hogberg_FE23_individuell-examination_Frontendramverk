Work in progress!

# My Portfolio
This is a school asignment to build a single-page application (SPA) with React to serve as a digital CV/portfolio.

## Features

- About Me section (Who)
- Projects section with GitHub integration (What)
- Contact form (Write)

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

## Technologies

- React
- Redux
- React Router
- Axios
  
## Hooks

-useState----------------------------------------------------------------------------

The `useState` hook is used for managing local state within a functional component. It allows you to add state variables to your functional components. When the state updates, the component re-renders to reflect those changes.

In this project, `useState` is used to manage the state of the contact form, such as the user's name, email, and message.

Example:
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  

-useEffect---------------------------------------------------------------------------

The `useEffect` hook lets you perform side effects in function components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes.

In this project, `useEffect` is used to read the saved theme from `localStorage` when the component mounts and to update the `body` class based on the current theme.

Example:
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    dispatch(setTheme(savedTheme));
  }
}, [dispatch]);

useEffect(() => {
  document.body.className = theme;
}, [theme]);


-useSelector-------------------------------------------------------------------------

The useSelector hook is used to extract data from the Redux store state. It takes a selector function as an argument and returns the selected state.

In this project, useSelector is used to get the current theme from the Redux store.

Example:
const theme = useSelector((state) => state.theme.value);


-useDispatch-------------------------------------------------------------------------

The `useDispatch` hook is used to dispatch actions to the Redux store. It returns a reference to the dispatch function from the Redux store.

In this project, `useDispatch` is used to dispatch the action to toggle the theme. (dark/light mode)

Example:
const dispatch = useDispatch();
dispatch(toggleTheme());


