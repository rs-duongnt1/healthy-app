/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as MealItemBox } from "@/assets/svg/hex.svg";
import { MealItemBoxIcon, MealItemBoxText, MealItemRoot } from "./styles";

interface MealItemProps {
  mealItem: {
    id: number;
    text: string;
    icon: JSX.Element;
  };
  selected?: boolean;
  onClick: () => void;
}

export default function MealItem({ mealItem, ...rest }: MealItemProps) {
  return (
    <MealItemRoot {...rest}>
      <MealItemBoxIcon>{mealItem.icon}</MealItemBoxIcon>
      <MealItemBoxText>{mealItem.text}</MealItemBoxText>
      <MealItemBox />
    </MealItemRoot>
  );
}
