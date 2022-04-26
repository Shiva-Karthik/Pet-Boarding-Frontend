import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { MdEmojiTransportation } from "react-icons/md";
import { GiRabbit, GiWeight, GiNightSleep,GiHouse } from "react-icons/gi";
import { MdPets } from "react-icons/md";

import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

export const ShowEntity = () => {
  const { id } = useParams();
  const [entity, setEntity] = useState([]);
  console.log("entity:", entity);
  useEffect(() => {
    axios
      .get(`https://shielded-scrubland-70420.herokuapp.com/petcenter/${id}`)
      .then((res) => {
        setEntity(res.data);
      });
  }, [id]);
  return (
      <>
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Welcome !
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              {entity.centerName}
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            I know the anxiety you would have when your family has to go
            somewhere and you need someone to take care of your pet. Been there.
            That’s why I promise you that I can be a person with whom you can
            leave your pet without any worries.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          ></Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://ingridkuhn.com/themes/waggytails_html/img/services/service1.jpg"
              }
            />
          </Box>
        </Flex>
      </Stack>
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          Our Service Highlights
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={
              <Flex gap="13">
                <MdPets size={"1em"} />
                Accepted Pet Types
              </Flex>
            }
            stat={"Dog Cats Rabbits"}
            icon={
              <Flex gap={5}>
                <FaDog size={"2em"} />
                <FaCat size={"2em"} />
                <GiRabbit size={"2em"} />
              </Flex>
            }
          />
          <StatsCard
            title={
              <Flex gap="13">
                <MdPets size={"1em"} />
                Accepted Pet size
              </Flex>
            }
            icon={<GiWeight size={"2em"} />}
            stat={"1-5kg 5-10kg 10-20kg"}
          />
          <StatsCard
            title={
              <Flex gap="13">
                <MdPets size={"1em"} />
                Level of adult supervision
              </Flex>
            }
            icon={
              <Flex gap={5}>
                <Image
                  src={
                    "https://storage.googleapis.com/petbacker/images/cms/k2-item/adult-supervision.png"
                  }
                />
              </Flex>
            }
            stat={"Pets will never be left unattended"}
            />
          <StatsCard
            title={
                <Flex gap="13">
                <MdPets size={"1em"} />
                Unsupervised place at home
              </Flex>
            }
            stat={"Free roam of the house"}
            icon={<GoLocation size={"3em"} />}
          />
          <StatsCard
            title={
              <Flex gap="13">
                <MdPets size={"1em"} />
                The place your pet will sleep at night
              </Flex>
            }
            stat={"Wherever they want"}
            icon={<GiNightSleep size={"3em"} />}
            />
          <StatsCard
            title={
                <Flex gap="13">
                <MdPets size={"1em"} />
                The number of walks provided per day
              </Flex>
            }
            icon={
              <Flex gap={5}>
                <Image
                  src={
                    "https://storage.googleapis.com/petbacker/images/cms/k2-item/paw.png"
                  }
                  width="50px"
                />
              </Flex>
            }
            stat={"22"}
          />
          <StatsCard
            title={
                <Flex gap="13">
                <MdPets size={"1em"} />
                My outdoor area size
              </Flex>
            }
            icon={<BiArea size={"3em"}/>
              
            }
            stat={"Large"}
          />
          <StatsCard
            title={
                <Flex gap="13">
                <MdPets size={"1em"} />
                Emergency transport
              </Flex>
            }
            icon={<MdEmojiTransportation size={"3em"}/>
            }
            stat={"Full access outside"}
          />
          <StatsCard
            title={
                <Flex gap="13">
                <MdPets size={"1em"} />
                The type of home I stay in
              </Flex>
            }
            icon={<GiHouse size={"3em"}/>
            }
            stat={"House"}
          />
        </SimpleGrid>
      </Box>
      <Flex>
        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_03.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_02.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_01.png"
          alt="10-20kg"
        ></Image>
        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_03.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_02.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_01.png"
          alt="10-20kg"
        ></Image>
        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_03.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_02.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_01.png"
          alt="10-20kg"
        ></Image>
        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_03.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_02.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_01.png"
          alt="10-20kg"
        ></Image>
        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_03.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_02.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_01.png"
          alt="10-20kg"
        ></Image>
        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_03.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_02.png"
          alt="10-20kg"
        ></Image>

        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_01.png"
          alt="10-20kg"
        ></Image>
        <Image
          src="https://storage.googleapis.com/petbacker/images/cms/k2-item/icon_03.png"
          alt="10-20kg"
        ></Image>

        
      </Flex>
    </Container>
      <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            {/* <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton> */}
          </Stack>
        </Container>
      </Box>
    </Box>
    </>
  );
};

export const Blob = (props = IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

function StatsCard(props = StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}
