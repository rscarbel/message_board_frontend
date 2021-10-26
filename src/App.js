import { useCallback, useState, useEffect } from 'react'
import "./App.css";
import Form from './components/Form'
import Message from './components/Message'

export default function App() {

  const [state, setState] = useState({
    savedMessages: []
  });





  const getMessages = useCallback (async () => {
    const response = await fetch('https://ga-message-board-backend.herokuapp.com/api/messages');
    const savedMessages = await response.json();

    setState((prevState) => ({
      savedMessages
    }));
  })

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <h1>Message Board</h1>
      {state.savedMessages.map((item) => (
          <Message username={item.username} content={item.message} />
      ))}
  <Form />
    </>
  );
}