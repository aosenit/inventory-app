import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Inventory.css';
import InventoryInvoice from '../../components/inventoryInvoice/InventoryInvoice';
import InventoryManager from '../../components/inventoryManager/InventoryManager';

function Inventory() {
 
  return (
    <div className="inventory layout">
      <Topbar />
      <Sidebar />
      <InventoryManager  />
    </div>
  );
}

export default Inventory;
