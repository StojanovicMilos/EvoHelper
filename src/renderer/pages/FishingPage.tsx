import { useState } from 'react';
import Button from '@mui/material/Button';
import { Key } from '../../constants/keyCodes';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function FishingPage() {
  const [rodButton, setRodButton] = useState(Key.NumPad8);

  const handleChange = (event: SelectChangeEvent) => {
    // @ts-ignore
    setRodButton(event.target.value);
  };
  const onStartClick = () => {
    window.electron.ipcRenderer.sendMessage('fishing_arm', rodButton);
  }

  const onCancelClick = () => {
    window.electron.ipcRenderer.sendMessage('fishing_disarm');
  }

  return (
    <>
      <Typography variant="h6">Current hotkeys:</Typography>
      <Typography variant="body2">Ctrl + 8: almost perfect fishing (~9500 score)</Typography>
      <Typography variant="body2">Ctrl + 9: perfect fishing</Typography>
      <Typography variant="body2">Ctrl + 0: standard fishing</Typography>
      <Typography variant="body2">Ctrl + -: pause</Typography>

      <Typography variant="body1">Set 1920x1080 resolution for this to work.</Typography>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="standard-label">Rod hotkey</InputLabel>
        <Select
          labelId="standard-label"
          id="select-standard"
          value={rodButton}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={Key.NumPad8}>Numpad 8</MenuItem>
          <MenuItem value={Key.Num6}>6</MenuItem>
          <MenuItem value={Key.Num5}>5</MenuItem>
          <MenuItem value={Key.Num4}>4</MenuItem>
          <MenuItem value={Key.Num3}>3</MenuItem>
          <MenuItem value={Key.Num2}>2</MenuItem>
          <MenuItem value={Key.Num1}>1</MenuItem>
        </Select>
      </FormControl>
      <br />
      <Button onClick={onStartClick} color="success">
        Start
      </Button>
      <Button onClick={onCancelClick} color="warning">
        Stop
      </Button>
    </>
  )
}
