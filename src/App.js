
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { lightTheme,darkTheme } from "./utills/Theme";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import SignIn from "./Pages/SignIn";

const Container=styled.div`
display: flex;
`
const Main=styled.div`
flex: 7;
background-color:  ${({theme})=>theme.bg};

`
const Wrapper=styled.div`
padding: 22px 80px;
`

function App() {
  const[darkMode,setDarkMode]=useState(true)
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
      
  <Container>
  <Router>

    <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>

    <Main>
    <Navbar />
      <Wrapper>
     <Routes>
      <Route path="/"/>
      <Route index element={<Home/>}/>
      <Route path="signin" element={<SignIn/>}/>
      <Route path="video"  element={<Video/>}/>
     

     </Routes>
      </Wrapper>
    </Main>
  </Router>
  </Container>
</ThemeProvider>
  
  );
}

export default App;
