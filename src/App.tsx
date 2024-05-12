import { useState } from 'react'

function App() {
  enum Scene { Top, Profile, News }

  const [ scene, setScene ] = useState(Scene.Top)

  document.querySelectorAll('a').forEach((a) => {
    if (a.id === '') return
    a.onclick = () => setScene(Scene[a.id as keyof typeof Scene])
  })

  return [ top(), profile(), news() ][scene]
}

function top() {
  return (
    <>
      <p>「mio3io」様制作の3Dモデル、「薄荷」ちゃんの魅力を広めるため、薄荷ちゃんユーザーによって結成された薄荷ちゃんの非公式アイドルグループです！！</p>
    </>
  )
}

function profile() {
  return (
    <>
      <p>Profile</p>
      <p>「mio3io」様制作の3Dモデル、「薄荷」ちゃんの魅力を広めるため、薄荷ちゃんユーザーによって結成された薄荷ちゃんの非公式アイドルグループです！！</p>
    </>
  )
}

function news() {
  return (
    <>
      <p>News</p>
      <p>「mio3io」様制作の3Dモデル、「薄荷」ちゃんの魅力を広めるため、薄荷ちゃんユーザーによって結成された薄荷ちゃんの非公式アイドルグループです！！</p>
    </>
  )
}

export default App
