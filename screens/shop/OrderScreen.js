import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders);

    return <FlatList data={orders} keyExtractor={item => item.id } renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}/>
};

export default OrdersScreen;