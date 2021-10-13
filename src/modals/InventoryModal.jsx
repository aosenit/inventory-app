import { Box, Button, IconButton, Modal, TextField, Typography } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { GridCloseIcon } from '@mui/x-data-grid';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const InventoryModal = ({}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit, reset} = useForm();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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
            <Button onClick={handleOpen} variant="contained" color="primary" style={{marginLeft: "20px"}} >Add Item</Button>
            
            
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
                        <h4>Add Item</h4>
                        <GridCloseIcon color="secondary" onClick={handleClose} />
                    </div>

                    <div
                        style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        }}
                    >
                        <div
                            className="modalImage"
                            style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--grayColor)',
                            margin: 'auto',
                            position: 'relative',
                            }}
                        >
                            <input
                            style={{
                                display: 'none',
                                position: 'absolute',
                                left: '-50%',
                                top: '50%',
                                transform: 'translate(${50}px, ${50}px)',
                            }}
                            accept="image/*"
                            className=""
                            id="icon-button-file"
                            type="file"
                            />
                            <label htmlFor="icon-button-file">
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                            >
                                <PhotoCamera
                                style={{
                                    position: 'absolute',
                                    left: '150%',
                                    top: '150%',
                                    padding: 0,
                                    margin: 0,
                                }}
                                />
                            </IconButton>
                            </label>
                        </div>
                        

                    <form onSubmit={handleSubmit(submit)} noValidate autoComplete="off" >
                        <h5>
                            <span style={{color: 'red', marginRight: '10px'}}>*</span>
                             Item Name
                        </h5>
                        <TextField
                            style={{
                            width: '100%',
                            marginTop: '10px',
                            marginBottom: '20px',
                            }}
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                            required
                            {...register('name', { required: true })}
                        />

                            <>
                            <h5>
                            <span style={{color: 'red', marginRight: '10px'}}>*</span>
                                Total Available
                            </h5>
                            <TextField
                                style={{
                                width: '100%',
                                marginTop: '10px',
                                marginBottom: '20px',
                                }}
                                id="outlined-basic"
                                label=""
                                variant="outlined"
                                required
                                {...register('total', { required: true })}
                            />
                            </>
                        

                        
                            <>
                            <h5>
                                <span style={{color: 'red', marginRight: '10px'}}>*</span>
                                Group/Category
                            </h5>
                            <select
                                style={{
                                width: '100%',
                                height: '3.7rem',
                                border: '1px solid var(--grayColor)',
                                marginTop: '10px',
                                marginBottom: '20px',
                                paddingLeft: '10px',
                                borderRadius: '5px',
                                }}
                                name=""
                                id=""
                                required
                                {...register("category")}
                            >
                                <option value="default"></option>
                                <option value="boys">Boys wares</option>
                                <option value="girls">Girls wares</option>
                            </select>
                            </>
                       

                       
                            <>
                            <h5>
                                <span style={{color: 'red', marginRight: '10px'}}>*</span>
                                Item Price
                            </h5>
                            <TextField
                                style={{
                                width: '100%',
                                marginTop: '10px',
                                marginBottom: '20px',
                                }}
                                id="outlined-basic"
                                label=""
                                variant="outlined"
                                required
                                type="number"
                                {...register('price', { required: true })}
                            />
                            </>
                        
                        <Button
                            style={{
                            width: '100%',
                            marginTop: '10px',
                            marginBottom: '20px',
                            height: '3.8rem'
                            }}
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                        {message && 
                        <h5 style={{color:'red'}}>
                        Not an admin, sorry you can't add item</h5>
                        }
                        </form>
                    </div>
                    </div>
                </Box>
            </Modal>
           
           
        </div>
    )
}

export default InventoryModal
