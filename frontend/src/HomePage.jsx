import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Text } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Login } from "../src/Components/Authentication/Login"
import { Signup } from "../src/Components/Authentication/Signup";

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
        color={"black"}
      >
        <Tabs variant="soft-rounded">
          <TabList mb={"1lem"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><Login/></TabPanel>
            <TabPanel><Signup/></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage