import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.less'

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
    const [data] = useFetch('/api/data'); // 条件式 Hook
  }
  return null;
}

function LargeList({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <ListItem key={i} item={item} /> // 使用 index 作为 key
      ))}
    </ul>
  );
}

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
