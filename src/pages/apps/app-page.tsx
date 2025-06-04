import { Typography } from "antd";
import AppSteps from "./app-steps";

const AppPage = () => {
  return (
    <>
      <Typography.Title
        level={2}
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        Приложения
      </Typography.Title>
      <AppSteps />
    </>
  );
};
export default AppPage;
