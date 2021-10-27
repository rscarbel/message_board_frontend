const Message = (props) => {
  const convertISOtoRegularTime = (ISOdate) => {
    let date = new Date(ISOdate);
    let am = true
    let year = date.getFullYear()-2000;

    let month = date.getMonth() + 1;
    if (month.toString().length === 1) {
      month = `0${month}`
    }
    let day = date.getDate()
    if (day.toString().length === 1) {
      day = `0${day}`
    }

    let hour = date.getHours()
    if (hour > 12) {
      am = false;
      hour = hour-12
    }
    if (hour === 0) {
      hour = 12
    }

    let minute = date.getMinutes()
    if (minute.toString().length === 1) {
      minute = `0${minute}`
    }

    let time = `${month}/${day}/${year}    ${hour}:${minute}`

    if (am) {
      time = `${time} am`
    } else {
      time = `${time} pm`
    }

    return time
  }

  return <div className='message'>
  <h3 className='messageTitle'>{props.username}</h3>
  <p>{props.content}</p>
  <p className='time'>{convertISOtoRegularTime(props.time)}</p>
  </div>
}

export default Message;