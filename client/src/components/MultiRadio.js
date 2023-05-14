import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react';

function MultiRadio() {
    const [value, setTodo] = React.useState(null);
    const handleTodoChange = (event) => setTodo(event.target.value);
    return (
      <RadioGroup onChange={handleTodoChange}>
        <Stack direction='column'>
          <Radio id={1}value='1'>선택지1</Radio>
          <Radio id={2}value='2'>선택지2</Radio>
          <Radio id={3}value='3'>선택지3</Radio>
          <Radio id={4}value='4'>선택지4</Radio>
        </Stack>
      </RadioGroup>
    )
  }

  export default MultiRadio;