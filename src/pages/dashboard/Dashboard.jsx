import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Dashboard.css'
import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import DashboardOne from '../../assets/DashboardOne.svg';
import DashboardTwo from '../../assets/DashboardTwo.svg';
import DashboardThree from '../../assets/DashboardThree.svg';
import DashboardFour from '../../assets/DashboardFour.svg';
import Barchart from '../../components/charts/Barchart';
import Piechart from '../../components/charts/Piechart';



export default function Dashboard() {
    const [month, setMonth] = useState('The Month');


    

    const handleChange = (event) => {
      setMonth(event.target.value);
    };


  return (
    <div className="dashboard layout">
      <Topbar />
      <Sidebar />
      <div className="main">
        <section className="topSection">
          <Paper className="topSection__content" elevation={0}>
            <div className="topSection__text">
              <h5>Total Items</h5>
              <h2>2,520</h2>
            </div>
            <div className="topSection__images">
              <img src={DashboardOne} className="image" />
            </div>
          </Paper>

          <Paper className="topSection__content" elevation={0}>
            <div className="topSection__text">
              <h5>Total Items</h5>
              <h2>26</h2>
            </div>
            <div className="topSection__images">
              <img src={DashboardTwo} className="image" />
            </div>
          </Paper>

          <Paper className="topSection__content" elevation={0}>
            <div className="topSection__text">
              <h5>Total Items</h5>
              <h2>5</h2>
            </div>
            <div className="topSection__images">
              <img src={DashboardThree} className="image" />
            </div>
          </Paper>

          <Paper className="topSection__content" elevation={0}>
            <div className="topSection__text">
              <h5>Total Items</h5>
              <h2>5</h2>
            </div>
            <div className="topSection__images">
              <img src={DashboardFour} className="image" />
            </div>
          </Paper>
        </section>

        <div className="midSection">
          <Paper className="midSection__left" elevation={0}>
            <div className="top">
              <h5>Top Selling Items</h5>

              <select
                className="dashboardSelect"
                id="Month"
                value={month}
                onChange={handleChange}
              >
                <option value="ab">The Month</option>
                <option value="ac">July</option>
              </select>
            </div>

            <div className="bottom">
              <Paper className="bottom__content" elevation={0}>
                <img
                  src="https://st3.depositphotos.com/13194036/16122/i/600/depositphotos_161222862-stock-photo-chair-with-white-top-and.jpg"
                  alt=""
                />
                <h4>The OakChair</h4>
                <h5>1,200</h5>
              </Paper>

              <Paper className="bottom__content" elevation={0}>
                <img
                  src="https://st3.depositphotos.com/13194036/16122/i/600/depositphotos_161222862-stock-photo-chair-with-white-top-and.jpg"
                  alt=""
                />
                <h4>The OakChair</h4>
                <h5>1,200</h5>
              </Paper>

              <Paper className="bottom__content" elevation={0}>
                <img
                  src="https://st3.depositphotos.com/13194036/16122/i/600/depositphotos_161222862-stock-photo-chair-with-white-top-and.jpg"
                  alt=""
                />
                <h4>The OakChair</h4>
                <h5>1,200</h5>
              </Paper>

              <Paper className="bottom__content" elevation={0}>
                <img
                  src="https://st3.depositphotos.com/13194036/16122/i/600/depositphotos_161222862-stock-photo-chair-with-white-top-and.jpg"
                  alt=""
                />
                <h4>The OakChair</h4>
                <h5>1,200</h5>
              </Paper>
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

              <select
                id="Month"
                className="dashboardSelect"
                value={month}
                onChange={handleChange}
              >
                <option value="ab">This Month</option>
                <option value="ac">July</option>
              </select>
            </div>
            <Barchart className="bar-chart" />
          </Paper>
          <Paper className="bottomSection__right">
            <div className="top">
              <h5>Purchases</h5>

              <select
                id="Month"
                className="dashboardSelect"
                value={month}
                onChange={handleChange}
              >
                <option value="ab">This Month</option>
                <option value="ac">July</option>
              </select>
            </div>
            <div className="priceCount">
              <div>
                <h4>
                  <span>N</span>
                  <span className="bold">53,600.00</span>
                </h4>
                <h5>(price)</h5>
              </div>

              <div>
                <h4 className="bold">520</h4>
                <h5>(count)</h5>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
