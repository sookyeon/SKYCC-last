import React, { useState, useRef, useEffect }  from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Button, CardBody, Heading, Text,  Stack } from '@chakra-ui/react'
import FileUploader from '../components/FileUploader';


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding : 1rem;
`;

const Title = styled.h2`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  color: #000000;
  text-align : center;
`;

const Title2 = styled.h2`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 64px;
  color: #000000;
  margin-top: 48px;
`

const Image = styled.img`
  height: 240px;
`;

const Subtitle = styled.h3`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* or 184% */

text-align: center;

color: #000000;
`;

const CardContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 20px;
`
const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
    <div>
    <HomeContainer>
      <Title>멜로우 님, 코코아에 오신 걸 환영해요</Title>
      <FileUploader></FileUploader>
      <Subtitle>달콤함을 위한 혁신을 이루어나가는<br/> 코코아 팀의 여정을 멜로우 님과 함께하게 되어 기뻐요</Subtitle>
    </HomeContainer>
    <CardContainer>
    <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://static.vecteezy.com/system/resources/previews/007/819/525/original/glass-coffee-isolated-design-3d-objects-different-free-vector.jpg'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>음료를 간편하게</Heading>
        <Text>
        코코아 크루는 우리의 일상을 더 좋게 만들고 싶은 멋진 동료입니다. 다양한 생각을 자유롭게 나누며, 언제나 놀라운 결과를 만들어내죠.
        </Text>
      </Stack>
    </CardBody>
  </Card>
  <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://cdn3d.iconscout.com/3d/premium/thumb/plastic-glass-7972549-6398486.png?f=webp'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>팀을 위한 일</Heading>
        <Text>
          지금 당신이 맡은 일에 필요한 일이라면, 언제라도 함께 할 준비가 되어 있는 동료들입니다.
        </Text>
      </Stack>
    </CardBody>
  </Card>
    </CardContainer>
</div>
  );
}

export default Home;
