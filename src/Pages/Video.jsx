import { AddTaskOutlined, ReplyOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Comments from '../Comments'
import Card from '../Components/Card'
const Container = styled.div`
    display: flex;
    gap: 25px;
    
`
const Content = styled.div`
    
    flex: 5;
`
const VideoWrapper = styled.div`
    
    
`
const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color:${({ theme }) => theme.text};
`
const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    
    
`
const Button = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
 `
const Info = styled.span`
margin-top:2px;
color: ${({ theme }) => theme.textSoft};;
    
    
`
const Recommendation = styled.div`
    
    flex: 2;
    padding-right 45px;
`
const Hr = styled.hr`
  border:0.5px ${({ theme }) => theme.Soft};
margin-top: 15px 0px;
`
const Channel = styled.div`
display: flex;
justify-content: space-between;
`
const ChannelInfo = styled.div`
display: flex;
gap: 20px;
`
const ChannelDetail = styled.div`
display: flex;flex-direction:column;
color:  ${({theme})=>theme.text};
`
const ChannelName = styled.span`
font-weight: 500;
`
const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom:20px;
color:  ${({theme})=>theme.textSoft};
font-size: 12px;
`
const Discription = styled.p`
font-size: 14px;
`
const ChannelImg = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #999;`

const Subscribe = styled.button`
background-color: #cc1a00;
font-weight: 500;
color:white;
border: none;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;


`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe width="885" height="498" src="https://www.youtube.com/embed/yIaXoop8gl4"
            title="React Video Sharing App UI Design | Youtube UI Clone with React" frameborder="0" allow="accelerometer; autoplay;
       clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>

          <Info>47675547 views.June 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined />Like
            </Button>
            <Button>
              <ThumbDownOutlined />Dislike
            </Button>
            <Button>
              <ReplyOutlined />Share
            </Button>
            <Button>
              <AddTaskOutlined />Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImg src="https://p.kindpng.com/picc/s/19-195631_business-logo-design-hd-png-download.png" />
            <ChannelDetail>
              <ChannelName>YouTubeLight</ChannelName>
              <ChannelCounter>200k Subscriber</ChannelCounter>
              <Discription>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Id error enim consequuntur nam eveniet quia hic omnis ut,
                 quasi veniam minus ab ipsum esse sed temporibus dolorum est! 
                 Praesentium, animi!</Discription>
            </ChannelDetail>
          </ChannelInfo>
            <Subscribe>
              Subscribe
            </Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
       <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video
