import React from 'react'
import { SafeAreaView } from 'react-native'

import { TextInputComponent } from '@components'

import { styles } from './styles'

export const OneScreenExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInputComponent label='Email' value='test' placeholder='Enter your email' right={true} />
    </SafeAreaView>
  )
}
