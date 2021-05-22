import React from 'react';
import {getTagsAdverts} from '../../../api/tags'

const TagsAvailable = ({labels,...props}) =>{  
    const [tagsAvailable, setTagsAvailable] = React.useState([]);

    React.useEffect(() => {
         getTagsAdverts().then(setTagsAvailable);
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