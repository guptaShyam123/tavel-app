import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useSWR from 'swr'
import axios from 'axios'

const columns = [
  { field: 'id', headerName: 'ID', width: 90, },
  {
    field: 'Name',
    headerName: 'Name',
    width: 150,
    editable: true,

  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 150,
    editable: true,

  },
  {
    field: 'Phoneno',
    headerName: 'Phoneno',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Country',
    headerName: 'Country',
    description: 'This column has a value getter and is not sortable.',
    editable: true,
    width: 160,

  },

  {
    field: 'Duration',
    headerName: 'Duration',
    description: 'This column has a value getter and is not sortable.',
    editable: true,
    width: 160,
  },
  {
    field: 'date',
    headerName: 'date',
    description: 'This column has a value getter and is not sortable.',
    editable: true,
    width: 160,
  },
  {
    field: 'Enquires',
    headerName: 'Enquires',
    description: 'This column has a value getter and is not sortable.',
    editable: true,
    width: 160,
  }

];





export default function Crud() {


  const rows = []



  const address = 'http://localhost:4000/api/v1/Contacts';
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p> Loading failed...</p>;
  if (!data) <h1> Loading...</h1>;

  console.log(data)


  data?.contact?.forEach((ele) => {

    rows.push({
      id: ele._id,
      Name: ele.Name,
      Email: ele.Email,
      Phoneno: ele.Phoneno,
      Country: ele.Country,
      Duration: ele.Duration,
      date: ele.date,
      Enquires: ele.Enquires


    })
  });




  return (
    <Box sx={{ height: 400, width: '100%', color: 'white', backgroundColor: '#e0e0e0', fontWeight: 'bolder' }}>
      <DataGrid
        style={{ fontWeight: 'bolder', color: 'black', fontSize: '18px' }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

