import Layout from '../components/layout';

export default function LoadingScreen(): JSX.Element {
  return (
    <Layout>
      <div className="loading">
        <h1 className="loading__title title-reset">Загрузка...</h1>
      </div>
    </Layout>
  );
}
