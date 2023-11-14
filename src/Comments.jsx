import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'
const Container=styled.div``

const NewComment=styled.div`
display: flex;
align-items: center;
gap: 10px;

`

const Avatar=styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #999;
`

const Input=styled.input`
border: none;
border-bottom: 1px solid ${({ theme }) => theme.Soft};
background-color: transparent;
outline: none;
padding: 5px;
width: 100%;
`

function Comments() {
  return (
    <Container>
     <NewComment>
      <Avatar src="https://p.kindpng.com/picc/s/19-195631_business-logo-design-hd-png-download.png"/>
      <Input  placeholder='Add a comment...'/>
     </NewComment>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
    </Container>
  )
}

export default Comments
