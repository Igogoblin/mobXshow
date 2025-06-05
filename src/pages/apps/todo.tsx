import { List, Typography } from "antd";
import todoStore from "../../store/todo.store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const Todo = observer(() => {
  const { getAll, todos, isLoading } = todoStore;
  useEffect(() => {
    getAll();
  }, [getAll]);
  useEffect(() => {
    console.log("Todos: ", todos);
  }, [todos]);
  return (
    <>
      <Typography.Title level={2}>Todo</Typography.Title>
      <Typography.Paragraph>
        This is a simple todo application. You can add, edit, and delete todos.
      </Typography.Paragraph>
      {!isLoading ? (
        <List
          bordered
          dataSource={todos}
          renderItem={(todo, index) =>
            index < 8 ? (
              <List.Item key={index}>
                {todo.todo} - {todo.completed ? "✅" : "❌"}
              </List.Item>
            ) : null
          }
        />
      ) : (
        <Typography.Paragraph>Loading...</Typography.Paragraph>
      )}
    </>
  );
});

export default Todo;
