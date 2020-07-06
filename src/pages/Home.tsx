import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  Link,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeVideo from "assets/home-video.mp4";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/WorkOutline";
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from "@material-ui/icons/StarBorder";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CloseIcon from "@material-ui/icons/Close";
import LockIcon from "@material-ui/icons/Lock";
import { useHistory } from "react-router-dom";
import { routes } from "routes/routing";
import blueGrey from "@material-ui/core/colors/blueGrey";
import ExecutivesImg from "assets/executives.jpg";
import WorkerImg from "assets/worker.jpg";
import CustomerImg from "assets/customer.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconButton from "@material-ui/core/IconButton";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Team1Img from "assets/team-1.jpg";
import Team2Img from "assets/team-2.jpg";
import Team3Img from "assets/team-3.jpg";
import Team4Img from "assets/team-4.jpg";
import Team5Img from "assets/team-5.jpg";
import Team6Img from "assets/team-6.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .slide": {
      background: "transparent",
    },
  },
  header: {
    background: "rgba(0, 0, 0, 0.3)",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "none",
  },
  headerButton: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing(4),
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
  },
  logo: {
    color: theme.palette.common.white,
  },
  videoOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
  iconServices: {
    fontSize: 80,
    color: theme.palette.secondary.dark,
    marginBottom: theme.spacing(2),
    background: blueGrey[50],
    borderRadius: "50%",
    padding: theme.spacing(2),
  },
  usBlock: {
    background: blueGrey[800],
  },
  imageUs: {
    display: "block",
    height: "auto",
    width: "100%",

    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: 0,
      left: 0,
      objectFit: "cover",
      height: "100%",
    },
  },
  card: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up("md")]: {
      maxWidth: 345,
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Home() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  function goToHome() {
    history.push(routes.home);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Box height="100vh" position="relative">
        <AppBar position="fixed" className={classes.header}>
          <Toolbar>
            <Button onClick={goToHome} className={classes.logo}>
              <Typography variant="h6" noWrap>
                CONTRATO
              </Typography>
            </Button>
            <Box ml="auto">
              <Button
                className={classes.headerButton}
                startIcon={<LockIcon />}
                onClick={handleClickOpen}
              >
                Accede
              </Button>
              <Button
                className={classes.headerButton}
                startIcon={<PersonIcon />}
                onClick={handleClickOpen}
              >
                Registrate
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <video autoPlay muted loop className={classes.video}>
          <source src={HomeVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className={`${classes.video} ${classes.videoOverlay}`} />

        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              className={classes.closeButton}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Ingresar
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recordarme"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Ingresar
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"¿No tienes una cuenta? Registrate Ahora"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </Box>

      <Container fixed>
        <Box py={15}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontWeight: 600 }}
          >
            ¿Qué ofrecemos?
          </Typography>
          <Box pb={8} />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Box
                display="flex"
                flexWrap="nowrap"
                flexDirection="column"
                alignItems="center"
              >
                <WorkIcon className={classes.iconServices} />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Trabajar
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="center"
                >
                  Haciendo lo que sabes hacer
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box
                display="flex"
                flexWrap="nowrap"
                flexDirection="column"
                alignItems="center"
              >
                <LocalAtmIcon className={classes.iconServices} />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Ser tu propio jefe
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="center"
                >
                  Trabaja en tu propio horario
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box
                display="flex"
                flexWrap="nowrap"
                flexDirection="column"
                alignItems="center"
              >
                <SearchIcon className={classes.iconServices} />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Encontrar
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="center"
                >
                  Al instante el servicio que necesitas
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box
                display="flex"
                flexWrap="nowrap"
                flexDirection="column"
                alignItems="center"
              >
                <StarIcon className={classes.iconServices} />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Calificar
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="center"
                >
                  Ve las calificaciones de tecnicos especializados
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Grid container>
        <Grid item xs={12} md={8}>
          <Box position="relative" width="100%" height="100%">
            <img
              src={ExecutivesImg}
              className={classes.imageUs}
              title="Nosotros"
              alt="Nosotros"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className={classes.usBlock}>
          <Box py={15} px={10}>
            <Typography
              variant="h4"
              gutterBottom
              style={{ fontWeight: 600, color: "white" }}
            >
              ¿Quiénes somos?
            </Typography>
            <Typography
              variant="body2"
              component="p"
              style={{ color: "white", opacity: 0.8 }}
            >
              Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
              comdo sed conseqa irure dolorn reprehenderit voluptate velit
              excepteur sint occaecats aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla ipsum pariatur excepteur sint occaecat sed
              cupidatat.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box style={{ background: "#f5f5f5" }}>
        <Container fixed>
          <Box py={15}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              style={{ fontWeight: 600 }}
            >
              Elige una de las 2 opciones para usar la aplicación
            </Typography>
            <Box pb={8} />

            <Box
              display={{ sm: "flex" }}
              flexWrap="noWrap"
              justifyContent="center"
            >
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Proveedor de servicio"
                  height="140"
                  image={WorkerImg}
                  title="Proveedor de servicio"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Proveedor de servicio
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Elige esta opcion para trabajar en lo que te gusta y sabes
                    hacer sube a la nube tus mejores trabajos y se visible en el
                    mercado en tiempo real
                  </Typography>
                </CardContent>
              </Card>

              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Proveedor de servicio"
                  height="140"
                  image={CustomerImg}
                  title="Proveedor de servicio"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cliente
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Elige esta opcion para encontrar los profesionales y mano de
                    obra especializada en eso que necesitas en este momento y en
                    tiempo real
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container fixed>
        <Box py={15}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontWeight: 600 }}
          >
            Especialistas{" "}
            <Typography
              color="secondary"
              variant="h4"
              component="span"
              style={{ fontWeight: 600 }}
            >
              cercanos
            </Typography>
          </Typography>
          <Box pb={8} />
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop
            autoPlay
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  flexWrap="noWrap"
                  alignItems="center"
                >
                  <Avatar
                    style={{ width: 160, height: 160 }}
                    alt="Luis Rojas"
                    src={Team1Img}
                  />
                  <Box mt={2}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Luis Rojas
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Gasfitero
                    </Typography>
                    <Typography variant="body2" component="p">
                      2km
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  flexWrap="noWrap"
                  alignItems="center"
                >
                  <Avatar
                    style={{ width: 160, height: 160 }}
                    alt="Carlos Robles"
                    src={Team2Img}
                  />
                  <Box mt={2}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Carlos Robles
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Electricista
                    </Typography>
                    <Typography variant="body2" component="p">
                      1.5km
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  flexWrap="noWrap"
                  alignItems="center"
                >
                  <Avatar
                    style={{ width: 160, height: 160 }}
                    alt="Mirtha Rodriguez"
                    src={Team3Img}
                  />
                  <Box mt={2}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mirtha Rodriguez
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Costurera
                    </Typography>
                    <Typography variant="body2" component="p">
                      2.5km
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  flexWrap="noWrap"
                  alignItems="center"
                >
                  <Avatar
                    style={{ width: 160, height: 160 }}
                    alt="Harold Gonzalez"
                    src={Team4Img}
                  />
                  <Box mt={2}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Harold Gonzalez
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Zapatero
                    </Typography>

                    <Typography variant="body2" component="p">
                      3km
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  flexWrap="noWrap"
                  alignItems="center"
                >
                  <Avatar
                    style={{ width: 160, height: 160 }}
                    alt="Jose Cossio"
                    src={Team5Img}
                  />
                  <Box mt={2}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Jose Cossio
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Albañil
                    </Typography>
                    <Typography variant="body2" component="p">
                      0.5km
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  flexWrap="noWrap"
                  alignItems="center"
                >
                  <Avatar
                    style={{ width: 160, height: 160 }}
                    alt="Pedro Ezquivel"
                    src={Team6Img}
                  />
                  <Box mt={2}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pedro Ezquivel
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Cerrajero
                    </Typography>
                    <Typography variant="body2" component="p">
                      0.5km
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Carousel>
        </Box>
      </Container>

      <Divider />

      <Box py={3}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="/">
            Contrato -
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
