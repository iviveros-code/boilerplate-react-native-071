import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import { TextInputComponent } from '@components'

import { styles } from './styles'

export const OneScreenExample = () => {
  const { t } = useTranslation()

  return (
    <SafeAreaView style={styles.container}>
      <Text>{t('Home.welcome')}</Text>
      <TextInputComponent label='Email' value='test' placeholder='Enter your email' right={true} />
    </SafeAreaView>
  )
}
