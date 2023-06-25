import {Main, NotImg, NotHeader, NotDescr} from './styledComponents'

const NotFound = () => (
  <Main>
    <NotImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotHeader>Page Not Found</NotHeader>
    <NotDescr>We are sorry, the page you requested could not be found</NotDescr>
  </Main>
)

export default NotFound
