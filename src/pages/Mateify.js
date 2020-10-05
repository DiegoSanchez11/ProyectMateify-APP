import React from 'react';
import {
    Paper,
    Grid,
    Box
} from '@material-ui/core';

// Components
import Navbar from '../components/Navbar';
import TableUsers from '../components/TableUsers';
import TableSongs from '../components/TabeleSongs';

//CSS
import './Mateify.css';

export const Mateify = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box>
                        <div>
                            <Navbar />
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} item xs={6}>
                    <Box>
                        <div className="tableuser">
                            <TableUsers />
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} item xs={6}>
                    <Box>
                        <div className="tablesongs">
                            <TableSongs />
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Mateify;