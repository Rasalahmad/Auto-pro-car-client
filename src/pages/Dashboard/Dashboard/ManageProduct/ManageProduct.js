import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const ManageProduct = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch("https://car-service-psi.vercel.app/collection")
      .then((res) => res.json())
      .then((data) => {
        setCollection(data);
      });
  }, []);

  const handleCancel = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this product!!"
    );
    if (proceed) {
      fetch(`https://car-service-psi.vercel.app/deleteProduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Your Order Cancel Successfully");
            const remaining = collection.filter((pd) => pd._id !== id);
            setCollection(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <h2>Total Products {collection.length}</h2>
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
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {[index + 1]}
                </TableCell>
                <TableCell align="center">{row?.name}</TableCell>
                <TableCell align="center">{row?.model}</TableCell>
                <TableCell align="center">{row?.color}</TableCell>
                <TableCell align="center">{row?.price}</TableCell>
                <TableCell align="center">
                  {/* <Link to="/updateProduct"> */}
                  <Button variant="contained" color="success" sx={{ m: "7px" }}>
                    Update
                  </Button>
                  {/* </Link> */}

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleCancel(row._id)}
                  >
                    Delete
                  </Button>
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
