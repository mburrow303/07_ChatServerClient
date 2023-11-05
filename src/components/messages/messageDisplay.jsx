import { useEffect, useState } from 'react'


function MessagesDisplay({ currentRoomId, currentRoom, token, fetchMessages, messages }) {

  useEffect (() => {
    fetchMessages()
  }, [currentRoom])

  function smallerDate(time) {
    let date = new Date(time);
    return date.toLocaleTimeString(navigator.language, {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
      hour: '2-digit',
      minute:'2-digit'
    });
  }

  
}

export default MessagesDisplay