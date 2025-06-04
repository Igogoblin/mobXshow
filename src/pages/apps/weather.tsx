import { Typography } from "antd";
import { useParams } from "react-router";

const Weather = () => {
  const { appId } = useParams<{ appId: string }>();
  console.log("Weather appId:", appId);
  return (
    <Typography.Title
      level={2}
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      Погода
    </Typography.Title>
  );
};
export default Weather;
