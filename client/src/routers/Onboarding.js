import React from 'react';
import styled from 'styled-components';
import FileUploader from '../components/FileUploader';
import { Text } from '@chakra-ui/react'


const Title2 = styled.h2`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #000000;
margin-top: 48px;
text-align: center;
`;

const UploaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 32px;
`


const Onboarding = () => {
  return (
    <div>
      <Title2>우리 팀의 온보딩 문서를 살펴보고 팀원과 직접 얘기를 나눠요</Title2>
      <UploaderContainer>
        <FileUploader/>
      </UploaderContainer>
    </div>
  );
}

export default Onboarding;
