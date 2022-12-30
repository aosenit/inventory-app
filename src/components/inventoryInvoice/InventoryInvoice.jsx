import React, { useState } from "react";
import "./InventoryInvoice.css";
import SearchIcon from "@material-ui/icons/Search";
import InventoryInvoicePanel from "./InventoryInvoicePanel";
import InvoicePanel from "./InvoicePanel";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
function InventoryInvoice() {
  const [word, setWord] = useState("");

  return (
    <div className="inventory layout">
      <Topbar />
      <Sidebar />
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
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
                <button type="submit">submit</button>
              </form>
            </div>
          </div>
          <InventoryInvoicePanel word={word} />
        </div>

        <div className="inventoryInvoiceRight">
          <div className="content__leftTop">
            <h4>Invoice</h4>
          </div>
          <InvoicePanel />
        </div>
      </div>
    </div>
  );
}

export default InventoryInvoice;
