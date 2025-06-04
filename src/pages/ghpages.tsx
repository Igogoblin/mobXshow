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
      <Typography.Paragraph>
        <Typography.Text strong>
          в настройках репозитория во вкладке Pages изменяем Source на GitHub
          Аctions, после выбираем свой путь где нам предоставят документ,
          который нужно изменить
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>
          в этом документе нужно заменить документ на Vite document, "Deployn a
          Static Site", озаглавить документ deploy.yml
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>
          в проекте в файле vite.config.ts нужно указать путь к репозиторию
          добавив base: "mobXshow", в данном случае это путь к репозиторию
          mobXshow
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>
          после этого нужно сделать коммит и запушить в репозиторий, после этого
          в разделе Actions появится новый workflow, который будет запускаться
          при каждом пуше в репозиторий
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>
          в документе deploy.yml нужно контролировать путь от которого будет
          происходить деплой в данном случае это ветка main
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        этот проект создан для демонстрации работы GitHub Actions
      </Typography.Title>
      <Typography.Link>https://igogoblin.github.io/</Typography.Link>
    </>
  );
};
export default GitHabPages;
