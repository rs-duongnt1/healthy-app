import Stack from "@/components/Stack";
import { Button, Paper, Typography } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Dashboard() {
  
  return (
    <div>
      <Stack direction="row" spacing={10}>
        <Paper sx={{ p: 4 }}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h3">300</Typography>
            <Typography variant="subtitle2" mt={1} color="purple">Tổng Số Đơn Hàng</Typography>
          </Stack>
          {/* <ShoppingBasketIcon /> */}
        </Paper>
        <Paper sx={{ p: 4 }}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h3" color="red">20.000.000VND </Typography>
            <Typography variant="subtitle2" mt={1} color="green">Doanh Thu Ước Tính</Typography>
          </Stack>
          {/* <ShoppingBasketIcon /> */}
        </Paper>
        <Paper sx={{ p: 4 }}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h3">260</Typography>
            <Typography variant="subtitle2" mt={1} color="green">Thành Công</Typography>
          </Stack>
          {/* <ShoppingBasketIcon /> */}
        </Paper>
        <Paper sx={{ p: 4 }}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h3">100</Typography>
            <Typography variant="subtitle2" mt={1} color="red">Thất Bại</Typography>
          </Stack>
          {/* <ShoppingBasketIcon /> */}
        </Paper>
      </Stack>
    </div>
  );
}
