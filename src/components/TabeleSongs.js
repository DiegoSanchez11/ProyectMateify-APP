import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
    Paper
} from '@material-ui/core';

// Components
import Boton from './Boton';

//CSS
import '../styles/TableSongs.css';

export const TableSongs = () => {
    return (
        <div>
            <Grid container>
                <Paper className="box_table">
                    <TableContainer className="table_box">
                        <Grid item xs={12}>
                            <div className="list_title">
                                <h2>Lista de canciones favoritas</h2>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TableHead>
                                <TableRow className="table_header">
                                    <TableCell>Name</TableCell>
                                    <TableCell>Artist</TableCell>
                                    <TableCell>Album</TableCell>
                                    <TableCell>Duration</TableCell>
                                </TableRow>
                            </TableHead>
                        </Grid>
                        <Grid item xs={12}>
                            <TableHead>
                                <TableRow key="">
                                    <TableCell>song.name</TableCell>
                                    <TableCell>song.artist</TableCell>
                                    <TableCell>song.album</TableCell>
                                    <TableCell>song.duration</TableCell>
                                </TableRow>
                            </TableHead>
                        </Grid>
                    </TableContainer>
                    <Grid item xs={12}>
                        <div className="button_div">
                            <Boton className="button_functions" onClick="" button_variant="contained" button_color="primary" button_name="Agregar" />
                            <Boton className="button_functions" onClick="" button_variant="contained" button_color="secondary" button_name="Eliminar" />
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default TableSongs;