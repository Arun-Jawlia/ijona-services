import React, { useState } from 'react'
import {Box, Button, Flex} from '@chakra-ui/react'

const Pagination = ({page, setPage, totalLength}) => {
  console.log(totalLength)
  return (
    <Box width='100%' >
       <Flex alignItems="center" justifyContent='center' gap='1rem'>
       <Button isDisabled={page==1} colorScheme='facebook' onClick={()=>setPage(prev=>prev-1)}>Prev</Button>
        <Button  variant='outline' >{page}</Button>
        <Button isDisabled={totalLength<5} colorScheme='facebook' onClick={()=>setPage(prev=>prev+1)}>Next</Button>
       </Flex>
    </Box>
  )
}

export default Pagination