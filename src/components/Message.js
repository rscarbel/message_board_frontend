const Message = (props) => {
  const convertISOtoRegularTime = (ISOdate) => {
    let date = new Date(ISOdate);
    let year = date.getFullYear()-2000;
    let month = date.getMonth() + 1;
    let time = `${date.getHours()}:${date.getSeconds()}`
    return `${month}/${year}⠀⠀⠀${time}`
  }

  return <div className='message'>
  <h3 className='messageTitle'>{props.username}</h3>
  <p>{props.content}</p>
  <p className='time'>{convertISOtoRegularTime(props.time)}</p>
  </div>
}

export default Message;