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
        margin-bottom: 1.5rem;
        text-align: center;
}

h1 + p{
    font-size: 2rem;
        margin-bottom: 6rem;
        text-align: center;
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

a {
    text-decoration: none;
    background-color: transparent;
    border: none;
    color: #000;
    font-size: 1rem;
    cursor: pointer;
    font-family: "Montserrat", sans-seri;
}

a:hover {
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
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

label span {
    margin-bottom: 0.3rem;
    font-weight: bold;
    text-align: left;
}

input,
textarea {
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.8rem 0rem;
    background-color: transparent;
    font-size: 1.6rem;
    margin-bottom: 2rem;
}

textarea{
    height: 200px;
    resize: none;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
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
    width: 12rem;
    font-weight: bold;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    font-size: 1.4rem;
    transition: 0.2s;
}

.btn.btn-dark {
    background-color: #000;
}

.btn.btn-outline {
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
    padding: .7rem 3rem;
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
    padding: .5rem;
    border-radius: 5px;
}

.active {
    background-color: #000 !important;
    color: #fff !important;
}

.tagList {
  margin-bottom: 1.2rem;
  display: flex;
  flex-wrap: wrap;
}

.tags p {
  margin-right: 0.5rem;
  font-size: 1.4rem;
}

.tags span {
  font-weight: bold;
}

@media (max-width: 700px) {
    .container {
        padding-inline: 2rem;
    }

    h1{
        font-size: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    h1 + p{
        font-size: 1.8rem;
        margin-bottom: 6rem;
        text-align: center;
    }

    .btn {
       
        width: 10rem;
        padding: 1rem 1.5rem;
        font-size: 1.4rem;
    }
}

`

export default GlobalStyle;