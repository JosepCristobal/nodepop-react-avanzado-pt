import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
//import {getTagsAdverts} from '../../../api/tags'

import { tagsLoadAction} from '../../../store/actions';

import { getTags } from '../../../store/selectors';

const TagsAvailable = ({labels,...props}) =>{  
    //const [tagsAvailable, setTagsAvailable] = React.useState([]);
    const dispatch = useDispatch();
    const tagsAvailable = useSelector(getTags)
    React.useEffect(() => {
        dispatch(tagsLoadAction());
        //getTagsAdverts().then(setTagsAvailable);
    }, []);

    const Data = tagsAvailable,
            MakeItem = function(X) {
                return <option key={X} value = {X}>{capitalize(X)}</option>;
            };

    return(
        <div>
            <p>{labels}</p>
            <select name='category' multiple={true}  {...props}>{Data.map(MakeItem)}</select>
        </div>
    )

}
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export default TagsAvailable;