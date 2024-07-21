import Colors from '@/constants/Colors'
import { ExpenseType } from '@/types'
import { Feather } from '@expo/vector-icons'
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const getTextColor = (name: string) => {
  if (name === 'Food') {
    return Colors.black
  } else if (name === 'Saving') {
    return Colors.black
  } else {
    return Colors.white
  }
}

export default function ExpenseBlock({
  expenseList,
}: {
  expenseList: ExpenseType[]
}) {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({
    item,
    index,
  }) => {
    if (index == 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              flex: 1,
              borderWidth: 2,
              borderColor: '#666',
              borderStyle: 'dashed',
              borderRadius: 10,
              marginRight: 12,
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Feather name="plus" size={22} color={'#ccc'} />
          </View>
        </TouchableOpacity>
      )
    }

    let amount = item.amount!.split('.')

    return (
      <View
        style={[
          styles.expenseBlock,
          {
            backgroundColor:
              item.name === 'Food'
                ? Colors.blue
                : item.name === 'Saving'
                ? Colors.white
                : Colors.tintColor,
          },
        ]}
      >
        <Text
          style={[
            styles.expenseBlockTxt1,
            {
              color: getTextColor(item.name!),
            },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[styles.expenseBlockTxt2, { color: getTextColor(item.name!) }]}
        >
          ${amount[0]}.
          <Text style={styles.expenseBlockTxt2Span}>{amount[1]}</Text>
        </Text>
        <View style={styles.expenseBlockT3View}>
          <Text
            style={[
              styles.expenseBlockTxt1,
              { color: getTextColor(item.name!) },
            ]}
          >
            {item.percentage}%
          </Text>
        </View>
      </View>
    )
  }

  const staticItem = [{ name: 'Add Item' }]

  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={staticItem.concat(expenseList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  expenseBlock: {
    backgroundColor: Colors.tintColor,
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 12,
    gap: 8,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  expenseBlockTxt1: {
    color: Colors.white,
    fontSize: 14,
  },
  expenseBlockTxt2: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  expenseBlockTxt2Span: {
    fontSize: 12,
    fontWeight: '400',
  },
  expenseBlockT3View: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
})
