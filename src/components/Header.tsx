import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri';
export function Header() {
    return (
        <Flex
            w="100%"
            as="header"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >
                dashgo
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bgColor="gray.800"
                borderRadius="full"
            >
                <Input
                    color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{
                        color: 'gray.400'
                    }}

                />

                <Icon as={RiSearchLine} fontSize="20px" />

            </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                <HStack
                    spacing="8"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserLine} fontSize="20" />
                </HStack>

                <Flex
                    align="center"
                >
                    <Box mr="4" textAlign="right">
                        <Text>Emanuel Moura</Text>
                        <Text color="gray.300" fontSize="small">emanuelaraujo_14@hotmail.com</Text>
                    </Box>

                    <Avatar size="md" name="Emanuel Moura" src="https://avatars.githubusercontent.com/u/94456436?v=4"/>
                </Flex>
            </Flex>
        </Flex>
    );
}