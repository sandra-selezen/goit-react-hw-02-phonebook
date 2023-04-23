import { Container } from './Layout.styled';
import bgImage from 'components/images/login-bg.png';

export const Layout = ({ children }) => {
  return <Container>
    <img src={bgImage} alt="background" className="bgImage" />
    {children}</Container>;
};