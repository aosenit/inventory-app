import { Box, Button, Modal, TextField } from '@material-ui/core'
import { GridCloseIcon } from '@mui/x-data-grid';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const ShopModal = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(false);
    const { register, handleSubmit, reset} = useForm();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    p: 5,
  };

 const submit =(data) => {
  setMessage(true)


   setTimeout(() => {
    setMessage(false)
    reset()
  }, 2000);
  
    
 }


    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="primary" style={{marginLeft: "20px"}} >Add Shops</Button>
            
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              
            >
                <Box  sx={style}>
                <div
                    style={{
                        display: 'grid',
                        placeItems: 'center',
                    }}>
                    
                    <div
                        style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center',
                        marginBottom: '40px',
                        fontSize: '14px',
                        }}
                    >
                        <h4>Add Shops</h4>
                        <GridCloseIcon onClick={handleClose} color="secondary" />
                    </div>

                    <div
                        style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        }}
                    >

                        <form className="" noValidate autoComplete="off" onSubmit={handleSubmit(submit)}>
                        <h5>
                            <span style={{color: 'red', marginRight: '10px'}}>*</span>
                             Shop Name
                        </h5>
                        <TextField
                            style={{
                            width: '100%',
                            marginTop: '10px',
                            marginBottom: '20px',
                            }}
                            id="outlined-basic"
                            label=""
                            required
                            variant="outlined"
                            {...register('name', { required: true })}
                        />
                          
                        
                        <Button
                            style={{
                            width: '100%',
                            marginTop: '10px',
                            marginBottom: '20px',
                            height: '3.8rem',
                            }}
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                        {message && 
                        <h5 style={{color:'red'}}>
                        Not an admin, sorry you can't add Shop</h5>
                        }
                        </form>
                    </div>
                    </div>
                </Box>
            </Modal>
           
           
        </div>
    )
}

export default ShopModal
