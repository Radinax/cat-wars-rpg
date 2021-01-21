import React, { FC } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Texts } from "../../utils/text";

interface Props {
  name: string;
  strength: number;
  magic: number;
  pDefense: number;
  mDefense: number;
  speed: number;
  imgUrl: string;
  imgAlt?: string;
}

export const Card: FC<Props> = ({
  name,
  strength,
  magic,
  pDefense,
  mDefense,
  speed,
  imgUrl,
  imgAlt,
}) => {
  const { attributes } = Texts;

  const stats = (text: string, number: number) => (
    <Box
      d="flex"
      alignItems="flex-center"
      justifyContent="center"
      flexDirection="row"
    >
      <Box w="50%" pr={4}>
        {text}
      </Box>
      <Box w="12.5%">{number}</Box>
    </Box>
  );

  return (
    <Box
      boxShadow="lg"
      maxW="16rem"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
    >
      <Image src={imgUrl} alt={imgAlt} sizes="250px" />
      <Box d="flex" justifyContent="center">
        {name}
      </Box>
      <Box p={4}>
        {stats(attributes.str, strength)}
        {stats(attributes.mag, magic)}
        {stats(attributes.pDef, pDefense)}
        {stats(attributes.mDef, mDefense)}
        {stats(attributes.speed, speed)}
      </Box>
    </Box>
  );
};

export default Card;
