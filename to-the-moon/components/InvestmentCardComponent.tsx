import React, { useState } from "react";
import styles from "./InvestmentCardComponent.module.css";
import { BsCoin } from "react-icons/bs";
import CountUp from "react-countup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog, Box, Slider } from "@mui/material";
import DropdownMenu from './DropdownMenu';
import PerformanceMetrics from "./PerformanceMetrics";

  // Dummy performance metrics data
  const performanceData = {
    totalReturn: 12.5,
    sharpeRatio: 1.8,
    maxDrawdown: -15.7,
    winRate: 60,
    numTrades: 42,
  };



export default function InvestmentCardComponent({
  title = "null",
  price = 0,
}: {
  title: string;
  price: number;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('min');
  const [selectedAlgo, setSelectedAlgo] = useState('MACD');

  const handleClick = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleDropdownChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleAlgoDropdownChange = (option: string) => {
    setSelectedAlgo(option);
  };

  return (
    <div className={styles.main} onClick={handleClick}>
      <div className={styles.sample}>
        <h1>
          <BsCoin />
        </h1>
      </div>
      <h4>{title}</h4>
      <h3>
        ₩ <CountUp key={price} end={price} duration={1} />
      </h3>

      <Dialog
        open={dialogOpen}
        onClose={(event: MouseEvent, reason: string) => {
          event.stopPropagation();
          handleClose();
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            minWidth: 300,
          }}
        >
          <h2 id="modal-title">Test Trading Algorithm with {title}</h2>
          <p id="modal-description">Adjust the slider between 0 and 100:</p>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            min={0}
            max={100}
            step={1}
            valueLabelDisplay="auto"
          />
          <div className={styles.datePickerContainer}>
            <label>Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | [Date, Date] | null) =>
                setStartDate(date as Date)
              }
              className={styles.datePicker}
            />
            <label>End Date:</label>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | [Date, Date] | null) => {
                setEndDate(date as Date)
              }
                
              }
              className={styles.datePicker}
            />
          </div>
       
           <div className={styles.dropdownMenuContainer}>
            <label>Interval:</label>
            <DropdownMenu
              options={['minute', 'hour', 'day']}
              onChange={handleDropdownChange}
            />
          </div>

          <div className={styles.dropdownMenuContainer}>
            <label>Algorithms:</label>
            <DropdownMenu
              options={['MACD','TRIX','ROE', 'Ichimoku Cloud', 'Bollinger Bands']}
              onChange={handleAlgoDropdownChange}
            />
          </div>
          <PerformanceMetrics {...performanceData} />
        </Box>
        <button onClick={()=> {
            console.log(sliderValue)
            console.log(startDate)
            console.log(endDate)
          }}>test</button>
      </Dialog>
    </div>
  );
}
