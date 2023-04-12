import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Text } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const HomePage = props => {
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"3"}
        background={"white"}
        w={"100%"}
        margin={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontFamily={"heading"} fontSize={"28px"} color={"black"}>
          Chatting App
        </Text>
      </Box>
      <Box
        background={"white"}
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
        color={'black'}
      >
        <Tabs variant="soft-rounded" >
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage