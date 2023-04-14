import React from 'react';
import AlbumDetailsScreen from '../screens/AlbumDetails.screen';
import { getPhotosByAlbum } from '../services/Albums.service';
import { useSelector, useDispatch } from 'react-redux';
import { saveAlbumDetail } from '../stores/reducers/albumDetailReducer';

function AlbumDetailsContainer({ route }: any): JSX.Element {
    const dispatch = useDispatch();
    const albumPhotos = useSelector((state:any)=>state.albumDetail)
    const { albumId } = route.params;
    React.useEffect(() => {
        getPhotosByAlbum(albumId).then(res => {
            dispatch(saveAlbumDetail(res.data))
        }).catch(err => {
            console.log('err', err)
        })
    }, [])

    return (
        <AlbumDetailsScreen albumPhotos={albumPhotos} />
    );
}

export default AlbumDetailsContainer;
