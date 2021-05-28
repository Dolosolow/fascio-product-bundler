import { Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const Footer = ({ text }: { text: string }) => (
  <Link to="google.com" target="_blank">
    <Text
      borderBottomWidth="2px"
      my={5}
      textAlign="center"
      fontSize="sm"
      fontWeight="bold"
      color="inherit"
      opacity="0.4"
      _hover={{ color: "teal", opacity: 1 }}
    >
      {text}
    </Text>
  </Link>
);

export default Footer;
