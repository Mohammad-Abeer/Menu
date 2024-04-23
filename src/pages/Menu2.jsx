import React from 'react'
import Logo from "@/images/Logo.png"
import Image from 'next/image'
import { Box, Flex, Grid, GridItem, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import { itemCost25, itemCost30, itemCost35, itemCost40 } from './lovs'
import { grey } from '@mui/material/colors'

/* pound sign = £ */

const Menu2 = () => {


  const Section = ({ title, category }) => {
    return (
      <>
        <Box style={{ color: "#fff" }} width={["95%", "85%", "75%", "60%"]} margin={"auto"}>
          {/* Title */}
          <Text textAlign={'center'}  fontSize={["18px","22px","26px","30px"]} letterSpacing={"5px"} my={"4rem"}>{title}</Text>
          
          <Grid templateColumns={[`repeat(1, 1fr)`, `repeat(1, 1fr)`]} rowGap={5}>

            {/* category.map() function - Loops through every index inside category array. */}
            {category?.map((item, index) => (
              <GridItem key={index}>
                <Flex direction={'column'}>
                  <Text fontSize={["16px","18px","22px",,"25px"]}>{item.name}</Text>
                  <Text color={"grey"} fontStyle={'italic'} fontSize={["10px","12px","14px","16px"]}>{item.desc}</Text>
                </Flex>
                </GridItem>
            ))}
          </Grid>
        </Box>

        {/* Silver line below every section */}
        <StackDivider mt={"40px"} border={"6px solid #31363F"} className='divider'/>
      </>
    )
  }


  return (
    <Box my={"10rem"} style={{  position: "relative" }}>

      <Box display={["none", "none", "block"]} style={{ position: "absolute", left: "10px", }}>
        <Image alt='logo' src={Logo} style={{ width: "8rem", height: "auto" }} />
      </Box>


      <VStack width={"100%"}>
        {/* Title */}
        <Text 
          textAlign={'center'} 
          color={'white'} 
          fontSize={["54px","64px","74px","84px"]} 
          fontWeight={"800"} 
          letterSpacing={'1px'} 
          textTransform={'uppercase'}
        >
          Shisha
        </Text>

        <Section title={"Al Fakhir - £25.00"} category={itemCost25} />
        <Section title={"Premium - £30.00"} category={itemCost30} />
        <Section title={"Savacco - £35.00"} category={itemCost35} />
        <Section title={"Savanna - £40.00"} category={itemCost40} />
      </VStack>
    </Box>
  )
}

export default Menu2