## Styled Components

#### App.js

```javascript
import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { mixinSubtitle } from "./mixin";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

// ThemedCssFunction인 css를 이용하면 mixin처럼 재사용할 수 있는 스타일을 만들 수 있다.
// 아래에서 지정한 스타일들을 다른 컴포넌트 안에서 ${titleBlock}으로 불러와서 스타일을 줄 수 있다.
const titleBlock = css`
  border: 5px solid green;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const SmallText = styled.h5``;

const Container = styled.div`
  height: 100vh;
  background-color: lightgray;

  ${SmallText}:nth-of-type(1) {
    color: purple;
    font-size: 50px;
  }
  ${SmallText}:nth-of-type(3) {
    color: coral;
    font-size: 50px;
  }
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  width: 100px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.success ? "lightgreen" : "crimson")};
  animation: ${(props) => (props.success ? successAnimation : failAnimation)} 10s linear infinite;

  &:active,
  &:focus {
    outline: none;
  }
`;

// Button.withComponent('a')를 통해 a태그인 Anchor컴포넌트를 생성하고 Button컴포넌트의 스타일을 Anchor컴포넌트에 확장한다.
const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
  color: ${(props) => props.theme.mainColor};
`;

// attrs()메서드를 이용해 input등의 태그에 속성을 추가하거나 변경할 수 있다.
const Input = styled.input.attrs({
  required: true,
  placeholder: "Hello2",
})`
  border: 5px solid red;
`;

const Title = styled.h2`
  ${titleBlock}
`;

const Subtitle = styled.h3`
  ${mixinSubtitle}
`;

// styled-components에서 keyframes함수를 이용해 애니메이션을 만들 수 있다.
// keyframes은 컴포넌트가 아니기 때문에 소문자로 만들어준다.
const successAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform:rotate(360deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;

const failAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform:rotate(-360deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;

// 만약 styled-components에서 자주 쓰는 스타일을 변수처럼 지정해놓고 가져와서 쓰고 싶다면 ThemeProvider를 사용할 수 있다.
// ThemeProvider를 다른 모든 컴포넌트의 부모로서 묶어주고 ThemeProvider에 theme속성에 변수 파일들을 모아놓은 파일을 넣어주면 된다.
// color: ${(props) => props.theme.mainColor}: ThemeProvider에 theme를 지정해줬다면 사용하고자 하는 스타일을 prop.theme.변수명을 통해 불러와서 사용할 수 있다.
function App() {
  return (
    <Container>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Button success>Success</Button>
        <Button fail>Fail</Button>

        <Anchor href="http://google.com">Google</Anchor>
        <Anchor href="http://naver.com">Naver</Anchor>

        <Input placeholder="Hello"></Input>

        <Title>Title1</Title>
        <Title>Title2</Title>
        <Title>Title3</Title>

        <Subtitle>Subtitle1</Subtitle>
        <Subtitle>Subtitle2</Subtitle>
        <Subtitle>Subtitle3</Subtitle>

        <SmallText>SmallText</SmallText>
        <SmallText>SmallText</SmallText>
        <SmallText>SmallText</SmallText>
      </ThemeProvider>
    </Container>
  );
}

export default App;
```

#### theme.js

```javascript
const theme = {
  mainColor: "lightblue",
  successColor: "lightgreen",
  failColor: "crimson",
};

export default theme;
```

#### mixin.js

```javascript
import { css } from "styled-components";

export const mixinSubtitle = css`
  font-size: 80px;
  color: red;
`;
```
