import React, { useState } from "react";
import styles from "./BackTestComponent.module.css";
import { BsCoin } from "react-icons/bs";
import CountUp from "react-countup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog, Box, Slider } from "@mui/material";
import DropdownMenu from "./DropdownMenu";
import PerformanceMetrics from "./PerformanceMetrics";

const performanceData = {
    totalReturn: 12.5,
    sharpeRatio: 1.8,
    maxDrawdown: -15.7,
    winRate: 60,
    numTrades: 42,
  };

function BackTestComponent({ title }: any) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("day");
  const [selectedAlgo, setSelectedAlgo] = useState("MACD");
  const [showMatrix, setShowMatrix] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string|null>(null)

  //   const [sliderValue, setSliderValue] = useState(0);

  //   const handleSliderChange = (event: any, newValue: number | number[]) => {
  //     setSliderValue(newValue as number);
  //   };

  function dayDiff(start:Date,end:Date) {
    const diff = end.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  const handleTestClick = (e: React.MouseEvent) => {
    // console.log(sliderValue)
    console.log(startDate);
    console.log(endDate);
    const diff = endDate.getTime() - startDate.getTime();
    const day_diff = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(day_diff);
    const currentTime = new Date()

    if (dayDiff(startDate,endDate) <= 0){
        setErrorMessage("시작 날짜와 종료 날짜를 다시 설정해주세요")
        setShowMatrix(false)
        return
    } else if (dayDiff(currentTime, startDate) > 0) {
        setErrorMessage("시작 날짜는 현재 날짜보다 전이어야 합니다")
        setShowMatrix(false)
        return
    } else if (dayDiff(endDate, currentTime) < 0) {
        setErrorMessage("종료 날짜는 현재 날짜보다 전이어야 합니다")
        setShowMatrix(false)
        return
    } else {
        setErrorMessage(null)
        setShowMatrix(true)        
    }
  };

  const handleDropdownChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleAlgoDropdownChange = (option: string) => {
    setSelectedAlgo(option);
  };
  return (
    <>
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
      {/* <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            min={0}
            max={100}
            step={1}
            valueLabelDisplay="auto"
          /> */}
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
            setEndDate(date as Date);
          }}
          className={styles.datePicker}
        />
      </div>

      <div className={styles.dropdownMenuContainer}>
        <label>Interval:</label>
        <DropdownMenu
          options={["day", "hour", "minute"]}
          onChange={handleDropdownChange}
          disabled={true}
        />
      </div>

      <div className={styles.dropdownMenuContainer}>
        <label>Algorithms:</label>
        <DropdownMenu
          options={["MACD", "TRIX", "ROE", "Ichimoku Cloud", "Bollinger Bands"]}
          onChange={handleAlgoDropdownChange}
        />
      </div>
      <br />
      <button onClick={handleTestClick} style={{ width: "100%" }}>
        test
      </button>
    
    {errorMessage
    ?<p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>
    :null}
    {showMatrix?<PerformanceMetrics {...performanceData}/>: null}
    </Box>
    </>
  );
}

export default BackTestComponent;
