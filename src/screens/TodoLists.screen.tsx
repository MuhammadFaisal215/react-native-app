import React from 'react';
import type { PropsWithChildren } from 'react';
import { FlatList, Text, View, TextInput, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type listsTypeProps = PropsWithChildren<{
    lists: any,
    handleCheckbox: any,
    handleRemoveItem: any,
    handleAddItem: any,
}>

function TodoListsScreen({ lists, handleCheckbox, handleRemoveItem, handleAddItem }: listsTypeProps): JSX.Element {
    return <View style={{ backgroundColor: '#000000', alignItems: "flex-start", justifyContent: 'center', paddingTop: 30 }}>
        <View>
            <TextInput
                placeholder="Type to enter"
                onEndEditing={(e:any) => { handleAddItem(e.nativeEvent.text); e.target.clear() }}
            />
        </View>
        <View>
            <FlatList
                data={lists}
                renderItem={({ item, index }) =>
                    <ListViewComponent key={index} item={item}
                        index={index} handleCheckbox={handleCheckbox} handleRemoveItem={handleRemoveItem} />}
            />
        </View>
    </View>
}

function ListViewComponent({ item, index, handleCheckbox, handleRemoveItem }: any): JSX.Element {
    return (
        <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
            <CheckBox
                disabled={false}
                value={item.isChecked}
                onValueChange={() => handleCheckbox(index)}
                style={{ alignSelf: 'center' }}
            />
            <Text style={{ color: '#ffffff', alignSelf: 'center' }}>{item.name}</Text>
            <Pressable
                style={{ backgroundColor: 'red', marginLeft: 'auto', marginRight: 10, paddingVertical: 5, paddingHorizontal: 10 }}
                onPress={() => handleRemoveItem(index)}>
                <Text style={{ color: '#ffffff' }}>X</Text>
            </Pressable>
        </View>
    );
}

export default TodoListsScreen