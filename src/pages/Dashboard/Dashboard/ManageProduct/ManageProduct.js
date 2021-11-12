import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useFirebase from '../../../hooks/useFirebase';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const { user } = useFirebase();
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/collection')
            .then(res => res.json())
            .then(data => {
                setCollection(data);
            })
    }, [])

    const handleCancel = (id) => {
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Your Order Cancel Successfully')
                    const remaining = collection.filter(pd => pd._id !== id)
                    setCollection(remaining);
                }
            })
    }

    return (
        <div>
            <h2>Ordered List of <span style={{ color: 'blue' }}>{user.displayName}</span></h2>
            <h2>Total Orders {collection.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appoints Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Index</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Model</TableCell>
                            <TableCell align="center">Color</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {collection.map((row, index) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {[index + 1]}
                                </TableCell>
                                <TableCell align="center">{row?.name}</TableCell>
                                <TableCell align="center">{row?.model}</TableCell>
                                <TableCell align="center">{row?.color}</TableCell>
                                <TableCell align="center">{row?.price}</TableCell>
                                <TableCell align="center">
                                    <Link to="/updateProduct">
                                        <Button variant="contained" color="success" sx={{ mx: '7px', textDecoration: 'none'}}>Update</Button></Link>
                                    <Button variant="contained" color="error" onClick={() => handleCancel(row._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProduct;