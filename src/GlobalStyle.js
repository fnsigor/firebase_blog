import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    font-size: 62.5%;
}

* {
  margin: 0;
  padding:0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  border: none;
}

body {
    background-color: #f6fcff;
    font-family: "Montserrat", sans-serif;
    height: 100vh;
    margin: none;
}

h1{
        font-size: 2.6rem;
        margin-bottom: 2rem;
}

.container {
    min-height: 74vh;
    margin-bottom: 5rem;
}

input::placeholder,
textarea::placeholder {
    font-family: "Montserrat", sans-serif;
}

input:focus,
textarea:focus {
    outline: none;
}

a,
nav button {
    text-decoration: none;
    background-color: transparent;
    border: none;
    color: #000;
    transition: 0.4s;
    font-size: 1em;
    cursor: pointer;
    font-family: "Montserrat", sans-seri;
}

a:hover,
nav button:hover {
    color: #bbb;
}

/* form styles */
form {
    max-width: 40%;
    margin: 0 auto;
}

label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
}

label span {
    margin-bottom: 0.3em;
    font-weight: bold;
    text-align: left;
}

input,
textarea {
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.8em 0em;
    background-color: transparent;
}

input::placeholder,
textarea::placeholder {
    color: #aaa;
}

.btn {
    background-color: #1a8918;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    width: 120px;
    font-weight: bold;
    border: none;
    padding: 10px 15px;
    font-size: 1em;
    border-radius: 5px;
}

.btn.btn-dark {
    background-color: #000;
}

.btn.btn-outline {
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
    padding: 7px 30px;
}

.btn:hover {
    background-color: #0f730c;
    color: #fff;
}

.btn.btn-outline:hover {
    background-color: #000;
}

.btn.btn-danger:hover {
    background-color: #dc3545;
}

button[disabled] {
    background-color: #aaa;
}

.container .error {
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 5px;
    border-radius: 5px;
}

.active {
    background-color: #000;
    color: #fff;

    border-radius: 5px;
}
`

export default GlobalStyle;