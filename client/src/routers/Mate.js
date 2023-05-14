import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MultiRadio from '../components/MultiRadio';
import { Textarea, Button, Select, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import Man from '../img/memoji-man.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

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

const Image = styled.img`
`;

const Subtitle = styled.h3`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 18px;
margin-top: 24px;
margin-bottom: 16px;
`;

const Mate = () => {
  const [parts, setParts] = useState(null);
  const [title, setTitle] = useState(null);
  const [sex, setSex] = useState(null);
  const [textAreaInput, setTextAreaInput] = useState(null);
  const [todo, setTodo] = useState(null);
  const handlePartChange = (event) => setParts(event.target.value);
  const handleTitleChange = (event) => setTitle(event.target.value)
  const handleSexChange = (value) => setSex(value);
  const handleTextAreaChange = (event) => setTextAreaInput(event.target.value);
  const handleTodoChange = (value) => setTodo(value);


  const handleSubmit = async () => {

    try {
      const response = await axios.post('/mate_post', {
        parts: parts,
        title : title,
        sex: sex,
        textarea: textAreaInput,
        todo : todo
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
    <HomeContainer>
        <Image src={Man} width='120px' display='flex' justify-content = 'center'
 align-items= 'center'/> 
        <Title2>코코아팀은 멜로우님이 원활하게 적응하실 수 있도록<br/>
입사 시 메이트를 매칭해드리고 있어요</Title2>
    </HomeContainer>
    <Subtitle>직무를 선택해주세요</Subtitle>
    <Select placeholder='직무 선택하기' onChange={handlePartChange}>
      <option id={1} value='디자이너'>디자이너</option>
      <option id={2} value='프론트엔드 개발자'>프론트엔드 개발자</option>
      <option id={3} value='백엔드 개발자'>백엔드 개발자</option>
    </Select>
    <Subtitle>직함을 선택해주세요</Subtitle>
    <Select placeholder='직함 선택하기' onChange={handleTitleChange}>
      <option id ={1} value='리드'>리드</option>
      <option id = {2} value='팀원'>팀원</option>
      <option id = {3} value='신입'>신입</option>
    </Select>
    <Subtitle>성별을 선택해주세요</Subtitle>
    <RadioGroup onChange={handleSexChange}>
        <Stack direction='row'>
          <Radio id={1}value='1'>남성</Radio>
          <Radio id={2}value='2'>여성</Radio>
          <Radio id={3}value='3'>기타</Radio>
        </Stack>
      </RadioGroup>
    <Subtitle>메이트와 가장 하고 싶은 일이 무엇인가요?</Subtitle>
    <RadioGroup onChange={handleTodoChange}>
        <Stack direction='column'>
          <Radio id={1} value='선택지1'>선택지1</Radio>
          <Radio id={2} value='선택지2'>선택지2</Radio>
          <Radio id={3} value='선택지3'>선택지3</Radio>
          <Radio id={4} value='선택지4'>선택지4</Radio>
        </Stack>
    </RadioGroup>
    <Subtitle>메이트에게 전하고 싶은 말을 남겨주세요</Subtitle>
    <Textarea placeholder='인삿말이나 궁금한 점을 모두 남겨주세요!' onInput={handleTextAreaChange}/>
    <Button colorScheme='blue' onClick={handleSubmit}>메이트 신청하기</Button>
  </div>
  );
}

export default Mate;
