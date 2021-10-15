import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CircularProgress } from '@material-ui/core';
import { clearReceipt, deleteReceipt } from '../../redux/invoiceSlice';

function InvoicePanel() {
  const [data, setData] = useState([]);
  const {invoiceDetail} = useSelector(state => state.invoice)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

   

   const handleClear = () => {
    dispatch(clearReceipt())
}

  const getTotalPrice = () => {
    return data.reduce(
      (accumulator, item) => accumulator + (item.price * item.qty),
      0
    );
  };
  useEffect(() => {
    setLoading(true)
    setData(invoiceDetail)
    setLoading(false)
  }, [invoiceDetail], clearReceipt, deleteReceipt, getTotalPrice())

 
  if (loading){
    return <CircularProgress color="inherit" />
  }


  return (
    <div className="contentTable">
      <Card>
        <CardContent>
          <div className="newInvoiceHeader">
            <h5>Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
            <h5>Total</h5>
            <h5>Action</h5>
          </div>

          {data && data.map((d, i) => {
            return (
              <div className="newInvoiceContent" key={d.id}>
               
                <h5>{d.name}</h5>
                <h5>{d.qty}</h5>
                <h5>NGN {d.price}</h5>
                <h5>NGN {(d.qty) * (d.price)}</h5>
                <h5 className="receiptInput">
                  <ClearIcon color="secondary" onClick={() => dispatch(deleteReceipt(d.id))}/>
                </h5>
                <br /> 
                
            </div>
            )
          })}

          
        </CardContent>
      </Card>
      <h2 className="total">Grand Total: NGN {getTotalPrice()}</h2>
      <Paper className="invoiceFooter" 
      style={{
          display:'flex', 
          alignItems: 'center', 
          justifyContent:'space-between', 
          height:'70px',
          padding:'0 10px'
          }}>
        <div className="invoiceFooter__left">
          <h5 style={{ color:'var(--grayColor)'}}>Date Issued:</h5>
          <h4>10/07/2021</h4>
        </div>
        <div className="invoiceFooter__right">
          <Button variant='contained' className='topbarButton' style={{fontSize:'.5rem'}}>Print & Save</Button>
          <Button className='deleteReceipt' onClick={handleClear}
          style={{
                  backgroundColor:'red',
                  color:"white",
                  fontSize:'.5rem', 
                  marginLeft: "5px"
                }}
                >Clear</Button>
        </div>
      </Paper>
    </div>
  );
}

export default InvoicePanel;
