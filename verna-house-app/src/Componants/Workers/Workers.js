

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import { useEffect } from "react";
import Paper from '@mui/material/Paper';
import { getWorkers } from "../../Store/Worker/WorkerAction"

import { useDispatch, useSelector } from "react-redux";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import EditProfileWorker from '../Profile/EditProfileWorker';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const columns = [

    { field: 'id', headerName: 'ID', width: 90, key: 0, type: 'number' },
    {
        key: 1,
        field: 'name',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: true,
        type: 'string',
        width: 140,
        editable: true,

    },
    {
        key: 2,
        field: 'username',
        headerName: 'UserName',
        type: 'string',
        width: 120,
        editable: true,
    },
    {
        key: 3,
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        key: 4,
        field: 'mobileNo',
        headerName: 'Mobile No.',
        type: 'number',
        sortable: false,
        width: 100,
        editable: true,
    },
    {
        key: 5,
        field: 'short_intro',
        headerName: 'Introduction',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        key: 6,
        field: 'address',
        headerName: 'Address',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        key: 7,
        field: 'profile_image',
        headerName: 'Profile Image',
        type: 'image',
        width: 130,
        editable: true,
    },
    {
        key: 8,
        field: 'location',
        headerName: 'Location',
        type: 'string',
        width: 120,
        editable: true,
    },

    {
        key: 9,
        field: 'worker',
        headerName: 'workerId',
        type: 'number',
        sortable: true,
        width: 100,
        editable: true,
    }

];

function Workers() {
    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState('')
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        console.log("form open");
        setOpen(true);
    };
    const dispatch = useDispatch()
    const workers = useSelector((state) => state.workers);
    const [rows, setRows] = React.useState([]);
    const [reload, setReload] = React.useState(false)
    useEffect(() => {
        dispatch(getWorkers())
    }, [dispatch, reload])

    console.log(workers.getWorkers)

    useEffect(() => {
        setRows(workers.getWorkers)

    }, [workers.getWorkers, reload])


    console.log(rows)

    const editHandler = (row) => {
        handleOpen();
        setId(row.id)

    };

    const deleteHandler = (row) => () => {
        // setRows(rows.filter((row) => row.id !== id));
    };


    return (
        <Box
            sx={{
                height: "100%",
                width: '100%',
                paddingRight: 0.5,
            }}
        >
            <h2>Workers:</h2>
            <Paper sx={{ overflow: 'hidden', width: '100%', paddingLeft: 0.1, paddingRight: 0.1, elevation: 24 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: "100%" }} aria-label="customized table">
                        <TableHead>
                            <TableRow sx={{ width: '100%' }} key='header'>
                                {columns && columns.map((column, index) => (
                                    <StyledTableCell
                                        key={index}
                                        style={{ Width: column.width }}
                                    >
                                        {column.headerName}
                                    </StyledTableCell>
                                ))}
                                <StyledTableCell
                                    key='action'
                                    sx={{ width: 300 }}>
                                    Actions
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows && rows.map(
                                (row, index) => (
                                    <StyledTableRow hover key={index}>
                                        {columns && columns.map((column, index) => {
                                            if (column.type === "string" || column.type === "number") {
                                                return (
                                                    <StyledTableCell key={index} style={{ width: column.width }}>
                                                        {row[column.field]}
                                                    </StyledTableCell>
                                                )
                                            }
                                            else {
                                                return (
                                                    <StyledTableCell key={index} style={{ padding: 0.1 }}>
                                                        <img src={`http://127.0.0.1:8000${row[column.field]}`} style={{ height: 100, width: 100 }} />
                                                    </StyledTableCell>
                                                )
                                            }
                                        })}
                                        <StyledTableCell key={index} sx={{ width: 200 }}>
                                            <EditIcon onClick={() => editHandler(row)} />

                                            <DeleteIcon onClick={deleteHandler(row)}>  </DeleteIcon>
                                            <Button variant="outlined" style={{ backgroundColor: 'black', color: 'white', padding: 1.5, }}>
                                                View Details
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}

                            <Dialog open={open} sx={{ padding: 0.5, width: 900 }}>
                                <DialogTitle>Edit Worker : {id} </DialogTitle>
                                <DialogContent dividers sx={{ padding: 0.1 }}>
                                    <EditProfileWorker open={open} workerId={id} setReload={setReload} onClose={handleClose} />
                                </DialogContent>

                            </Dialog>


                        </TableBody>

                    </Table>
                </TableContainer>

            </Paper>
        </Box>
    )
}

export default Workers;
