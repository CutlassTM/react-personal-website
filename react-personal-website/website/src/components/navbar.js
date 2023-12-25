import { Box, Icon, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { UserCircle } from "phosphor-react";
import { Link } from "react-router-dom";
import { PATH_WEBPAGE } from "../routes/paths";

// ------------

const Navbar = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box
                p={2} // 2 * 8 (mui internal value) = 16px
                sx={{
                    backgroundColor: "#F8FAFF",
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    // height: 100,
                    width: "100vw",

                }}
            >
                <Stack
                    sx={{ height: "100%" }}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >

                    <Link to={PATH_WEBPAGE.general.home}
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}
                    >
                        <Stack
                            direction={"row"}
                            spacing={2}
                            sx={{ height: "100%" }}
                            alignItems={"center"}
                        >
                            <Icon sx={{ width: 32, height: 32, }}>
                                <UserCircle size={32} />
                            </Icon>
                            <Typography variant="h5">
                                SAN RAJ
                            </Typography>


                        </Stack>
                    </Link>

                    <Stack>

                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Experience" component={Link} to={PATH_WEBPAGE.general.experience} />
                            <Tab label="Work" component={Link} to={PATH_WEBPAGE.general.work} />
                            <Tab label="Playground" component={Link} to={PATH_WEBPAGE.general.playground} />
                            <Tab label="Contact" component={Link} to={PATH_WEBPAGE.general.contact} />
                        </Tabs>
                    </Stack>













                </Stack>


            </Box>








        </>
    )
}


// -----------

export default Navbar;