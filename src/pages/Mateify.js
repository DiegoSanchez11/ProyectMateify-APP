import React from 'react';
import {
    Paper,
    Grid
} from '@material-ui/core';

// Components
import Navbar from '../components/Navbar';
import TableUsers from '../components/TableUsers';
import TableSongs from '../components/TabeleSongs';

//CSS
import './Mateify.css';

export const Mateify = () => {
    return (
        <div className="page_body">
            <div>
                <Navbar />
            </div>
            <div className="paper_box">
                <Paper className="paper" variant="outlined" elevation="3">
                    <div>
                        <div className="tableuser">
                            <TableUsers />
                        </div>
                        <div className="tablesongs">
                            <TableSongs />
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default Mateify;