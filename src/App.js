import styled, { createGlobalStyle, keyframes, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { buttonStyle } from "./mixin";
import theme from "./theme";

// Global Style
const GlobalStyle = createGlobalStyle`
  ${reset};

  body{
    display:flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
  }
`;

// Animation
const animation = keyframes`
  0%{
    color:red;
  }
  100%{
    color:blue;
  }
`;

const ThirdTitle = styled.h1``;

const Container = styled.div`
  ${ThirdTitle} {
    font-size: 35px;
    font-weight: bold;
    color: green;
  }
`;

const FirstTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.active ? "red" : "blue")};
`;

const SecondTitle = styled(FirstTitle.withComponent("h1"))`
  text-decoration: underline;
  animation: ${animation} 6s linear infinite both;
`;

const Button = styled.button`
  ${buttonStyle};
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.mainBg};
  font-size: ${(props) => props.theme.mainFontSize};
  border: ${(props) => props.theme.mainBorder};
`;

const ContentFirstTitle = styled.h2`
  color: ${(props) => props.theme.mainColor};
`;

const ContentSecondTitle = styled.h2`
  color: ${(props) => props.theme.subColor};
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <FirstTitle active>First</FirstTitle>
          <FirstTitle noactive>First</FirstTitle>
          <SecondTitle active>Second</SecondTitle>
          <ThirdTitle>Third</ThirdTitle>
          <Button type="button">Login</Button>
          <Button type="button">Logout</Button>
          <Button type="button">Register</Button>
          <Content>
            <ContentFirstTitle>First</ContentFirstTitle>
            <ContentSecondTitle>Second</ContentSecondTitle>
          </Content>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
