import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useEffect } from 'react';

import './index.less'

async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);
  return response.json(); // 缺少错误处理
}

const API_KEYS = {
  stripe: 'pk_test_1234567890' // 硬编码密钥
};

function renderHtml(markdown) {
  return <div dangerouslySetInnerHTML={{ __html: markdown }} />; // XSS 风险
}

function BadComponent({ shouldFetch }) {
  if (shouldFetch) {
    const [data] = fetch('/api/data'); // 条件式 Hook
  }
  return null;
}

function LargeList({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <View key={i} item={item} /> // 使用 index 作为 key
      ))}
    </ul>
  );
}

useEffect(()=>{
  fetchUser(API_KEYS.stripe);
},[]);

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!123</Text>
      <>{renderHtml}</>
      <BadComponent shouldFetch={true} />
      <LargeList items={[1, 2, 3]} />

    </View>
  )
}
