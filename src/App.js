import { useState, useEffect, useRef } from 'react'
import "./App.css";
import Form from './components/Form'
import Message from './components/Message'

export default function App() {
  const messageBottom = useRef()
  const [state, setState] = useState({
    savedMessages: []
  });

  const getMessages = async () => {
    const response = await fetch('https://ga-message-board-backend.herokuapp.com/api/messages');
    const savedMessages = await response.json();
    setState((prevState) => ({
      savedMessages
    }));
    if ((state.savedMessages.length < savedMessages.length) || (state.savedMessages.length === 0)) {
      messageBottom.current.scrollIntoView()
    }
  }

  useEffect(() => {
    getMessages();
  });

  return (
    <>
      <h1>Message Board</h1>
      <div className='message-container'>
      {state.savedMessages.map((item,index) => (
          <Message username={item.username} content={item.message} time={item.createdAt} key={index} />
      ))}
      <div ref={messageBottom} ></div>
      </div>
  <Form />
    </>
  );
}