import React from 'react';
import { getLatestAdverts } from '../../../api/adverts';
//import scopedStyles from './TweetsPage.module.css';
import Layout from '../../layout/Layout';
import './AdvertsPage.css';
import AdvertSearch from './AdvertSearch';

// const EmptyList = () => (
//   <div style={{ textAlign: 'center' }}>
//     <p>Be the first Ad!</p>
//     <Button as={Link} to="/advert" variant="primary">
//       Crear Anuncio
//     </Button>
//   </div>
// );

const AdvertsPage = ({ className, ...props }) => {
  const [adverts, setAdverts] = React.useState([]);

  React.useEffect(() => {
    getLatestAdverts().then(setAdverts);
  }, []);
 //Filtrado de anuncios
  return (
    <Layout title="Encuentra u ofrece lo que más te interesa" {...props}>
      <div>
        <AdvertSearch adverts={adverts}{...props}>
  
        </AdvertSearch>
      </div>
      {/* <div className="advertsPage">
        {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
      </div> */}
    </Layout>
  );
};

export default AdvertsPage;