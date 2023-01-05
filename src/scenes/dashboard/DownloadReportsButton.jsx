import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";

export const DownloadReportsButton = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box>
            <Button
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                }}
            >
                <DownloadOutlined sx={{ mr: "10px" }} />
                Download Reports
            </Button>
        </Box>
    );
};
