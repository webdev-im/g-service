"use client";

import { ChakraProvider, Image, VStack, useColorMode } from "@chakra-ui/react";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { NextSeo } from "next-seo";
import React from "react";

export default function Container() {
  const { colorMode } = useColorMode();

  return (
    <React.Fragment>
   
      <ChakraProvider>
        <VStack justify="space-between" minH="100vh">
          <Header />
          <VStack>
            <Image
              src={colorMode === "light" ? "carDay.png" : "carNight.png"}
              minH={{ md: "65vh" }}
              alt="car"
            />
          </VStack>
          <Footer />
        </VStack>
      </ChakraProvider>
    </React.Fragment>
  );
}
