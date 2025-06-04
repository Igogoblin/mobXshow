import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SplitCellsOutlined,
  SwitcherOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Link } from "react-router";
import AppRoutes from "./routes/routes";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link to="/">Главная</Link>,
              },
              {
                key: "2",
                icon: <SplitCellsOutlined />,
                label: <Link to="/instruments">Инструменты</Link>,
              },
              {
                key: "3",
                icon: <SwitcherOutlined />,
                label: <Link to="/apps">Приложения</Link>,
              },
              {
                key: "4",
                icon: <ApiOutlined />,
                label: <Link to="/gh-pages">GitHub Pages</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
