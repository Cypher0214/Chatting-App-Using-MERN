import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Show,
  VStack,
} from "@chakra-ui/react";
import React, { useState} from "react";

export const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = () => {
    setShow(!show);
  };
    
  const submitHandler = () => {};
  return (
    <VStack>
      <FormControl>
        <FormLabel id="email" isrequired="true">
          Email
        </FormLabel>
        <Input
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isrequired="true">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5">
            <Button h="1.75" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width={"100%"}
        style={{
          marginTop: 15,
        }}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};
