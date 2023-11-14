import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container=styled.div`
width: ${(props)=>props.type!=="sm" && "360px"};
margin-bottom: ${(props)=>props.type==="sm" ? "10px":"45px"};
cursor: pointer;
display: ${(props)=>props.type==="sm" && "flex"};
gap: 10px;
`
const Img=styled.img`
width: 100%;
height:  ${(props)=>props.type==="sm" ? "120px":"202px"};
background-color: #999;
flex: 0.5;
`
const Details=styled.div`
display: flex;
margin-top: ${(props)=>props.type!=="sm" && "16px"};
gap:12px;
flex: 0.5;
`
const ChannelImg=styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;
display: ${(props)=>props.type==="sm" && "none"};;
`
const Text=styled.div``
const Title=styled.h1`
font-size:14px;
font-weight: 500 bold;
color:  ${({theme})=>theme.text};;
`
const ChannelName=styled.h2`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
margin: 9px 0px;
`
const Info=styled.div``



function Card({type}) {
  return (
      <Link to="video" style={{textDecoration:"none"}}>

    <Container type={type}>
  <Img type={type} src="https://img.freepik.com/premium-photo/business-team-training-listening-meeting-concept_53876-38033.jpg?w=1380"/>
   <Details type={type}>
    <ChannelImg type={type} src="https://p.kindpng.com/picc/s/19-195631_business-logo-design-hd-png-download.png"/>
    <Text>
      <Title>Test Vidoe</Title>
      <ChannelName>
        YouTubeLite
      </ChannelName>
       <Info>
        567,656 view .1 day ago
       </Info>
    </Text>
   </Details>
    </Container>
      </Link>
  )
}

export default Card
