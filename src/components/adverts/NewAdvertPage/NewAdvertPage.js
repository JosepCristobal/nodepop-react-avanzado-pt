import React from 'react';
import './NewAdvertPage.css';
import Layout from '../../layout/Layout';
import NewAdvertForm from './NewAdvertForm';
import { getUi } from '../../../store/selectors'
import './NewAdvertPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { advertCreatedAction } from '../../../store/actions';

const NewAdvertPage = props => {
  const dispatch = useDispatch();
  
  const { error } = useSelector(getUi);

  const handleSubmit = async newAdvert => {
    const advert = await dispatch(advertCreatedAction(newAdvert));
  };
  
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
