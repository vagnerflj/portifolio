
import Avatar from "../../../../assets/images/img.png";
import {Box, Container, Grid, styled, Typography} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton.tsx";
import theme from "../../../../theme.ts";
import {AnimatedBackground} from "../../../../components/AnimatedBackground/AnimatedBackground.tsx";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            padding: "100px",

        },
        [theme.breakpoints.up("md")]: {
            padding: "0px",
    }

    }))

    const StyledImg = styled("img")(() => ({
        width: "90%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.secondary.main}`,
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position="relative" textAlign={"center"}>
                                <StyledImg src={Avatar}/>
                            </Box>

                        </Box>

                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Vagner Ferreira</Typography>
                        <Typography color="secondary" variant="h2" textAlign="center">I'm Software Programmer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">

                                <StyledButton onClick={()=> console.log("download")}>
                                    <DownloadIcon/>
                                    <Typography>
                                        Download CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={()=> console.log("contact")}>
                                    <EmailIcon/>
                                    <Typography>
                                    Contact me</Typography>
                                    </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
