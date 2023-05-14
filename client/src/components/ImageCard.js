import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 20px;
`
const Image = styled.img`
  /* styles for the image */
`;

const ImageCard = () => {
    return (
      <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>금융을 간편하게</Heading>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with a
          sprinkle of vintage design.
        </Text>
      </Stack>
    </CardBody>
  </Card>
    )
}
export default ImageCard;
