import { useCallback, useState, useEffect } from 'react'
const Form = (props) => {

  const [state, setState] = useState({
      username: "",
      message: ""
    });

  function handleChange(event) {
    setState(({ messages, newMessage }) => ({
      ...messages,
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
      body: JSON.stringify(state)
    });

    setState((prevState) => ({
        username: '',
        message: ''
    }));
  }
  return <>
  <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input name='username' type='text' value={state.username} onChange={handleChange} />
        </label>
        <label>
          <span>Message</span>
          <textarea name='username' value={state.message} onChange={handleChange} />
        </label>
        <button>Send</button>
      </form>
  </>
}

export default Form;