import { Spin } from "antd";

const SpinContainer = ({size = "large"}:{size?:any}) => {
  return (
    <div className="SpinContainer">
      <Spin size={size} />
    </div>
  );
};

export default SpinContainer;
