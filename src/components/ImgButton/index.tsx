import { Btn } from "./styles";

interface BtnParams {
  onClick?: any;
  icon: any;
  dimension: number;
  iconSize: number;
  borderRadius: number;
  bgColor: string;
  iconColor: string;
  hoverBgColor?: string;
}

const ImgButton = ({
  onClick,
  icon,
  dimension,
  iconSize,
  borderRadius,
  bgColor,
  iconColor,
  hoverBgColor,
}: BtnParams) => {
  return (
    <div>
      <Btn
        onClick={onClick}
        dimension={dimension}
        borderRadius={borderRadius}
        bgColor={bgColor}
        hoverBgColor={hoverBgColor}
      >
        <span
          className="material-symbols-outlined"
          style={{ color: iconColor, fontSize: iconSize + "rem" }}
        >
          {icon}
        </span>
      </Btn>
    </div>
  );
};

export default ImgButton;
