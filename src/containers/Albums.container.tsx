import React from 'react';
import AlbumsScreen from '../screens/Albums.screen';
import { getAllAlbums } from '../services/Albums.service';
import { useSelector, useDispatch } from 'react-redux';
import { saveAllAlbums } from '../stores/reducers/albumReducer';

function AlbumsContainer({navigation}:any): JSX.Element {
    const dispatch = useDispatch();
    const allAlbums = useSelector((state:any)=>state.allAlbums)
    React.useEffect(() => {
        getAllAlbums().then(res => {
            dispatch(saveAllAlbums(res.data))
        }).catch(err => {
            console.log('err', err)
        })
    }, [])
    return (
        <AlbumsScreen allAlbums={allAlbums} navigation={navigation}/>
    )
}

export default AlbumsContainer