@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

/* Responsive Styles */
@media (max-width: 768px) {
    nav ul li {
        display: block;
        margin: 10px 0;
    }

    header {
        text-align: left;
    }
}

@media (max-width: 480px) {
    header {
        padding: 10px;
    }

    main {
        padding: 10px;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
}

html {
    font-size: 62.5%;
}

body {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-color: black;
    color: white;
}

header {
    margin-top: 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 9%;
    background-color: transparent;
    filter: drop-shadow(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.logo {
    font-size: 3rem;
    color: #b74b4b;
    font-weight: 800;
    cursor: pointer;
    transition: 0.5s ease;
}

.logo:hover {
    transform: scale(1.1);
}

nav a {
    font-size: 1.8rem;
    color: white;
    margin-left: 4rem;
    font-weight: 500;
    transition: 0.3s ease;
    border-bottom: 3px solid transparent;
}

nav a:hover,
nav a.active {
    color: #b74b4b;
    border-bottom: 3px solid #b74b4b;
}

@media (max-width: 995px) {
    nav {
        position: absolute;
        display: none;
        top: 0;
        right: 0;
        width: 40%;
        border-left: 3px solid #b74b4b;
        border-bottom: 3px solid #b74b4b;
        border-bottom-left-radius: 2rem;
        padding: 1rem solid;
        background-color: #161616;
        border-top: 0.1rem solid rgba(0,0,0,0.1);
    }

    nav.active {
        display: block;
    }

    nav a {
        display: block;
        font-size: 2rem;
        margin: 3rem 0;
    }

    nav a:hover,
    nav a.active {
        padding: 1rem;
        border-radius: 0.5rem;
        border-bottom: 0.5rem solid #b74b4b;
    }
}

section {
    min-height: 100vh;
    padding: 5rem 9% 5rem;
}

.home {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;
    background-color: black;
}

.home .home-content h1 {
    font-size: 6rem;
    font-weight: 700;
    line-height: 1.3;
}

span {
    color: #b74b4b;
}

.home-content h3 {
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.home-content p {
    font-size: 1.6rem;
}

.home-img {
    border-radius: 50%;
}

.home-img img {
    position: relative;
    width: 32vw;
    border-radius: 50%;
    box-shadow: 0 0 25px solid #b74b4b;
    cursor: pointer;
    transition: 0.2s linear;
}

.home-img img:hover {
    font-size: 1.8rem;
    font-weight: 500;
}

.social-icons a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background-color: transparent;
    border: 0.2rem solid #b74b4b;
    font-size: 2rem;
    border-radius: 50%;
    margin: 3rem 1.5rem 3rem 0;
    transition: 0.3s ease;
    color: #b74b4b;
}

.social-icons a:hover {
    color: black;
    transform: scale(1.3) translateY(-5px);
    background-color: #b74b4b;
    box-shadow: 0 0 25px #b74b4b;
}

.btn {
    display: inline-block;
    padding: 1rem 2.8rem;
    background-color: black;
    border-radius: 4rem;
    font-size: 1.6rem;
    color: #b74b4b;
    letter-spacing: 0.3rem;
    font-weight: 600;
    border: 2px solid #b74b4b;
    transition: 0.3s ease;
    cursor: pointer;
}

.btn:hover {
    transform: scale3d(1.03);
    background-color: #b74b4b;
    color: black;
    box-shadow: 0 0 25px #b74b4b;
}

.typing-text {
    font-size: 34px;
    font-weight: 600;
    min-width: 280px;
}

/* Floating Chatbot Button (Left Side) */
#chatbot-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: #007BFF;
    color: white;
    font-size: 24px;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
}

#chatbot-button:hover {
    background: #0056b3;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
}

/* Chatbot Window (Left Side) */
#chatbot-container {
    position: fixed;
    bottom: 80px;
    left: 20px;
    width: 350px;
    background: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: none;
    flex-direction: column;
}

/* Chatbot Header */
#chatbot-header {
    background: #007BFF;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
}

/* Chat Box */
#chat-box {
    height: 300px;
    overflow-y: auto;
    padding: 10px;
    background: #fafafa;
    border-radius: 5px;
}

/* Input Area */
.input-container {
    display: flex;
    padding: 10px;
    background: white;
}

input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background: #007BFF;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background: #0056b3;
}

/* Tawk.to Chat Widget (Right Side) */
#tawkto-chat {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    }
