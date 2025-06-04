import { Typography } from "antd";
import { useParams } from "react-router";

const Counter = () => {
  const { appId } = useParams<{ appId: string }>();
  console.log("Counter appId:", appId);
  return <Typography.Title level={2}>Counter</Typography.Title>;
};
export default Counter;
