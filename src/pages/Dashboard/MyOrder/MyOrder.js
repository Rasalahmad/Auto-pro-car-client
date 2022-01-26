import React, { useState, useEffect } from 'react';
import useFirebase from '../../hooks/useFirebase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Swal from 'sweetalert2';


const MyOrder = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://fierce-dusk-72833.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [user.email])

    const handleCancel = (id) => {

        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire(
        //             'Deleted!',
        //             'Your file has been deleted.',
        //             'success'
        //         )
        //     }
        // })


        const proceed = window.confirm('Are your sure, you want to delete this item??')
        if (proceed) {
            fetch(`https://fierce-dusk-72833.herokuapp.com/deleteOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Your Order Cancel Successfully!!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        const remaining = orders.filter(pd => pd._id !== id)
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2>Ordered List of <span style={{ color: 'blue' }}>{user.displayName}</span></h2>
            <h2>Total Orders {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appoints Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Index</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Color</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row, index) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {[index + 1]}
                                </TableCell>
                                <TableCell align="center">{row?.service?.name}</TableCell>
                                <TableCell align="center">{row?.service?.color}</TableCell>
                                <TableCell align="center">{row?.service?.price}</TableCell>
                                <TableCell align="center">
                                    {row?.status === 'Pending' ? <Box>
                                        <Typography variant="body1" sx={{ color: 'goldenrod', display: 'inline', p: '5px' }}>{row?.status}</Typography>
                                        <Button variant="contained" color="error" onClick={() => handleCancel(row._id)}>Cancel</Button>
                                    </Box>
                                        :
                                        <Typography variant="body1" sx={{ color: 'green' }}>{row?.status}</Typography>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrder;