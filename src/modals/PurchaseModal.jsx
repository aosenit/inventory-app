import { Box, Button, Card, CardContent, Modal} from '@material-ui/core'
import { GridCloseIcon } from '@mui/x-data-grid';
import React, { useState } from 'react'

const GroupModal = () => {
    const [open, setOpen] = useState(false);

 
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




    return (
        <div>
            <Button onClick={handleOpen} variant="outlined" color="primary" style={{marginLeft: "20px"}} >Add Group</Button>
            
            
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
                        <GridCloseIcon onClick={handleClose} color="secondary" />
                    </div>

                    <div style={{
                            display: 'flex',
                            width: '100%',
                            flexDirection: 'column',
                    }}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <div className="cardHead">
                                    <h3>TRAZ STORE</h3>
                                    <h6>45, Ago Palace, Okota</h6>
                                    <h6>Lagos-state, Nigeria</h6>
                                    <h6>Phone no: 08068095923</h6>
                                    <h5>Invoice: TV123</h5>
                                </div>

                                <div className="cardBody">
                                    <div className="cardBody_top">
                                        <h5>Printed By <span style={{fontWeight:"bold"}}>Ade</span></h5>
                                        <h5>Date <span style={{fontWeight:"bold"}}>13/10/2021</span></h5>
                                    </div>
                                    <div className="cardBody_Content">
                                        <h5><span style={{fontWeight:"bold"}}>Item</span>suit</h5>
                                        <h5><span style={{fontWeight:"bold"}}>Qty</span>3</h5>
                                        <h5><span style={{fontWeight:"bold"}}>Price</span>NGN 10, 000</h5>
                                        <h5><span style={{fontWeight:"bold"}}>Total</span>30,000</h5>
                                    </div>
                                    <div className="cardBody_footer">
                                        <h4>Total: NGN 30, 000</h4>
                                        <h5>NO REFUNDS CAN BE MADE AFTER PAYMENTS</h5>
                                    </div>
                                </div>


                            </CardContent>
                        </Card>
                    
                        <Button className="cardBtn" variant="outlined" color="primary">Print</Button>
                    </div>
                    </div>
                </Box>
            </Modal>
           
           
        </div>
    )
}

export default GroupModal