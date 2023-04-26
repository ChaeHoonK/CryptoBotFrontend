import React, { useState } from "react";
import styles from "./InvestmentCardComponent.module.css";
import { BsCoin } from "react-icons/bs";
import CountUp from "react-countup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog, Box, Slider } from "@mui/material";
import DropdownMenu from './DropdownMenu';
import PerformanceMetrics from "./PerformanceMetrics";
import BackTestComponent from "./BackTestComponent";

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
        <BackTestComponent title={title}/>
      </Dialog>
    </div>
  );
}
