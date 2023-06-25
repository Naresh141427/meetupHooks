import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {TopicContext} from '../../context/topicContext'

import Header from '../Header'

import {
  MainSection,
  Heading,
  Para,
  ButtonContainer,
  Img,
  RegisterButton,
  FinalHeading,
  FinalPara,
} from './styledComponents'

const MeetUp = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  const {userName, selectedCourse} = useContext(TopicContext)

  const renderIntialHome = () => (
    <MainSection>
      <Heading>Welcome to meetup</Heading>
      <Para>Please register for the topic</Para>
      <ButtonContainer>
        <Link to="/register">
          <RegisterButton onClick={onRegister}>Register</RegisterButton>
        </Link>
      </ButtonContainer>
      <Img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </MainSection>
  )

  const renderFinalHome = () => (
    <MainSection>
      <FinalHeading>Hello {userName}</FinalHeading>
      <FinalPara>Welcome to {selectedCourse}</FinalPara>
      <Img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </MainSection>
  )

  return (
    <>
      <Header />
      {userName.length > 0 ? renderFinalHome() : renderIntialHome()}
    </>
  )
}

export default MeetUp
