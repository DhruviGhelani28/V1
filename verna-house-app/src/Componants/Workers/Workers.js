import React from "react";
import { useEffect } from "react";
import Paper from '@mui/material/Paper';

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


import Alert from '@mui/material/Alert';

import {
    useGridApiRef,
    DataGridPro,
    GridToolbarContainer,
    GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import { IconButton } from "@mui/material";

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
    colDef: PropTypes.object.isRequired,
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    value: PropTypes.string,
};

const Workers = props => {
    const dispatch = useDispatch()
    const workers = useSelector((state) => state.workers);
    const { loading, details, error } = workers;

    useEffect(() => {
        dispatch(getWorkers())
    }, [dispatch])
    // console.log(workers.getWorkers)


    const length = workers.getWorkers.length

    const rows = workers.getWorkers

   

    const handleRowEditStart = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleRowEditStop = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleEditClick = (id) => (event) => {
        event.stopPropagation();
        // apiRef.current.startRowEditMode({ id });
    };

    const handleSaveClick = (id) => async (event) => {
        event.stopPropagation();
        // await apiRef.current.stopRowEditMode({ id });
    };

    const handleDeleteClick = (id) => (event) => {
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

        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'name',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            editable: true,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'username',
            headerName: 'UserName',
            width: 120,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'string',
            width: 120,
            editable: true,
            renderCell: renderCellExpand
        },
        {
            field: 'mobileNo',
            headerName: 'Mobile',
            type: 'number',
            sortable: false,
            width: 120,
            editable: true,
            // resizable: true
        },
        {
            field: 'short_intro',
            headerName: 'Short Intro',
            type: 'string',
            width: 120,
            editable: true,
        },
        {
            field: 'address',
            headerName: 'Address',
            type: 'string',
            width: 120,
            renderCell: renderCellExpand,
            editable: true,
        },
        {
            field: 'profileImage',
            headerName: 'Profile Image',
            type: 'image',
            width: 120,
            editable: true,
            renderCell: (params) => (<>{console.log(params)} <img src={`http://127.0.0.1:8000${params.row.profile_image
                }`} style={{ height: 50, width: 120 }} /></>)
        },
        {
            field: 'location',
            headerName: 'Location',
            type: 'string',
            width: 120,
            renderCell: renderCellExpand,
            editable: true,
        },
        {
            field: 'social_website',
            headerName: 'Social_website',
            type: 'string',
            width: 120,
            renderCell: renderCellExpand,
            editable: true,
        },
        {
            field: "Action",
            headerName: 'Action',
            width: 100,
            renderCell: (row) => (
                <>
                    <Button variant="contained" style={{ width: '10px' }} onClick={() => { console.log(row.id) }}>Edit</Button>
                </>
            )
        }
    ];

   

    return (
        <React.Fragment>
            <Box
                sx={{
                    height: 500,
                    width: '100%',
                }}
            >
                <h2>Workers:</h2>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    editMode="row"
                />
            </Box>
        </React.Fragment>
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
