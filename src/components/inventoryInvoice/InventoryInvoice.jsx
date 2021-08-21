import React from 'react'
import './InventoryInvoice.css'
import SearchIcon from '@material-ui/icons/Search';
import InventoryInvoicePanel from './InventoryInvoicePanel';
import InvoicePanel from './InvoicePanel';
function InventoryInvoice() {
    return (
      <div className="main inventoryInvoice">
        <div className="inventoryInvoiceLeft">
          <div className="content__leftTop">
            <h4>Inventory</h4>
            <div className="content__rightTop">
              <form className="content__searchBar">
                <SearchIcon className="search-icon" />
                <input
                  type="text"
                  className="content__SearchBarInput"
                  placeholder="Search"
                />
                <button type="submit">submit</button>
              </form>
            </div>
          </div>
        <InventoryInvoicePanel />
        </div>

        <div className="inventoryInvoiceRight">
          <div className="content__leftTop">
            <h4>Invoice</h4>
            <div className="content__rightTop">
              <form className="content__searchBar">
                <SearchIcon className="search-icon" />
                <input
                  type="text"
                  className="content__SearchBarInput"
                  placeholder="Search"
                />
                <button type="submit">submit</button>
              </form>
            </div>
          </div>
          <InvoicePanel />
        </div>
      </div>
    );
}

export default InventoryInvoice
