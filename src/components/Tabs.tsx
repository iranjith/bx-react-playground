import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const AntTabs = styled(Tabs)({
  padding: "0px",
  margin: "0px",
  "& .MuiTabs-indicator": {
      backgroundColor: "transparent",
  },
});

const AntTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    color: "rgba(0, 0, 0, 0.85)",
    fontWeight: "600",
    borderRadius: "10px 10px 00px 0px",
    backgroundColor: "#CACED7",
    textTransform: "none",
    gap: "10px",
    "&.MuiTab-root": {
        minHeight: "37px",
    },
    "&.MuiButtonBase-root-MuiTab-root": {
        padding: "0px",
    },
    "&.Mui-selected": {
        color: "#000",
        fontSize: "14px",
        backgroundColor: "#CCE0E9",
    },
    "&.Mui-focusVisible": {
        backgroundColor: "#d1eaff",
    },
}));

interface StyledTabProps {
  label: string;
}

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Tab 1" />
          <AntTab label="Tab 2" />
          {/* <AntTab label="Tab 3" /> */}
        </AntTabs>

        <Box sx={{ p: 3 }} />
      </Box>

      {/* <Box sx={{ bgcolor: "#2e1534" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Workflows" />
          <StyledTab label="Datasets" />
          <StyledTab label="Connections" />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box> */}
    </Box>
  );
}
