import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;

`
const Avatar=styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #999;
`
const Details= styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color:  ${({theme})=>theme.text};
`
const Name=styled.span`
font-weight: 500;
font-size: 13px;



`
const Date=styled.span`
font-size: 12px;
font-weight: 400;
color:  ${({theme})=>theme.textsoft};
margin-left: 5px;


`
const Text=styled.p`
font-size: 12px;

`

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://p.kindpng.com/picc/s/19-195631_business-logo-design-hd-png-download.png"/>
      <Details>
        <Name>John doe  <Date>2 days ago</Date></Name>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatem voluptas nisi maiores minima dolor
             unde quisquam molestiae libero voluptatibus delectus id quia dolore est, 
            consequatur animi nihil expedita facilis accusantium.</Text>
      </Details>
    </Container>
  )
}

export default Comment
