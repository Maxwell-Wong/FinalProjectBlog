/**
 * @author {Jingyun Huang}
 * @date 2023/5/24
 */

import React from "react";
import {EmailIcon, LinkIcon, MoonIcon, SunIcon,} from "@chakra-ui/icons";
import {
    FaGithub,
    FaHome,
    FaPager,
    FaTape
} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";
import {uploadFile} from '../Api/uploadFile'
import {
    Badge,
    Box,
    Center,
    Flex,
    Icon,
    IconButton,
    Image,
    Text,
    Tooltip,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    chakra,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,

} from "@chakra-ui/react";
import {FiList} from "react-icons/fi";
import {motion} from "framer-motion";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const RouteChange = (opt) => {
    let GithubPage = "https://github.com";
    let Email = "";
    let University_home_page = "https://www.sysu.edu.cn";
    if (opt === "github") {
        window.open(GithubPage, "_blank", "noopener,noreferrer");
    } else if (opt === "email") {
        window.open(Email, "_blank", "noopener,noreferrer");
    } else if (opt === "uiversity_home_page") {
        window.open(University_home_page, "_blank", "noopener,noreferrer");
    }
};

function NavItem(props) {
    // Color Settings
    const hoverBgColor = useColorModeValue("whiteAlpha.900", "blackAlpha.700");
    const hoverTextColor = useColorModeValue("gray.900", "gray.200");
    const selectedBGColor = useColorModeValue("whiteAlpha.900", "gray.700")
    const selectedColor = useColorModeValue("blue.700", "blue.300")
    const location = useLocation()


    const {icon, children, path} = props;
    return (
        <Flex
            align="center"
            px="4"
            py="3"
            cursor="pointer"
            _hover={{
                bg: hoverBgColor,
                color: hoverTextColor,
            }}
            fontWeight="600"
            transition=".15s ease"
            bgColor={path === location.pathname && selectedBGColor}
            color={path === location.pathname && selectedColor}
            boxShadow={path === location.pathname && 'sm'}
        >
            {icon && (
                <Icon
                    ml="2"
                    mr='4'
                    boxSize="6"
                    as={icon}
                />
            )}
            {children}
        </Flex>
    );
}

/**
 * @author {小倪酱}
 * @date 2023/5/31
 * @description 上传表单
 */
function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    let curfile;
    let curTitle;
    let date;
    let curTag;
    function handleFileSelect(event) {
        curfile = event.target.files[0];
        console.log(curfile);
    }
    function handleTitle(event) {
        curTitle = event.target.value;
        console.log(curTitle);
    }
    function handleTag(event) {
        curTag = event.target.value;
        console.log(curTag);
    }
    function handleDate(event) {
        date = event.target.value;
        console.log(date);
    }
    function transferFiles() {
        console.log(curfile)
        let formData = new FormData();
        // 添加文件到 FormData 对象中
        formData.append('file', curfile);

        // 添加其他数据到 FormData 对象中
        formData.append('title', curTitle);
        formData.append('date', date);
        formData.append('tag', curTag);
        uploadFile("uploadFile/",'POST',formData);
    }
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          上传
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>上传表单</DrawerHeader>
  
            <DrawerBody>
              title:<Input placeholder='article title' onChange={handleTitle}/>
              tag:<Input placeholder='article tag,使用空格分开'  onChange={handleTag}/>
              date:<Input placeholder='date' type='date' onChange={handleDate}/>
              <Input type='file' accept=".md" onChange={handleFileSelect}/>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={transferFiles}>确认上传</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


function SidebarContent(props) {
    // Color Settings
    const bgColor = useColorModeValue("whiteAlpha.700", "blackAlpha.600");

    const {...rest} = props

    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            bg={bgColor}
            backdropBlur='10px'
            w={{base: 'full', md: '60'}}
            {...rest}
        >
            <Center px={10} py={5}>
                <Image src="logo192.png" alt="DS3P" borderRadius='full' border='3px solid white'/>
            </Center>
            <Flex direction="column" fontSize="sm" alignItems="center" justifyContent="center" >
                <Text fontSize="lg" textAlign="center" fontWeight="bold" mb={4}>
                    Welcome to<br/>My Scientific Blog
                </Text>
                <Text fontSize="sm" textAlign="center" color="gray.500">
                    Explore our amazing features and tools to unleash the power of data science!

                </Text>
                <DrawerExample/>
                
            </Flex>
        </Box>
    )
}

function Header(props) {
    // Color Settings
    const bgColor = useColorModeValue("whiteAlpha.600", "blackAlpha.600");

    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg={bgColor}
            backdropBlur='10px'
            h="14"
            textAlign="center"
            {...props}
        >
            {props.children}
        </Flex>
    )
}

function Footer() {
    return (
        <Flex
            w="full"
            bg="#edf3f8"
            _dark={{
                bg: "#3e3e3e",
            }}
            alignItems="center"
            justifyContent="center"
            boxShadow='2xl'
        >
            <Flex
                w="full"
                as="footer"
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
                align="center"
                justify="space-between"
                px="6"
                py="2"
                bg="white"
                _dark={{
                    bg: "gray.800",
                }}
            >
                <Badge fontSize='sm'  colorScheme="cyan">
                    @2023 SYSU UI Designer
                </Badge>

                <chakra.p
                    py={{
                        base: "2",
                        sm: "0",
                    }}
                >
                    What doesn't kill you makes you stronger
                </chakra.p>
                <SideBarLayout/>
            </Flex>
        </Flex>

    )
}


export default function BlogLayout(props) {
    const mark = useColorModeValue(
        "linear-gradient(0deg, #F6F8FA 20%, rgba(246, 248, 250, 0) 100%)",
        "linear-gradient(0deg, #1A202C 20%, #1A202C 100%)"
    );


    const {isOpen, onOpen, onClose} = useDisclosure()
    const {colorMode, toggleColorMode} = useColorMode();

    return(
        <Box
            bgImg='linear-gradient(60deg, #FFFFFF 0%, rgba(200, 61, 255, 0.2) 30%, #4AC1A240 80%, rgba(255, 255, 255, 0.36) 100%)'
            minH="100vh"
        >
            <Box bgImg={mark} h='100vh'>
                <SidebarContent borderRight='1px solid #00000016' display={{base: 'none', md: 'block'}}/>
                <Box ml={{base: 0, md: 60}} display='flex' flexDirection='column' h='full'>
                    <Header position='sticky' top='0'>
                        <IconButton onClick={onOpen} icon={<FiList/>} display={{base: 'inline-flex', md: 'none'}}/>
                        <Flex
                            direction="row"
                            fontSize="sm"
                        >
                            <Link to="/">
                                <NavItem path='/'
                                         icon={FaHome}>Home</NavItem>
                            </Link>
                            <Link to="/search">
                                <NavItem path='/archive'
                                         icon={FaPager}>Archive</NavItem>
                            </Link>
                            <Link to="/analysis">
                                <NavItem path='/tags'
                                         icon={FaTape}>Tags</NavItem>
                            </Link>


                        </Flex>
                        <Flex
                            justify="flex-end"
                            align="center"
                            width="50%"
                        >
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <SearchIcon color="gray.300" />
                                </InputLeftElement>
                                <Input
                                    type="text"
                                    placeholder="Search..."
                                    borderRadius="full"
                                    borderWidth={1}
                                    borderColor="gray.300"
                                    _placeholder={{ color: "gray.500" }}
                                    _focus={{
                                        outline: "none",
                                        borderColor: "blue.500",
                                        boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.6)",
                                    }}
                                />
                            </InputGroup>
                        </Flex>


                        <Box>
                            {/*<AnimatePresence exitBeforeEnter initial={false} mode="wait">*/}
                            <motion.div
                                style={{display: "inline-block"}}
                                key={useColorModeValue("light", "dark")}
                                initial={{y: -20, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{y: 20, opacity: 0}}
                                transition={{duration: 0.2}}
                            >
                                <Tooltip
                                    label={colorMode === "dark" ? "Light Mode" : "Dark Mode"}
                                    placement="auto"
                                >
                                    <IconButton
                                        aria-label="Toggle theme"
                                        colorScheme={useColorModeValue("purple", "orange")}
                                        icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
                                        onClick={toggleColorMode}
                                        marginRight="5px"
                                        variant="ghost"
                                    />
                                </Tooltip>
                            </motion.div>

                        </Box>
                    </Header>
                    <Box display='flex' flexDirection='column' flex='1' overflowY='hidden'>
                        <Box as="main"
                             flex='1'
                             h='full'
                             overflowY='auto'
                        >
                            {props.children}
                        </Box>

                    </Box>
                    <Footer/>
                </Box>
            </Box>

        </Box>

    )

}

function SideBarLayout(props) {
    return (
        <Box display='flex' justifyItems='center'>
            <Tooltip label="Github" placement="auto-start">
                <IconButton
                    colorScheme="tail"
                    icon={<FaGithub/>}
                    marginRight="5px"
                    variant="ghost"
                    onClick={() => RouteChange("github")}
                />
            </Tooltip>

            <Tooltip label="Email" placement="auto-start">
                <IconButton
                    colorScheme="tail"
                    icon={<EmailIcon/>}
                    marginRight="5px"
                    variant="ghost"
                    onClick={() => RouteChange("email")}
                />
            </Tooltip>

            <Tooltip label="Home Page" placement="auto-start">
                <IconButton
                    colorScheme="tail"
                    icon={<LinkIcon/>}
                    marginRight="5px"
                    variant="ghost"
                    onClick={() => RouteChange("uiversity_home_page")}
                />
            </Tooltip>

        </Box>

    );
};


