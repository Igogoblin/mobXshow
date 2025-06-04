import { Typography } from "antd";

const GitHabPages = () => {
  return (
    <>
      <Typography.Title
        level={2}
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        GH-Pages ACTIONS
      </Typography.Title>
      <Typography.Paragraph style={{ textAlign: "center", marginTop: "20px" }}>
        This page is used to demonstrate GitHub Actions for deploying to GitHub
        Pages.
      </Typography.Paragraph>
    </>
  );
};
export default GitHabPages;
