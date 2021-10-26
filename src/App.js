import { useState, useEffect } from "react";
import "./App.css";
import Message from './components/Message'

export default function App() {

  const [state, setState] = useState({
    messages: [],
    newMessage: {
      skill: "",
      level: "3"
    }
  });

  function handleChange(event) {
    setState(({ message, newMessage }) => ({
      message,
      newMessage: {
        ...newMessage,
        [event.target.name]: event.target.value
      }

    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await fetch('https://ga-message-board-backend.herokuapp.com/api/message', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(state.newMessage)
    });

    getMessages();

    setState((prevState) => ({
      ...prevState,
      newMessage: {
        username: '',
        message: ''
      }
    }));
  }

  async function getMessages() {
    const response = await fetch('https://ga-message-board-backend.herokuapp.com/api/messages');
    const messages = await response.json();

    setState((prevState) => ({
      messages,
      newMessage: prevState.newMessage
    }));
  }

  useEffect(() => {
    getMessages();
  }, []);


  return (
    <section>
      <h1>Message Board</h1>
      {state.message.map((item) => (
          <Message username={item.username} content={item.message} />
      ))}
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input name='username' type='text' value={state.newMessage.skill} onChange={handleChange} />
        </label>
        <label>
          <span>Message</span>
          <textarea name='username' value={state.newMessage.skill} onChange={handleChange} />
        </label>
        <button>Send</button>
      </form>
    </section>
  );
}