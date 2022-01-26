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

const ManageOrder = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://fierce-dusk-72833.herokuapp.com/manageOrders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [user.email])

    const handleCancel = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this order??')
        if (proceed) {
            fetch(`https://fierce-dusk-72833.herokuapp.com/deleteOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Your Order Cancel Successfully')
                        const remaining = orders.filter(pd => pd._id !== id)
                        setOrders(remaining);
                    }
                })
        }
    }
    const handleApproved = (id) => {
        // console.log(id);
        fetch(`https://fierce-dusk-72833.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orders.status),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    alert('Approved')
                    window.location.reload();
                } else {
                    alert('Already Shipped');
                }
            });
    }

    return (
        <div>
            <h2>Ordered List</h2>
            <h2>Total Orders {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appoints Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Index</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Color</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center" colspan="2">Action</TableCell>
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
                                <TableCell align="center">{row?.email}</TableCell>
                                <TableCell align="center">{row?.service?.name}</TableCell>
                                <TableCell align="center">{row?.service?.color}</TableCell>
                                <TableCell align="center">{row?.service?.price}</TableCell>
                                <TableCell align="center">



                                    {row?.status === 'Pending' ? <Button variant="contained" color="warning" sx={{ mx: '7px' }} onClick={() => handleApproved(row._id)}>{row?.status}</Button> :
                                        <Button variant="contained" color="success" sx={{ mx: '7px' }}>{row?.status}</Button>
                                    }


                                    <Button variant="contained" color="error" onClick={() => handleCancel(row._id)}>Cancel</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrder;