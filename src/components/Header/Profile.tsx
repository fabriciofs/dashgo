import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Fabricio Ferreira</Text>
          <Text color="gray.300" fontSize="small">
            fabriciofs@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Fabricio Ferreira"
        src="https://github.com/fabriciofs.png"
      />
    </Flex>
  );
}
