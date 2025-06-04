import React, { useState } from "react";
import { Button, Steps, theme } from "antd";
import Counter from "./counter";
import Todo from "./todo";
import Weather from "./weather";
import { useLocation, useNavigate } from "react-router";

const steps = [
  {
    title: "Counter",
    path: "/apps/counter",
    content: <Counter />,
  },
  {
    title: "Todo",
    path: "/apps/todo",
    content: <Todo />,
  },
  {
    title: "Weather",
    path: "/apps/weather",
    content: <Weather />,
  },
];

const AppSteps: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname.split("/").pop() || "";
  const currentStepIndex = steps.findIndex((step) =>
    step.path.endsWith(currentPath)
  );
  const stepIndex = currentStepIndex !== -1 ? currentStepIndex : 0;
  const next = () => {
    const nextIndex = stepIndex + 1;
    if (nextIndex >= steps.length) {
      navigate(`/apps/${steps[0].path.split("/").pop()}`);
      setCurrent(0);
      return;
    } else if (nextIndex < 0) {
      navigate(`/apps/${steps[steps.length - 1].path.split("/").pop()}`);
      setCurrent(steps.length - 1);
      return;
    }
    navigate(`/apps/${steps[nextIndex].path.split("/").pop()}`);
    setCurrent(current + 1);
  };

  const prev = () => {
    const prevIndex = stepIndex - 1;
    if (prevIndex < 0) {
      navigate(`/apps/${steps[steps.length - 1].path.split("/").pop()}`);
      setCurrent(steps.length - 1);
      return;
    }
    navigate(`/apps/${steps[prevIndex].path.split("/").pop()}`);
    setCurrent(current - 1);
  };
  const handlerToMain = () => {
    navigate("/apps/counter");
    setCurrent(0);
  };
  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps
        current={current}
        items={steps.map(({ title }) => ({
          title,
        }))}
      />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Следующий
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => handlerToMain()}>
            Просмотрено
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Предыдущий
          </Button>
        )}
      </div>
    </>
  );
};

export default AppSteps;
