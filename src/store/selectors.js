export const getIsLogged = state => state.auth;

export const getAdverts = state => 
    state.adverts.sort((t1, t2) =>{
        if(t1.updateAt < t2.updateAt) return 1;
        return -1;
    });
export const getAdvertsLoaded = state => state.adverts.length;

export const getUi = state => state.ui;

export const getTags = state => state.tags;
export const getTagsLoaded = state => state.tags.length;