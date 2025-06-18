import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useEffect } from 'react';

import './index.less'

// 写一个 定时器
function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <Text>Timer is running...</Text>;
}

export default function Index() {

  return (
    <View className='index'>
    <Timer />
    </View>
  )
}
