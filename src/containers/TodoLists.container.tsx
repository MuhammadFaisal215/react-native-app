import React from 'react';
import type { PropsWithChildren } from 'react';
import TodoListsScreen from '../screens/TodoLists.screen';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, toggleCheck } from '../stores/reducers/todoReducer';
import { createTodo, deleteTodo, toggleTodo } from '../stores/actions/todoActions';
import { Dispatch } from 'redux';

type TodoListsContainerProps = PropsWithChildren<{
    navigation: any,
}>
function TodoListsContainer({ navigation }: TodoListsContainerProps): JSX.Element {
    const dispatch = useDispatch();
    const lists = useSelector((state: any) => state.todos)

    const _handleCheckbox = (index: number) => dispatch(toggleTodo(index));

    const _handleRemoveItem = (index: number) => dispatch(deleteTodo(index));

    const _handleAddItem = (value: string) => dispatch(createTodo(value));

    return (
        <>
            <TodoListsScreen
                lists={lists}
                handleCheckbox={_handleCheckbox}
                handleRemoveItem={_handleRemoveItem}
                handleAddItem={_handleAddItem}
            />
        </>
    )
}
export default TodoListsContainer;