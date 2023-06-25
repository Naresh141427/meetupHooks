import {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {TopicContext} from '../../context/topicContext'
import Header from '../Header'

import {
  MainSection,
  FormContainer,
  RegisterImg,
  Form,
  Input,
  Label,
  Select,
  Option,
  FormHeader,
  RegisterNowButton,
  ErrorMsg,
} from './styledComponents'

const Register = () => {
  const history = useHistory()
  const {
    topicsList,
    setUserName,
    setSelectedCourse,
    userName,
    selectedCourse,
  } = useContext(TopicContext)
  const [errMsg, setErrMsg] = useState('')

  const onChangeName = event => {
    setUserName(event.target.value)
  }

  const onChangeCourse = event => {
    setSelectedCourse(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()

    if (userName.trim() === '') {
      setErrMsg('Please enter your name')
    } else {
      history.replace('/')
    }
  }

  return (
    <>
      <Header />
      <MainSection>
        <FormContainer>
          <RegisterImg
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <Form onSubmit={onSubmitForm}>
            <FormHeader>Let us join</FormHeader>
            <Label htmlFor="name">NAME</Label>
            <Input
              type="text"
              id="name"
              placeholder="Your name"
              onChange={onChangeName}
              value={userName}
            />
            <Label htmlFor="courses">TOPICS</Label>
            <Select
              id="courses"
              value={selectedCourse}
              onChange={onChangeCourse}
            >
              {topicsList.map(topic => (
                <Option name={topic.id} value={topic.id} key={topic.id}>
                  {topic.displayText}
                </Option>
              ))}
            </Select>
            <RegisterNowButton type="submit">Register Now</RegisterNowButton>
            {errMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
          </Form>
        </FormContainer>
      </MainSection>
    </>
  )
}

export default Register
