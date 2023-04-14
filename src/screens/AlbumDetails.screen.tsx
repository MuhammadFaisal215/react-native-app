import React from 'react';
import type { PropsWithChildren } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

interface AlbumDetailsInterface {
    albumId: Number,
    id: Number,
    title: string,
    url: string,
    thumbnailUrl: string,
}
type AlbumDetailsScreenProps = PropsWithChildren<{
    albumPhotos: AlbumDetailsInterface[]
}>

function AlbumDetailsScreen({ albumPhotos }: AlbumDetailsScreenProps): JSX.Element {
    return (
        <View style={styles.container}>
            <FlatList
                data={albumPhotos}
                renderItem={({ item, index }) => <CardViewComponent key={index} details={item} />}
                numColumns={2}
            />
        </View>
    )
}

function CardViewComponent({ details }: any): JSX.Element {
    return (
        <View style={styles.card}>
            <Image source={{ uri: details.thumbnailUrl }} style={styles.image} />
            <Text style={styles.name}>{details.title} </Text>
        </View>
    );
}

export default AlbumDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        margin: 10,
        width: '43%',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#666',
    }
});

