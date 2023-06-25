import {createContext, useState} from 'react'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

export const TopicContext = createContext({
  userName: '',
  selectedCourse: topicsList[0].displayText,
})

export const TopicsProvider = ({children}) => {
  const [userName, setUserName] = useState('')
  const [selectedCourse, setSelectedCourse] = useState(topicsList[0].id)
  const value = {
    topicsList,
    setUserName,
    setSelectedCourse,
    userName,
    selectedCourse,
  }
  console.log(userName, selectedCourse)

  return <TopicContext.Provider value={value}>{children}</TopicContext.Provider>
}
