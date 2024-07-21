import Colors from '@/constants/Colors'
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native'
import { IncomeType } from '@/types'
import {
  DollarIcon,
  WalletAddMoneyIcon,
  WalletCardIcon,
} from '@/constants/Icons'
import { Feather } from '@expo/vector-icons'

export default function IncomeBlock({
  incomeList,
}: {
  incomeList: IncomeType[]
}) {
  const renderItem: ListRenderItem<IncomeType> = ({ item, index }) => {
    let icon = <DollarIcon width={22} height={22} color={Colors.white} />

    if (item.name === 'Freelancing') {
      icon = <WalletCardIcon width={22} height={22} color={Colors.white} />
    } else if (item.name === 'Interest') {
      icon = <WalletAddMoneyIcon width={22} height={22} color={Colors.white} />
    }

    const amount = item.amount.split('.')
    return (
      <View
        style={{
          backgroundColor: Colors.grey,
          padding: 20,
          borderRadius: 20,
          marginRight: 15,
          width: 150,
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              borderColor: '#666',
              borderWidth: 1,
              borderRadius: 50,
              padding: 5,
              alignSelf: 'flex-start',
            }}
          >
            {icon}
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="more-horizontal" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: Colors.white }}>{item.name}</Text>
        <Text style={{ color: Colors.white, fontSize: 18, fontWeight: 600 }}>
          ${amount[0]}.
          <Text style={{ fontSize: 12, fontWeight: 400 }}>{amount[1]}</Text>
        </Text>
      </View>
    )
  }
  return (
    <View>
      <Text style={{ color: Colors.white, fontSize: 16, marginBottom: 20 }}>
        My <Text style={{ fontWeight: 700 }}>Income</Text>
      </Text>

      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
