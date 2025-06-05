import { Button, Flex, Typography } from "antd";
import counterStore from "../../store/counter.store";
import { observer } from "mobx-react-lite";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const Counter = observer(() => {
  const { increment, decrement, count } = counterStore;
  return (
    <Flex vertical align="center" justify="start" style={{ padding: "20px" }}>
      <Typography.Title level={2}>Counter</Typography.Title>
      <Typography.Paragraph>
        This is a simple counter application. You can increment or decrement the
        count.
      </Typography.Paragraph>
      <Flex gap="small" wrap>
        <Button
          type="primary"
          onClick={() => decrement(1)}
          icon={<DownOutlined />}
          iconPosition="end"
        >
          Уменьшить
        </Button>
        <Button
          type="text"
          disabled
          style={{ color: "black", fontSize: "24px" }}
        >
          {count}
        </Button>
        <Button
          type="dashed"
          onClick={() => increment(1)}
          icon={<UpOutlined />}
        >
          Увеличить
        </Button>
      </Flex>
    </Flex>
  );
});
export default Counter;
