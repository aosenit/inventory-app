import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Dashboard.css'
import Paper from '@material-ui/core/Paper';
import Barchart from '../../components/charts/Barchart';
import Piechart from '../../components/charts/Piechart';
import DashboardSummary from '../../components/dashboardcomponents/DashboardSummary';
import DashboardPurchases from '../../components/dashboardcomponents/DashboardPurchases';
import DashboardTopselling from '../../components/dashboardcomponents/DashboardTopselling';



export default function Dashboard() {
    


  return (
    <div className="dashboard layout">
      <Topbar />
      <Sidebar />
      <div className="main">
       <DashboardSummary />

        <div className="midSection">
          <Paper className="midSection__left" elevation={0}>
            <div className="top">
              <h5>Top Selling Items</h5>
            </div>

            <div className="bottom">
              <DashboardTopselling />
             
            </div>
          </Paper>

          <Paper className="midSection__right">
            <h4>Sale by Shop</h4>
            <Piechart className="pie-chart" />
          </Paper>
        </div>

        

        <div className="bottomSection">
          <Paper className="bottomSection__left">
            <div className="top">
              <h5>Sales performance</h5>
            </div>
            <Barchart />
          </Paper>
          
          <Paper className="bottomSection__right">
           <DashboardPurchases />
          </Paper>
        </div>
      </div>
    </div>
  );
}
