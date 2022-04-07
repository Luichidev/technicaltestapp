import { useEffect, useState } from 'react'
import UserComments from '../components/UserComments'
import getUserCommnets from '../services/getUserComments'

export default function ListOfComments() {
  const [experiences, setExperiences] = useState([])

  useEffect(function () {
    getUserCommnets().then((comment) => setExperiences(comment || []))
  }, [])

  return experiences.map(
    ({ text, comments, lastName, firstName, picture, id }) => {
      return (
        <UserComments
          text={text}
          name={firstName}
          lastname={lastName}
          image={picture}
          comments={comments}
          key={id}
        />
      )
    }
  )
}
