import { Typography } from "antd";
import { useParams } from "react-router";

const Todo = () => {
  const { appId } = useParams<{ appId: string }>();
  console.log("Todo appId:", appId);
  return <Typography.Title level={2}>Todo</Typography.Title>;
};
export default Todo;
