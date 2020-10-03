import React, { useState, useEffect } from "react";
import "../styles/Provando.css";
import Boton from './Boton';

import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';

// TERMINAN LOS ESTILOS PARA LA TABLA

const Provando = () => {
    // LISTA DE USUARIOS
    const [usuarios, setUsuarios] = useState([]);

    const obtenerUsuarios = async () => {
        // obtiene los usuarios desde el backend
        const response = await fetch("https://mateify.herokuapp.com/users");
        const dataUsers = await response.json();
        setUsuarios(dataUsers);
    };

    useEffect(() => {
        // Esto se ejecuta al renderizar la pagina por primera vez
        obtenerUsuarios();
    }, []);
    // esto obtiene las canciones favoritas de los usuarios
    const handleClickUsers = async (e, usuario) => {
        e.preventDefault();
    };

    // LISTA DE CANCIONES
    const [songs, setSongs] = useState([]);

    const obtenerSongs = async () => {
        const res = await fetch('https://mateify.herokuapp.com/songs');
        const dataSongs = await res.json();
        setSongs(dataSongs);
    }

    useEffect(() => {
        //obtiene las canciones al renderizar la pag
        obtenerSongs();
    })

    return (
        <div className="div_box-page">
            <div>
                <Grid container className="grid_container">
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                        <Grid
                            item
                            xs={5}
                            md={5}
                            lg={5}
                            lx={5}
                        >
                            <TableContainer className="App">
                                <div className="div__header">
                                    <h2>Lista de usuarios</h2>
                                </div>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Age</TableCell>
                                        <TableCell>Mail</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableHead>
                                    {usuarios.length > 0 ? (
                                        usuarios.map((usuario) => (
                                            <TableRow className="lists Usuario" key={usuario._id}>
                                                <TableCell>{usuario.firstName}</TableCell>
                                                <TableCell>{usuario.lastName}</TableCell>
                                                <TableCell>{usuario.age}</TableCell>
                                                <TableCell>{usuario.mail}</TableCell>
                                                <Boton className="button_class" onClick={(e) => handleClickUsers(e, usuario)} button_variant="contained" button_color="default" button_name="Liked Songs" />
                                            </TableRow>
                                        ))
                                    ) : (
                                            <p>Loading users please wait ...</p>
                                        )}
                                </TableHead>
                            </TableContainer>
                        </Grid>
                        <Grid
                            item
                            xs={5}
                            md={5}
                            lg={5}
                            lx={5}
                        >
                            <TableContainer className="App">
                                <div className="div__header">
                                    <h2>Lista de canciones favoritas</h2>
                                </div>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Artist</TableCell>
                                        <TableCell>Album</TableCell>
                                        <TableCell>Duration</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableHead>
                                    {songs.length > 0 ? (
                                        songs.map((song) => (
                                            <TableRow className="lists Song" key={song._id}>
                                                <TableCell>{song.name}</TableCell>
                                                <TableCell>{song.artist}</TableCell>
                                                <TableCell>{song.album}</TableCell>
                                                <TableCell>{song.duration}</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                            <p>Loading songs please wait ...</p>
                                        )}
                                </TableHead>
                                <div className="div_buttons">
                                    <Boton className="buttons_bootom-list" onClick="" button_variant="contained" button_color="primary" button_name="Agregar" />
                                    <Boton className="buttons_bootom-list" onClick="" button_variant="contained" button_color="secondary" button_name="Eliminar" />
                                </div>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
};

export default Provando;