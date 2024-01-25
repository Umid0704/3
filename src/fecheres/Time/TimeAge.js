import React from 'react'
import { parseISO,formatDistanceToNow } from 'date-fns'
export default function TimeAge({time}) {
    let timeAgo = ''
    if(time){
        let date = parseISO(time)
        let timestamp = formatDistanceToNow(date)
        timeAgo = `${timestamp} ago`
    }
  return (
    <div>
      {timeAgo}
    </div>
  )
}
