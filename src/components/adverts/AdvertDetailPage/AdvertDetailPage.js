import React, { useEffect } from 'react';
import Layout from '../../layout/Layout';
import './AdvertDetailPage.css';
import Photo from '../../shared/Photo';
import { getAdvertDetail, deleteAdvert } from '../../../api/adverts';
import { Redirect, useHistory } from 'react-router';
import { Button  } from '../../shared';
import defaultPhoto from '../../../assets/2574831-200.png'

const AdvertDetailPage = ({ className, ...props }) =>{
    const[ad,setAd] = React.useState({advert: {}, error:null})
    const { match } = props;
  useEffect(()=>{
    getAdvertDetail(match.params.advertId)
      .then(adv => setAd(adv))
      .catch(error => setAd({error}));
  },[]);

const history = useHistory();
const handlerDelete = async (idAdvert) =>{
  alert(`Va a borrar el registro núm. ${idAdvert}`)
  try {
    const advertDel = await deleteAdvert(idAdvert);
    console.log (advertDel)
  } catch (error) {
    console.log(error)
  }
  history.push("/");
}

const baseUrlPhoto =`${process.env.REACT_APP_API_BASE_URL}`;
if (ad.error && ad.error.status === 404) {
  console.log(ad.error)
    return <Redirect to="/404" />;
  }
  return (
    <Layout title="Detalle del anuncio" {...props}>
    <div>
      <Photo src={ad.photo ?baseUrlPhoto+ad.photo: defaultPhoto} className="advert-centerImg advert-imgWidth" />
    </div>
    <div>
      <p>Descripción: {ad.name}</p>
      <p>Tipo: {ad.sale ? 'Venta':'Compra'}</p>
      <p>Precio: {ad.price}</p>
      <p>Categoría: {ad.tags}</p>
      <p>Publicado el: {ad.createdAt}</p>
      <Button
            className="loginForm-submit"
            variant="primary"
            onClick={()=>{ window.confirm('Realmente quiere borrar este registro?')?handlerDelete(ad.id):console.log('No borrar')}}>
            Delete
        </Button>
    </div>
  </Layout>
  );
}
export default AdvertDetailPage;