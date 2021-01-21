import React, { useEffect, FC, ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Texts } from "../../utils/text";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  // const [, set] = React.useState();
  useEffect(() => {}, []);

  const title = (
    <Box>
      <Text fontSize="6xl">{Texts.title}</Text>
    </Box>
  );

  const description = (
    <Box>
      <Text fontSize="lg">{Texts.description}</Text>
    </Box>
  );

  return (
    <Box>
      {title}
      {description}
      {children}
    </Box>
  );
};

export default Layout;
