import React from 'react';
import Layout from '../../layout/Layout';
import './AdvertDetailPage.css';
import Photo from '../../shared/Photo';
import { Redirect, useParams} from 'react-router-dom';
import { Button  } from '../../shared';
import { advertsDetailAction, advertDeledAction } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertDetailSelector, getAdvertDetail, getUi} from '../../../store/selectors'
import defaultPhoto from '../../../assets/2574831-200.png'

// const AdvertDetailPage = ({ className, ...props }) =>{
// const AdvertDetailPage = ({ ...props }) =>{
function AdvertDetailPage() {
  const { advertId } = useParams();
  //const { match } = props;
  
  //const advertId = match.params.advertId

  console.log('Id del anuncio: ',advertId)
  //const ad2 = useSelector(getAdvertDetailSelector(advertId));
  const ad = useSelector(state=>getAdvertDetail(state,advertId));
  //console.log('Resultado de ad2: ', ad2)

  const dispatch = useDispatch();
  
  React.useEffect(()=>{
    dispatch(advertsDetailAction(advertId)); 
    console.log('Hemos pasado por el useEffect')
  },[dispatch, advertId]);
 

  const { loading, error } = useSelector(getUi);
  const handlerDelete = async (idAdvert) =>{
    alert(`Va a borrar el registro núm. ${idAdvert}`)
    try {
      const advertDel = await dispatch(advertDeledAction(idAdvert))
      console.log ('En delete AdvertDel', advertDel)
    } catch (error) {
      console.log(error)
    }
  }

  const baseUrlPhoto =`${process.env.REACT_APP_API_BASE_URL}`;

  //TODO Repasarlo
  if (error && error.status === 404) {
      return <Redirect to="/404" />;
  }

  //if (!ad) return <Redirect to="/" />;
  
  console.log('El anuncio que se ha encontrado: ',ad)
  return (
    <Layout title="Detalle del anuncio" >
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