

interface DropdownMenuProps {
  options: string[];
  onChange: (option: string) => void;
}


const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

import React, { useState } from "react";
import styles from "../../components/InvestmentCardComponent.module.css";
import { BsCoin } from "react-icons/bs";
import CountUp from "react-countup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog, Box, Slider } from "@mui/material";

export default function InvestmentCardComponent({
  title,
  price,
}: {
  title: string;
  price: number;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('min');

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

  return (
    <div className={styles.main} onClick={handleClick}>
      {/* ... */}
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
          {/* ... */}
          <div className={styles.datePickerContainer}>
            {/* ... */}
          </div>
          <div className={styles.dropdownMenuContainer}>
            <label>Interval:</label>
            <DropdownMenu
              options={['min', 'hour', 'day']}
              onChange={handleDropdownChange}
            />
          </div>
        </Box>
      </Dialog>
    </div>
  );
}

