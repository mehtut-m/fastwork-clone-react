import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function PackageToggle() {
  const [alignment, setAlignment] = useState(0);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value={0}>Web</ToggleButton>
      <ToggleButton value={1}>Android</ToggleButton>
      <ToggleButton value={2}>iOS</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default PackageToggle;
