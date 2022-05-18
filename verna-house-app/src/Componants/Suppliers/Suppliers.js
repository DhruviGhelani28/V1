

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { useEffect } from "react";
import Paper from '@mui/material/Paper';
import { getSuppliers, getSupplier } from "../../Store/Supplier/SupplierAction"
import { Backdrop } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { GridActionsCell, GridActionsCellItem } from '@mui/x-data-grid';
import { GridRowModes } from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';
import EditProfileSupplier from '../Profile/EditProfileSupplier';

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
        sortable: false,
        type: 'string',
        width: 140,
        editable: true,
        // valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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
        headerName: 'Mobile',
        type: 'number',
        sortable: false,
        width: 100,
        editable: true,
    },
    {
        key: 5,
        field: 'organisationName',
        headerName: 'OrganizationName',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        key: 6,
        field: 'organisationAddress',
        headerName: 'OrganizationAddress',
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
        field: 'social_website',
        headerName: 'Social_website',
        type: 'string',
        width: 120,
        editable: true,
    },
    {
        key: 10,
        field: 'supplier',
        headerName: 'supplierId',
        type: 'number',
        sortable: true,
        width: 100,
        editable: true,
    }

];

function Suppliers() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        console.log("form open");
        setOpen(true);
    };
    const dispatch = useDispatch()
    const suppliers = useSelector((state) => state.suppliers);
    const [rows, setRows] = React.useState([]);
    useEffect(() => {
        dispatch(getSuppliers())
    }, [dispatch])

    console.log(suppliers.getSuppliers)

    useEffect(() => {
        setRows(suppliers.getSuppliers)

    }, [suppliers.getSuppliers])

    // const rows = suppliers.getSuppliers
    console.log(rows)
    // const [rowModesModel, setRowModesModel] = React.useState({});

    // const handleRowEditStart = (params, event) => {
    //     event.defaultMuiPrevented = true;
    // };

    // const handleRowEditStop = (params, event) => {
    //     event.defaultMuiPrevented = true;
    // };

    const editHandler = (id) => {
        // handleOpen();
        // console.log("id:--", id);
        // dispatch(getSupplier({ id: id }));
        // setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        // setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
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
            <h2>Suppliers:</h2>
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

                                            <EditIcon onClick={handleOpen} />
                                            {open &&
                                                <Dialog open={open} onClose={handleClose} sx={{ padding: 0.5, width: 900 }}>
                                                    <DialogTitle>Edit Supplier : {row.id}</DialogTitle>
                                                    <DialogContent dividers sx={{ padding: 0.1 }}>
                                                        <EditProfileSupplier onClick={handleClose} open={open} supplierId={row.id} />
                                                    </DialogContent>
                                                    {/* <DialogActions>
                                                    <Button onClick={handleClose} sx={{ border: '1px solid black' }}>Cancel</Button>
                                                    <Button onClick={handleClose}>Save</Button>
                                                </DialogActions> */}
                                                </Dialog>
                                            }
                                            <DeleteIcon onClick={deleteHandler(row)}>  </DeleteIcon>
                                            <Button variant="outlined" style={{ backgroundColor: 'black', color: 'white', padding: 1.5, }}>
                                                View Details
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )
}

export default Suppliers;

{/* <React.Fragment>
//             <h2>Suppliers will be here</h2>
//             <Grid container spacing={2}>
//                 <Grid item xs={4}> */}
//                     {
//                         <Paper elevation={6}>
//                             <Typography>

//                             </Typography>

//                         </Paper>

//                     }
//                 </Grid>
//             </Grid>

//             <div style={{ height: 400, width: '100%' }}>
//                 <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     pageSize={5}
//                     rowsPerPageOptions={[5]}
//                     checkboxSelection
//                     disableSelectionOnClick
//                 />
//             </div>
//         </React.Fragment>



{/*

function isOverflown(element) {
    return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
    );
}

const GridCellExpand = React.memo(function GridCellExpand(props) {
    const { width, value } = props;
    const wrapper = React.useRef(null);
    const cellDiv = React.useRef(null);
    const cellValue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);

    const handleMouseEnter = () => {
        const isCurrentlyOverflown = isOverflown(cellValue.current);
        setShowPopper(isCurrentlyOverflown);
        setAnchorEl(cellDiv.current);
        setShowFullCell(true);
    };

    const handleMouseLeave = () => {
        setShowFullCell(false);
    };

    React.useEffect(() => {
        if (!showFullCell) {
            return undefined;
        }

        function handleKeyDown(nativeEvent) {
            // IE11, Edge (prior to using Bink?) use 'Esc'
            if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
                setShowFullCell(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setShowFullCell, showFullCell]);


    return (
        <Box
            ref={wrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                alignItems: 'center',
                lineHeight: '24px',
                width: 1,
                height: 1,
                position: 'relative',
                display: 'flex',
            }}
        >
            <Box
                ref={cellDiv}
                sx={{
                    height: 1,
                    width,
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                }}
            />
            <Box
                ref={cellValue}
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
                {value}
            </Box>
            {showPopper && (
                <Popper
                    open={showFullCell && anchorEl !== null}
                    anchorEl={anchorEl}
                    style={{ width, marginLeft: -17 }}
                >
                    <Paper
                        elevation={1}
                        style={{ minHeight: wrapper.current.offsetHeight - 3 }}
                    >
                        <Typography variant="body2" style={{ padding: 8 }}>
                            {value}
                        </Typography>
                    </Paper>
                </Popper>
            )}
        </Box>
    );
});

GridCellExpand.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
};

function renderCellExpand(params) {
    return (
        <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
    );
}

renderCellExpand.propTypes = {
    /**
     * The column of the row that the current cell belongs to.
     */
    // colDef: PropTypes.object.isRequired,
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    // value: PropTypes.string,
};
