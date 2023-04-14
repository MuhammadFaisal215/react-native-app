import React from 'react';
import type { PropsWithChildren } from 'react';
import { FlatList, View, Button } from 'react-native';

interface allAbumsInterface {
    id: Number,
    userId: Number,
    title: string,
}
type AlbumsScreenProps = PropsWithChildren<{
    allAlbums: allAbumsInterface[],
    navigation: any,
}>

function AlbumsScreen({ allAlbums, navigation }: AlbumsScreenProps): JSX.Element {
    return (
        <View>
            <FlatList data={allAlbums}
                renderItem={({ item }: any) =>
                    <View>
                        <Button
                            title={`#${item.id} - ${item.title}`}
                            color={'green'}
                            onPress={() => navigation.navigate('Albums/Details', {albumId: item.id}) }
                        />

                    </View>
                }
            />
        </View>
    );
}

export default AlbumsScreen