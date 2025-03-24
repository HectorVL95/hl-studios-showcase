import { useMediaQuery } from "@mui/material";

export const useResponsive = () => {
  const is_mobile = useMediaQuery('(max-width: 640px)');
  return { is_mobile }
}