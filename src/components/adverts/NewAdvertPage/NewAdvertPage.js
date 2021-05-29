import React from 'react';
import './NewAdvertPage.css';
import Layout from '../../layout/Layout';
import NewAdvertForm from './NewAdvertForm';
//import { createAdvertPhoto } from '../../../api/adverts';
import { getUi } from '../../../store/selectors'
import './NewAdvertPage.css';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { advertCreatedAction } from '../../../store/actions';

const NewAdvertPage = props => {
  //const [error, setError] = React.useState(null);
  //const [createdAdvert, setCreatedAdvert] = React.useState(null);
  const dispatch = useDispatch();
  
  const { error } = useSelector(getUi);
  

  const handleSubmit = async newAdvert => {
    const advert = await dispatch(advertCreatedAction(newAdvert));
    //setCreatedAdvert(advert);
    //try {
        //const advert = await createAdvertPhoto(newAdvert);
        //dispatch(advertsCreated(advert));
        //setCreatedAdvert(advert);
    //} catch (error) {
      //setError(true);
    //}
  };
  

  // if (error && error.status === 401) {
  //   return <Redirect to="/login" />;
  // }

  // if (createdAdvert) {
  //   return <Redirect to={`/adverts/${createdAdvert.id}`} />;
  // }

  return (
    <Layout title="Nuevo anuncio, suerte en tu operación" {...props}>
      <div className="newAdvertPage bordered" style={{ borderBottomWidth: 10 }}>
        <div className="right">
          <NewAdvertForm onSubmit={handleSubmit} />
        </div>
      </div>
    </Layout>
  );
};

export default NewAdvertPage;
