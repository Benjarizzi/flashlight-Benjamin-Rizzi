import { Box, Button, Grid, Menu, MenuItem, Fade } from "@mui/material";
import * as React from 'react';
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet,Link } from "react-router-dom";

 export const Navbar = ()=>{ //Exportamos al archivo App.js
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    };
    return(
        <>
      <Box>
        <Grid container className="fondo-nav">
            <Grid item xs={3} md={3}>

    <Box sx={{display:{md:"none",xs:"contents"}}}>
            <Button id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} className="boton-hamburguesa">
                <h4 className="boton-hamburguesa">Menú</h4>
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Inicio</MenuItem>
                <MenuItem onClick={handleClose}>Shop</MenuItem>
                <MenuItem onClick={handleClose}>Nosotros</MenuItem>
            </Menu>
    </Box>

        <Box role="presentation" onClick={handleClick} sx={{display:{xs:"none",md:"contents"}}}>
            <Box className="links-nav">
            <Link underline="hover" color="inherit" href="/">
                Inicio
            </Link>
            <Link underline="hover" color="inherit" href="/">
                Shop
            </Link>
            <Link underline="hover" color="inherit" href="/">
                Nosotros
            </Link>
            </Box>
        </Box>
            </Grid>
            <Grid  item xs={6} md={6}>
                <Box className="img-nav">
                <Link to="/"><img src="" alt="LOGO" /></Link>
                </Box>
            </Grid>
            <Grid item xs={3} md={3}>
                <Box className="contenedor-carrito-numero">
                <i><CartWidget /></i>
                <p >55</p>
                </Box>                                 
            </Grid>
        </Grid>
      </Box>

      <Outlet/>

      </>
    );
     }
