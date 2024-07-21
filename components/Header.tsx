import Colors from '@/constants/Colors'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/250?u=12' }}
            style={styles.userImg}
          />
          <View style={styles.userTextWrapper}>
            <Text style={[styles.userText, { fontSize: 12 }]}>Hi, Jenny</Text>
            <Text style={[styles.userText, { fontSize: 16 }]}>
              Your <Text style={styles.boldText}>Budget</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.black },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userInfoWrapper: { flexDirection: 'row', alignItems: 'center' },
  userImg: { height: 50, width: 50, borderRadius: 30 },
  buttonWrapper: {
    borderColor: '#666',
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: { color: Colors.white, fontSize: 12 },
  userTextWrapper: { marginLeft: 10 },
  userText: {
    color: Colors.white,
  },
  boldText: {
    fontWeight: '700',
  },
})
