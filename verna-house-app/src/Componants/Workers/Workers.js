import React from "react";
import { useEffect } from "react";
import Paper from '@mui/material/Paper';
import { Backdrop, Grid } from "@mui/material";
import { getWorkers } from "../../Store/Worker/WorkerAction";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { DataGrid } from '@mui/x-data-grid';
import { Modal } from "@mui/material";
import { CardMedia, CardContent } from "@mui/material";
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditProfileWorker from "../Profile/EditProfileWorker";
import { getWorker } from "../../Store/Worker/WorkerAction";
import { IconButton } from "@mui/material";
import TaskForm from "../Tasks/TaskForm";
import { Navigate } from "react-router-dom";


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


const Workers = props => {
    const dispatch = useDispatch()
    const workers = useSelector((state) => state.workers);
    const { loading, details, error } = workers;
    const data = JSON.parse(localStorage.getItem("userInfo"))
    useEffect(() => {
        dispatch(getWorkers())
    }, [dispatch])
    console.log(workers.getWorkers)

    let role = data['role']
    // const length = workers.getWorkers.length

    const rows = workers.getWorkers
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    const handleRowEditStart = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleRowEditStop = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const editHandler = (row) => (event) => {
        event.stopPropagation();
        setOpen(true)
        dispatch(getWorker({ id: row.id }))
        console.log("edithandler call ")
       
    };
   

    const handleSaveClick = (id) => async (event) => {
        event.stopPropagation();
        // await apiRef.current.stopRowEditMode({ id });
    };

    const deleteHandler = (row) => (event) => {
        event.stopPropagation();
        // apiRef.current.updateRows([{ id, _action: 'delete' }]);
    };

    const handleCancelClick = (id) => async (event) => {
        event.stopPropagation();
        // await apiRef.current.stopRowEditMode({ id, ignoreModifications: true });

        // const row = apiRef.current.getRow(id);
        // if (row.isNew) {
        // apiRef.current.updateRows([{ id, _action: 'delete' }]);
        // }
    };

    // const processRowUpdate = async (newRow) => {
    //     return { ...newRow, isNew: false };
    // };


    const columns = [

        {
            field: 'id', headerName: 'ID', width: 150,
            key: 0,
            type: 'number'
        },
        {
            key: 1,
            field: 'name',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            width: 160,
            type: 'string',
            editable: true,
            valueGetter: (params) =>
                `${params.row.name}`,
        },
        {
            key: 2,
            field: 'username',
            headerName: 'UserName',
            width: 120,
            type: 'string',
            editable: true,
        },
        {
            key: 3,
            field: 'email',
            headerName: 'Email',
            type: 'string',
            width: 120,
            editable: true,

        },
        {
            key: 4,
            field: 'mobileNo',
            headerName: 'Mobile',
            type: 'number',
            sortable: false,
            width: 120,
            editable: true,

        },
        {
            key: 5,
            field: 'short_intro',
            headerName: 'Short Intro',
            type: 'string',
            width: 120,
            editable: true,

        },
        {
            key: 6,
            field: 'address',
            headerName: 'Address',
            type: 'string',
            width: 120,
            editable: true,
        },
        {
            key: 7,
            field: 'profileImage',
            headerName: 'Profile Image',
            type: 'image',
            width: 150,
            editable: true,
            // renderCell: (params) => (
            //     <>
            //         {/* {console.log(params)} */}
            //         <img
            //             src={`http://127.0.0.1:8000${params.row.profile_image}`}
            //             style={{
            //                 height: 100, width: 100,
            //                 // transition: "all 0.5s ease",
            //                 // "&:hover": { transform: "scale(1.05)", borderRadius: "40px" },
            //             }} />

            //     </>
            // ),
            // valueGetter: (params) => (
            //     <img
            //         src={`http://127.0.0.1:8000${params.row.profile_image}`}
            //         style={{
            //             width: 100,
            //             // transition: "all 0.5s ease",
            //             // "&:hover": { transform: "scale(1.05)", borderRadius: "40px" },
            //         }} />
            // ),

        },
        {
            key: 8,
            field: 'location',
            headerName: 'Location',
            type: 'string',
            width: 80,
            editable: true,
        },
        {
            key: 9,
            field: 'worker',
            headerName: 'Worker Id',
            type: 'number',
            width: 150,
            editable: true,
        },
        // {
        //     key: 10,
        //     field: "Action",
        //     headerName: 'Action',
        //     width: 200,
        //     renderCell: (row) => (
        //     <>
        //         <EditIcon onClick={editHandler(row)}>  </EditIcon>
        //         <DeleteIcon onClick={deleteHandler(row)}>  </DeleteIcon>
        //         <Button variant="outlined" style={{ backgroundColor: 'black', color: 'white', padding: 1.5 }}
        //             onClick={handleToggle}
        //         >View Details</Button>
        //         <Modal
        //             sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        //             open={open}
        //         >
        //             {/* <TaskForm onClick={handleClose} open={open} ></TaskForm> */}
        //         </Modal>
        //     </>
        // )
        // }
    ];



    return (
        <React.Fragment>
            {role === 'Admin' &&
                <Box
                    sx={{
                        height: 300,
                        width: '100%',
                    }}
                >
                    <h2>Workers:</h2>
                    {/* <DataGrid
                        rows={rows}
                        columns={columns}
                        editMode="row"
                    /> */}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: "100%" }} aria-label="customized table">
                            <TableHead>
                                <TableRow sx={{ width: '100%', height: 50 }} key="header">
                                    {columns && columns.map((column, index) => (
                                        <StyledTableCell
                                            key={index}
                                            style={{ width: column.width }}
                                        >
                                            {column.headerName}
                                        </StyledTableCell>
                                    ))}
                                    <StyledTableCell
                                        key='action'
                                        sx={{ width: 300 }}
                                    >
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
                                                            <img
                                                                src={`http://127.0.0.1:8000${row.profile_image}`} style={{ height: 100, width: 100 }} />
                                                        </StyledTableCell>
                                                    )
                                                }
                                            }
                                            )}
                                            <StyledTableCell key={index} sx={{ width: 200 }}>

                                                <EditIcon onClick={editHandler(row)}>  </EditIcon>
                                                <Backdrop
                                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                                    open={open}
                                                >
                                                    <EditProfileWorker onClick={handleClose} open={open} workerId={row.id}/>
                                                    
                                                </Backdrop>
                                                <DeleteIcon onClick={deleteHandler(row)}>  </DeleteIcon>
                                                <Button variant="outlined" style={{ backgroundColor: 'black', color: 'white', padding: 1.5, }}
                                                
                                                >View Details</Button>
                                                {/* <Modal

                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"

                                                >
                                                    <TaskForm onClick={handleClose} open={open} ></TaskForm>
                                                </Modal> */}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            }
            {role !== 'Admin' &&
                <Paper sx={{ width: '100%', height: '50%', backgroundColor: 'white', color: 'black', padding: 3 }}>
                    <Grid container spacing={2}>
                        {workers.getWorkers && workers.getWorkers.map((worker, index) => {
                            return (
                                <Grid item sx={2} key={index}>
                                    <Paper sx={{ height: "15%", width: '15%', padding: 1, backgroundColor: 'white', color: 'black', borderRadius: '1px solid black' }} key={worker.id}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="250"
                                            image={`http://127.0.0.1:8000${worker.profile_image}`}

                                        />
                                        <CardContent sx={{ marginTop: 0, marginBottom: 0, paddingBottom: 0 }}>
                                            <Typography gutterBottom variant="h6" component="div" color="text.primary">
                                                Name:   {worker.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.primary">
                                                Short_Intro:    {worker.shortIntro}
                                            </Typography>
                                        </CardContent>
                                    </Paper>
                                </Grid>
                            )
                        }
                        )}

                    </Grid>
                </Paper>
            }
        </React.Fragment >
    );
};
export default Workers;

// const mutateRow = useFakeMutation();
// const noButtonRef = React.useRef(null);
// const [promiseArguments, setPromiseArguments] = React.useState(null);

// const [snackbar, setSnackbar] = React.useState(null);

// const handleCloseSnackbar = () => setSnackbar(null);

// const processRowUpdate = React.useCallback(
//     (newRow, oldRow) =>
//         new Promise((resolve, reject) => {
//             const mutation = computeMutation(newRow, oldRow);
//             if (mutation) {
//                 // Save the arguments to resolve or reject the promise later
//                 setPromiseArguments({ resolve, reject, newRow, oldRow });
//             } else {
//                 resolve(oldRow); // Nothing was changed
//             }
//         }),
//     [],
// );

// const handleNo = () => {
//     const { oldRow, resolve } = promiseArguments;
//     resolve(oldRow); // Resolve with the old row to not update the internal state
//     setPromiseArguments(null);
// };

// const handleYes = async () => {
//     const { newRow, oldRow, reject, resolve } = promiseArguments;

//     try {
//         // Make the HTTP request to save in the backend
//         const response = await mutateRow(newRow);
//         setSnackbar({ children: 'User successfully saved', severity: 'success' });
//         resolve(response);
//         setPromiseArguments(null);
//     } catch (error) {
//         setSnackbar({ children: "Name can't be empty", severity: 'error' });
//         reject(oldRow);
//         setPromiseArguments(null);
//     }
// };

// const handleEntered = () => {
//     // The `autoFocus` is not used because, if used, the same Enter that saves
//     // the cell triggers "No". Instead, we manually focus the "No" button once
//     // the dialog is fully open.
//     // noButtonRef.current?.focus();
// };

// const renderConfirmDialog = () => {
//     if (!promiseArguments) {
//         return null;
//     }

//     const { newRow, oldRow } = promiseArguments;
//     const mutation = computeMutation(newRow, oldRow);

//     return (
//         <Dialog
//             maxWidth="xs"
//             TransitionProps={{ onEntered: handleEntered }}
//             open={!!promiseArguments}
//         >
//             <DialogTitle>Are you sure?</DialogTitle>
//             <DialogContent dividers>
//                 {`Pressing 'Yes' will change ${mutation}.`}
//             </DialogContent>
//             <DialogActions>
//                 <Button ref={noButtonRef} onClick={handleNo}>
//                     No
//                 </Button>
//                 <Button onClick={handleYes}>Yes</Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// function isOverflown(element) {
//     return (
//         element.scrollHeight > element.clientHeight ||
//         element.scrollWidth > element.clientWidth
//     );
// }

// const GridCellExpand = React.memo(function GridCellExpand(props) {
//     const { width, value } = props;
//     const wrapper = React.useRef(null);
//     const cellDiv = React.useRef(null);
//     const cellValue = React.useRef(null);
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [showFullCell, setShowFullCell] = React.useState(false);
//     const [showPopper, setShowPopper] = React.useState(false);

//     const handleMouseEnter = () => {
//         const isCurrentlyOverflown = isOverflown(cellValue.current);
//         setShowPopper(isCurrentlyOverflown);
//         setAnchorEl(cellDiv.current);
//         setShowFullCell(true);
//     };

//     const handleMouseLeave = () => {
//         setShowFullCell(false);
//     };

//     React.useEffect(() => {
//         if (!showFullCell) {
//             return undefined;
//         }

//         function handleKeyDown(nativeEvent) {
//             // IE11, Edge (prior to using Bink?) use 'Esc'
//             if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
//                 setShowFullCell(false);
//             }
//         }

//         document.addEventListener('keydown', handleKeyDown);

//         return () => {
//             document.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [setShowFullCell, showFullCell]);


//     return (
//         <Box
//             ref={wrapper}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             sx={{
//                 alignItems: 'center',
//                 lineHeight: '24px',
//                 width: 1,
//                 height: 1,
//                 position: 'relative',
//                 display: 'flex',
//             }}
//         >
//             <Box
//                 ref={cellDiv}
//                 sx={{
//                     height: 1,
//                     width,
//                     display: 'block',
//                     position: 'absolute',
//                     top: 0,
//                 }}
//             />
//             <Box
//                 ref={cellValue}
//                 sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
//             >
//                 {value}
//             </Box>
//             {showPopper && (
//                 <Popper
//                     open={showFullCell && anchorEl !== null}
//                     anchorEl={anchorEl}
//                     style={{ width, marginLeft: -17 }}
//                 >
//                     <Paper
//                         elevation={1}
//                         style={{ minHeight: wrapper.current.offsetHeight - 3 }}
//                     >
//                         <Typography variant="body2" style={{ padding: 8 }}>
//                             {value}
//                         </Typography>
//                     </Paper>
//                 </Popper>
//             )}
//         </Box>
//     );
// });

// GridCellExpand.propTypes = {
//     value: PropTypes.string.isRequired,
//     width: PropTypes.number.isRequired,
// };

// function renderCellExpand(params) {
//     return (
//         <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
//     );
// }

// renderCellExpand.propTypes = {
//     /**
//      * The column of the row that the current cell belongs to.
//      */
//     colDef: PropTypes.object.isRequired,
//     /**
//      * The cell value, but if the column has valueGetter, use getValue.
//      */
//     value: PropTypes.string,
// };
