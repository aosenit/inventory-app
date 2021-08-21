import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Inventory.css';
import InventoryInvoice from '../../components/inventoryInvoice/InventoryInvoice';
import InventoryManager from '../../components/inventoryManager/InventoryManager';

function Inventory() {
 
  let isInvoice = false
  return (
    <div className="inventory layout">
      <Topbar isHeaderbtn />
      <Sidebar />
      {!isInvoice ? (
        <InventoryManager isInvoice={isInvoice} />
      ) : (
        <InventoryInvoice isInvoice={isInvoice} />
      )}
    </div>
  );
}

export default Inventory;
