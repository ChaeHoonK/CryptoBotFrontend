import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TopTitle from "@/components/TopTitle";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import BottomNavigation from "@/components/BottomNavigation";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import {numberWithCommas} from '@/library/string'

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#E14D28",
      main: "#f44336",
      dark: "#E14D28",
      contrastText: "#000",
    },
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Bit Coin Price",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Price",
      data: labels.map(() => Math.random() * 1000),
      borderColor: "#E14D28",
      backgroundColor: "#E14D2866",
    },
  ],
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ width: "100%" }}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const sample = [
  { icon: "/TTM Logo.png", earning: 300, name: "BTC" },
  { icon: "/TTM Logo.png", earning: 300, name: "BTC" },
];

const sample_history = [
  { market: "BTC-KRW", amount: 300, date: "03/01/23", type: 0 },
  { market: "BTC-KRW", amount: 200, date: "02/28/23", type: 0 },
  { market: "BTC-KRW", amount: 500, date: "02/27/23", type: 1 },
];

function History(hist: any[]) {
  const component = hist.map((elem, index) => {
    const contain_style =
      elem.type == 0
        ? { backgroundColor: "red" }
        : { backgroundColor: "green" };
    return (
      <div key={index} style={{marginBottom:'10px'}}>
        <div
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <h3>Bitcoin</h3>
          <h3>{elem.num_coin}</h3>
          
          <div style={{ color: "white", ...contain_style }}>
            <h3>{elem.type ? "Buy" : "Sell"}</h3>
          </div>{" "}
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <h3>Price: ₩{numberWithCommas(elem.trade_price)}</h3>
          <h3>
            {typeof elem.timestamp == "string"
              ? elem.timestamp.slice(0, 10)
              : "wait"}
          </h3>
        </div>
      </div>
    );
  });

  return component;
}

function Tmp() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h3>Total Earning</h3>
        <h1>
          ₩87,875
          <span style={{ color: "green", fontSize: "20px" }}>
            <AiFillCaretUp />
            10%
          </span>
        </h1>
      </div>

      <div>
        <h5>Profit</h5>
        <h3>₩2,593</h3>
      </div>
    </div>
  );
}

export default function InvestmentDetailPage() {
  const [value, setValue] = React.useState(0);
  const [transactionHistory, setTransactionHistory] = useState(undefined);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data_res = await fetch("/api/transaction/1");
      const data = await data_res.json();
      console.log(data);

      setTransactionHistory(data);
    };

    fetchData();
  }, []);

  const assetList = sample.map((elem: any, index) => {
    const green_red = elem.earning > 0 ? "green" : "red";

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          padding: "10px",
          margin: "10px 10px 10px",
          borderRadius: "20px",
        }}
        key={index}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={elem.icon} alt="icon" width="50px" height="50px" />
          <h2>{elem.name}</h2>
        </div>
        <div style={{ color: green_red }}>
          <h2>₩ {elem.earning}</h2>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.main}>
      <ThemeProvider theme={theme}>
        <TopTitle />
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab label="ROE" {...a11yProps(0)} />
            <Tab label="History" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <br />
          <Tmp />
          {assetList}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <br />
          <Tmp />
          <Line options={options} data={data} />;
          <div
            style={{
              border: "1px solid #E14D28",
              borderRadius: "20px",
              padding: "10px",
              margin: "0px 10px 0px",
              backgroundColor: "white",
            }}
          >
            <h3>Trade History</h3>
            <br />
            {transactionHistory ? History(transactionHistory) : "loading..."}
          </div>
        </TabPanel>
      </ThemeProvider>

      <BottomNavigation />
    </div>
  );
}
