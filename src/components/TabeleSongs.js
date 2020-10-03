import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';

// Components
import Boton from './Boton';

//CSS
import '../styles/TableSongs.css';

export const TableSongs = () => {
    return (
        <div>
            <Paper variant="outlined" elevation="3">
                <TableContainer>
                    <div className="list_title">
                        <h2>Lista de canciones favoritas</h2>
                    </div>
                    <TableHead>
                        <TableRow className="table_header">
                            <TableCell>Name</TableCell>
                            <TableCell>Artist</TableCell>
                            <TableCell>Album</TableCell>
                            <TableCell>Duration</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow key="">
                            <TableCell>song.name</TableCell>
                            <TableCell>song.artist</TableCell>
                            <TableCell>song.album</TableCell>
                            <TableCell>song.duration</TableCell>
                        </TableRow>
                    </TableHead>
                </TableContainer>
                <div className="button_div">
                    <Boton className="button_functions" onClick="" button_variant="contained" button_color="primary" button_name="Agregar" />
                    <Boton className="button_functions" onClick="" button_variant="contained" button_color="secondary" button_name="Eliminar" />
                </div>
            </Paper>
        </div>
    )
}

export default TableSongs;