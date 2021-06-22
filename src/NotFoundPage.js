import Layout from './components/layout';

function NotFoundPage() {
  return <Layout>Not found
       <div
              style={{
                textAlign: 'center',
                fontSize: 48,
                fontWeight: 'bold',
              }}>
              404 | Not found page
        </div>
  </Layout>;
}

export default NotFoundPage;
