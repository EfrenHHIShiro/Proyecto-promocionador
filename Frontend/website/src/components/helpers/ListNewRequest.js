import React, { useState } from 'react';
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination'; 
import {Button} from '@material-ui/core';
import {useParams} from 'react-router-dom';


const ListRequest = () =>{

  //Inicializamos el state de la tabla
  //Paginacion, Tablas que muestra e informacion
  const [page, setPage] = useState(0);  
  const [equipos, setEquipos] = useState([{ ID: 1, Nombre: 'La negrita', RFC: 'MEPHC3', Correo:  'Bryanpech@hotmail.com', Direccion: 'Calle 49 #453 centro'}]);   
  const [rowsPerPage, setRowsPerPage] = useState(5);


  //Iniciamos el push que va a recibir el ID del usuario
  function handleClick(rute) {
   // history.push(`/Accesorios/${rute}`);
  }

      //SetEvents
      const handleChangePage = (event, newPage) => {  
        setPage(newPage);  
      };  
      
      const handleChangeRowsPerPage = event => {  
        setRowsPerPage(+event.target.value);  
        setPage(0);  
      }; 
      //Prop para comunicarnos con otro componente donde se pasa la informacion

  return(    

    <Paper  >  
              <h1>Solicitudes recientes</h1>
    <TableContainer >  
      <Table stickyHeader aria-label="sticky table">  
      <TableHead>  
          <TableRow>  
            <TableCell>ID</TableCell>  
            <TableCell align="center">Nombre</TableCell>  
            <TableCell align="center">RFC</TableCell>  
            <TableCell align="center">Correo</TableCell>
            <TableCell align="center">Direccion</TableCell> 
            <TableCell align="center">Acciones</TableCell>  
          </TableRow>  
        </TableHead>  
        <TableBody>  
          {equipos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {  
            return (  
        <TableRow key={index} >  
              <TableCell component="th" scope="row">  
                {row.ID}  
              </TableCell>  
              <TableCell align="right">{row.Nombre}</TableCell>  
              <TableCell align="right">{row.RFC}</TableCell>  
              <TableCell align="right">{row.Correo}</TableCell> 
              <TableCell align="right">{row.Direccion}</TableCell> 
              <TableCell align="center">                
                <Button color="primary" variant="contained" onClick={e=>handleClick(row.ID)}>Aceptar</Button>
                <Button color="primary" variant="contained" onClick={e=>handleClick(row.ID)}>Declinar</Button>                
              </TableCell>
        </TableRow>        
            );  
          })}  
        </TableBody>  
      </Table>  
    </TableContainer>  
    <TablePagination  
      rowsPerPageOptions={[5, 10, 15]}  
      component="div"  
      count={equipos.length}  
      rowsPerPage={rowsPerPage}  
      page={page}  
      onChangePage={handleChangePage}  
      onChangeRowsPerPage={handleChangeRowsPerPage}  
    />  
  </Paper>  
)
}

export default ListRequest