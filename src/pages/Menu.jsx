import React from 'react'
import Logo from "@/images/Logo.png"
import Image from 'next/image'
import { Box, Grid, GridItem, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import { itemCost25, itemCost30, itemCost35, itemCost40 } from '../contants/lovs'

/* pound sign = £ */

const Menu = () => {


  const Section = ({ title, category }) => {
    return (
      <>
        <Box style={{ color: "#fff" }}>
          {/* Title */}
          <Text fontSize={"30px"} letterSpacing={"5px"} my={"4rem"}>{title}</Text>
          
          <Grid templateColumns={[`repeat(1, 1fr)`, `repeat(2, 1fr)`]}  columnGap={40} rowGap={5}>

            {/* category.map() function - Loops through every index inside category array. */}
            {category?.map((item, index) => (
              <GridItem key={index}>
                <Text fontSize={"25px"}>
                  {item.name}
                  </Text>
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


      <VStack style={{ textAlign: "center" }}>
        {/* Title */}
        <Text color={'white'} fontSize={"84px"} fontWeight={"800"} letterSpacing={'1px'} textTransform={'uppercase'}>
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

export default Menu