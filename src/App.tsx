import { Link, Outlet, ScrollRestoration, createBrowserRouter, useNavigate } from 'react-router-dom'

export const router = createBrowserRouter([{
  path : '/',
  Component : App,
  children : [
    { index: true,          Component: Top         },
    { path: '/members',     Component: Members     },
    { path: '/MaruOCircle', Component: MaruOCircle },
    { path: '/Kuroclef',    Component: Kuroclef    },
    { path: '/HCl_H2O',     Component: HCl_H2O     },
    { path: '/Rain_ms',     Component: Rain_ms     },
    { path: '/Dpsoba',      Component: Dpsoba      },
    { path: '/COCOLO',      Component: COCOLO      },
    { path: '/Mismi',       Component: Mismi       },
    { path: '/Erupa',       Component: Erupa       },
    { path: '/YuragiMione', Component: YuragiMione },
    { path: '/CeylonChai',  Component: CeylonChai  },
  ]
}])

export function App() {
  const navigate = useNavigate()

  document.querySelectorAll('header a').forEach((a) => {
    a.addEventListener('click', () => navigate(a.id, { replace : (a.id === window.location.pathname) }))
  })

  return (
    <>
      <Outlet/>
      <ScrollRestoration/>
    </>
  )
}

function Top() {
  return (
    <>
      <h2>MintSisters とは！？</h2>
      <p>「mio3io」様制作の3Dモデル、「薄荷」ちゃんの魅力を広めるため、薄荷ちゃんユーザーによって結成された薄荷ちゃんの非公式アイドルグループです！！</p>
      <Events/>
    </>
  )
}

type Birthday = {
  date       : Date
  daysUntil  : number
  hoursUntil : number
  type       : 'Birthday'
  name       : string
  id         : string
}

type Gathering = {
  date       : Date
  daysUntil  : number
  hoursUntil : number
  type       : 'Gathering'
  title      : string
  group      : string
  id         : string
}

type Radio = {
  date       : Date
  daysUntil  : number
  hoursUntil : number
  type       : 'Radio'
  episode    : number
  id         : string
}

type Event = Birthday | Gathering | Radio

function Events() {
  const events : Event[] = [
    { date : new Date('2026-12-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 71, id : '' },
    { date : new Date('2026-12-24T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '揺美園', id : 'YuragiMione' },
    { date : new Date('2026-12-17T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'Rain_ms', id : 'Rain_ms' },
    { date : new Date('2026-12-15T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'エルパ', id : 'Erupa' },
    { date : new Date('2026-12-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 70, id : '' },
    { date : new Date('2026-11-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 69, id : '' },
    { date : new Date('2026-11-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 68, id : '' },
    { date : new Date('2026-10-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 67, id : '' },
    { date : new Date('2026-10-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 66, id : '' },
    { date : new Date('2026-09-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 65, id : '' },
    { date : new Date('2026-09-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 64, id : '' },
    { date : new Date('2026-08-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 63, id : '' },
    { date : new Date('2026-08-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 62, id : '' },
    { date : new Date('2026-08-06T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '要山くろね', id : 'kuroclef' },
    { date : new Date('2026-08-03T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'MaruOCircle', id : 'MaruOCircle' },
    { date : new Date('2026-07-26T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'COCOLO*', id : 'COCOLO' },
    { date : new Date('2026-07-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 61, id : 'hqpBbTncm9E' },
    { date : new Date('2026-07-14T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Gathering', title : '6周年記念 薄荷ちゃん集会', group : '薄荷ちゃんの集い', id : 'HAKKA.0791' },
    { date : new Date('2026-07-14T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '薄荷ちゃん', id : '' },
    { date : new Date('2026-07-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 60, id : 'HptYyfF7kJM' },
    { date : new Date('2026-06-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 59, id : 'E0zWZlAvq9w' },
    { date : new Date('2026-06-20T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Gathering', title : '薄荷ちゃん集会', group : '薄荷ちゃんの集い', id : 'HAKKA.0791' },
    { date : new Date('2026-06-14T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'うすいえんさん', id : 'HCl_H2O' },
    { date : new Date('2026-06-13T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '雨季', id : 'CeylonChai' },
    { date : new Date('2026-06-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 58, id : 'DC-ZKshkoXI' },
    { date : new Date('2026-05-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 57, id : '6Wt3pCOiTMA' },
    { date : new Date('2026-05-14T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'Dpsoba', id : 'Dpsoba' },
    { date : new Date('2026-05-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 56, id : 'xh25XjrqhpE' },
    { date : new Date('2026-04-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 55, id : 'VufN7WL8ZQI' },
    { date : new Date('2026-04-18T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Gathering', title : '薄荷ちゃん集会', group : '薄荷ちゃんの集い', id : 'HAKKA.0791' },
    { date : new Date('2026-04-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 54, id : 'JVn9x9IbCSU' },
    { date : new Date('2026-03-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 53, id : '_7KjGBECzpE' },
    { date : new Date('2026-03-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 52, id : '9yK4eVXbv-U' },
    { date : new Date('2026-02-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 51, id : 'b5S7XT0cg5k' },
    { date : new Date('2026-02-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 50, id : 'Je8xVhOIEbE' },
    { date : new Date('2026-01-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 49, id : 'sdZOBKU4aK4' },
    { date : new Date('2026-01-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 48, id : 'RAd3NVUKTMY' },
    { date : new Date('2025-12-25T21:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 47, id : 'a-iwUXNbEyM' },
    { date : new Date('2025-12-24T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '揺美園', id : 'YuragiMione' },
    { date : new Date('2025-12-17T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'Rain_ms', id : 'Rain_ms' },
    { date : new Date('2025-12-15T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'エルパ', id : 'Erupa' },
    { date : new Date('2025-12-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 46, id : 'G1NarLMGqwY' },
    { date : new Date('2025-11-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 45, id : 'JLUm6dWc4Ds' },
    { date : new Date('2025-11-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 44, id : 'oUcOiJvnjnI' },
    { date : new Date('2025-10-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 43, id : 'RCRPZz2NxvE' },
    { date : new Date('2025-10-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 42, id : 'XQWoj_83-bg' },
    { date : new Date('2025-09-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 41, id : 'WPf2BDcKlms' },
    { date : new Date('2025-09-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 40, id : 'BVpbhDLAAh0' },
    { date : new Date('2025-08-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 39, id : '9O1T3J4CM0g' },
    { date : new Date('2025-08-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 38, id : 'NYpndUe1TpU' },
    { date : new Date('2025-08-06T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '要山くろね', id : 'kuroclef' },
    { date : new Date('2025-08-03T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'MaruOCircle', id : 'MaruOCircle' },
    { date : new Date('2025-07-26T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'COCOLO*', id : 'COCOLO' },
    { date : new Date('2025-07-25T21:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 37, id : 'V3UXzxChsFY' },
    { date : new Date('2025-07-14T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '薄荷ちゃん', id : '' },
    { date : new Date('2025-07-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 36, id : 'b_V533_pOsY' },
    { date : new Date('2025-06-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 35, id : 'dMN7nPUzwpw' },
    { date : new Date('2025-06-14T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'うすいえんさん', id : 'HCl_H2O' },
    { date : new Date('2025-06-13T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '雨季', id : 'CeylonChai' },
    { date : new Date('2025-06-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 34, id : 'sNQ8_QWALXo' },
    { date : new Date('2025-05-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 33, id : '8oZZP0vd7tI' },
    { date : new Date('2025-05-14T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'Dpsoba', id : 'Dpsoba' },
    { date : new Date('2025-05-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 32, id : 'qVooXfTxv7w' },
    { date : new Date('2025-04-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 31, id : 'HPVZavCGd6M' },
    { date : new Date('2025-04-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 30, id : 'OA66djiCAQc' },
    { date : new Date('2025-03-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 29, id : 'YOT9xysSrEw' },
    { date : new Date('2025-03-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 28, id : 'UcsNunEU3dw' },
    { date : new Date('2025-02-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 27, id : '8Xyr6ch_-3I' },
    { date : new Date('2025-02-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 26, id : 'cWsv2II-EFE' },
    { date : new Date('2025-01-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 25, id : '939ARPl3uVo' },
    { date : new Date('2025-01-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 24, id : 'bOvsiY_LvbA' },
    { date : new Date('2024-12-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 23, id : 'TKTLGyIJQgk' },
    { date : new Date('2024-12-24T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '揺美園', id : 'YuragiMione' },
    { date : new Date('2024-12-17T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'Rain_ms', id : 'Rain_ms' },
    { date : new Date('2024-12-15T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'エルパ', id : 'Erupa' },
    { date : new Date('2024-12-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 22, id : 'OlHSnNvj3k0' },
    { date : new Date('2024-11-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 21, id : '50mRvH_foKw' },
    { date : new Date('2024-11-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 20, id : 'd7q5HhNdSEY' },
    { date : new Date('2024-10-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 19, id : 'oIYjVQWoEqw' },
    { date : new Date('2024-10-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 18, id : 'ReFTDFa83nw' },
    { date : new Date('2024-09-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 17, id : 'GAGsu5kM8Io' },
    { date : new Date('2024-09-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 16, id : 'eMBmS4VO8Gw' },
    { date : new Date('2024-08-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 15, id : 'ZyXf1yfMjy8' },
    { date : new Date('2024-08-10T21:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 14, id : 'xsa8OHl2dKA' },
    { date : new Date('2024-08-06T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '要山くろね', id : 'kuroclef' },
    { date : new Date('2024-08-03T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'MaruOCircle', id : 'MaruOCircle' },
    { date : new Date('2024-07-26T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'COCOLO*', id : 'COCOLO' },
    { date : new Date('2024-07-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 13, id : 'n0HxxLKhijA' },
    { date : new Date('2024-07-14T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '薄荷ちゃん', id : '' },
    { date : new Date('2024-07-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 12, id : 'KoewlSpMG04' },
    { date : new Date('2024-06-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 11, id : '89WFWnhIpIc' },
    { date : new Date('2024-06-14T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'うすいえんさん', id : 'HCl_H2O' },
    { date : new Date('2024-06-13T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : '雨季', id : 'CeylonChai' },
    { date : new Date('2024-06-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode : 10, id : 'wkfQsPSQAzM' },
    { date : new Date('2024-05-25T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode :  9, id : 'n3H42BQEIuc' },
    { date : new Date('2024-05-14T00:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Birthday', name : 'Dpsoba', id : 'Dpsoba' },
    { date : new Date('2024-05-10T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode :  8, id : '7crIDZ6JyJ8' },
    { date : new Date('2024-04-26T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode :  7, id : 'hDvHnJFRhFQ' },
    { date : new Date('2024-04-12T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode :  6, id : '6Xdf_aH-0-k' },
    { date : new Date('2024-03-29T20:30+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode :  5, id : 'bB_zPsN9gsA' },
    { date : new Date('2024-03-16T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode :  4, id : 'C_nkQ9YaAh4' },
    { date : new Date('2024-03-01T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode :  3, id : 'q-WDGHgO84Q' },
    { date : new Date('2024-02-16T22:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode :  2, id : 'mrau1HMEhZw' },
    { date : new Date('2024-02-02T21:00+09:00'), daysUntil : 0, hoursUntil : 0, type : 'Radio', episode :  1, id : 'mFr3iY8Ou80' },
  ]

  const now = new Date()

  events.forEach((event) => {
    event.daysUntil  = Math.ceil((event.date.getTime() - now.getTime()) / 86400000)
    event.hoursUntil = Math.ceil((event.date.getTime() - now.getTime()) /  3600000)
  })

  const detailsNowOn = events.filter((event) => (event.daysUntil === 0))
                             .filter((event) => (event.hoursUntil === 0) || (event.type === 'Birthday'))
                             .map((event)    => <DetailsNowOn { ...event }/>)

  const details      = events.filter((event) => (Math.abs(event.daysUntil) <= 20))
                             .map((event)    => <Details { ...event }/>)

  return (
    <>
      {(detailsNowOn.length !== 0) ? <h2>開催中のイベント</h2> : ''}{detailsNowOn}
      <h2>ニュース</h2>{details}
    </>
  )
}

function DetailsNowOn(event : Event) {
  if (event.type === 'Birthday') {
    const path = (id:String) => id ? `/${id}` : '/'

    return (
      <>
        <p>
          今日は <Link to={path(event.id)}>{event.name}</Link> の誕生日です。<br/>
          おめでとうヘケ！
        </p>
      </>
    )
  }

  if (event.type === 'Gathering') {
    const url = (id:String) => id ? `https://vrc.group/${id}` : 'https://vrchat.com/home'

    return (
      <>
        <p>
          <a href={url(event.id)}>{event.group}</a> グループにて<br/>
          {event.title} 開催中です！是非ご来場ください。
        </p>
      </>
    )
  }

  if (event.type === 'Radio') {
    const url = (id:String) => id ? `https://www.youtube.com/live/${id}` : 'https://www.youtube.com/@MintSisters/streams'

    return (
      <>
        <p>
          <a href={url(event.id)}>第{event.episode}回ミンシスラジオ</a><br/>
          配信中です！是非ご視聴ください。
        </p>
      </>
    )
  }
}

function Details(event : Event) {
  if (event.type === 'Birthday') {
    const at   = (d:Date)    => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日(${'日月火水木金土'[d.getDay()]})`
    const path = (id:String) => id ? `/${id}` : '/'

    return (
      <>
        <dl>
          <dt>{at(event.date)}</dt>
          <dd><Link to={path(event.id)}>{event.name}</Link> の誕生日です。</dd>
        </dl>
      </>
    )
  }

  if (event.type === 'Gathering') {
    const at  = (d:Date)    => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日(${'日月火水木金土'[d.getDay()]}) ${d.getHours()}時`
    const url = (id:String) => id ? `https://vrc.group/${id}` : 'https://vrchat.com/home'

    return (
      <>
        <dl>
          <dt>{at(event.date)}</dt>
          <dd><a href={url(event.id)}>{event.group}</a> グループにて</dd>
          <dd>{event.title} が開催されま{(event.hoursUntil >= 0) ? 'す' : 'した'}。</dd>
        </dl>
      </>
    )
  }

  if (event.type === 'Radio') {
    const at  = (d:Date)    => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日(${'日月火水木金土'[d.getDay()]}) ${d.getHours()}時`
    const url = (id:String) => id ? `https://www.youtube.com/live/${id}` : 'https://www.youtube.com/@MintSisters/streams'

    return (
      <>
        <dl>
          <dt>{at(event.date)}</dt>
          <dd><a href={url(event.id)}>第{event.episode}回ミンシスラジオ</a> を配信しま{(event.hoursUntil >= 0) ? 'す' : 'した'}。</dd>
        </dl>
      </>
    )
  }
}

function Members() {
  const navigate = useNavigate()

  return (
    <>
      <h2>MintSisters のメンバー</h2>
      <img src="/assets/members.png" alt="" width="1000" height="1350" loading="lazy" useMap="#members"/>
      <map name="members">
        <area shape="rect" coords="0,0,199,674"      title="MaruOcircle"    onClick={() => navigate('/MaruOCircle')}/>
        <area shape="rect" coords="200,0,399,674"    title="要山くろね"     onClick={() => navigate('/Kuroclef')}/>
        <area shape="rect" coords="400,0,599,674"    title="うすいえんさん" onClick={() => navigate('/HCl_H2O')}/>
        <area shape="rect" coords="600,0,799,674"    title="Rain_ms"        onClick={() => navigate('/Rain_ms')}/>
        <area shape="rect" coords="800,0,999,674"    title="Dpsoba"         onClick={() => navigate('/Dpsoba')}/>
        <area shape="rect" coords="0,675,199,1349"   title="COCOLO*"        onClick={() => navigate('/COCOLO')}/>
        <area shape="rect" coords="200,675,399,1349" title="みすみ"         onClick={() => navigate('/Mismi')}/>
        <area shape="rect" coords="400,675,599,1349" title="エルパ"         onClick={() => navigate('/Erupa')}/>
        <area shape="rect" coords="600,675,799,1349" title="揺美園"         onClick={() => navigate('/YuragiMione')}/>
        <area shape="rect" coords="800,675,999,1349" title="雨季"           onClick={() => navigate('/CeylonChai')}/>
      </map>
    </>
  )
}

function MaruOCircle() {
  return (
    <>
      <img src="/assets/01maru320.png" alt="" width="320" height="1080" loading="lazy"/>
      <div className="MaruOCircle">
        <h2>MaruOcircle</h2>
        <table>
          <tbody>
            <tr>
              <td>誕生日</td>
              <td>8月3日</td>
            </tr>
            <tr>
              <td>イメージカラー</td>
              <td>白鼠 #E6E6E6</td>
            </tr>
            <tr>
              <td>好きな食べ物</td>
              <td>スパゲッティ</td>
            </tr>
            <tr>
              <td>チャームポイント</td>
              <td>めがね、おだんご</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function Kuroclef() {
  return (
    <>
      <img src="/assets/02kuroclef320.png" alt="" width="320" height="1080" loading="lazy"/>
      <div className="Kuroclef">
        <h2>要山くろね</h2>
        <table>
          <tbody>
            <tr>
              <td>誕生日</td>
              <td>8月6日</td>
            </tr>
            <tr>
              <td>イメージカラー</td>
              <td>真紅 #DC143C</td>
            </tr>
            <tr>
              <td>好きな食べ物</td>
              <td>カレーライス、ラーメン</td>
            </tr>
            <tr>
              <td>チャームポイント</td>
              <td>赤いカチューシャ、前髪ぱっつん<br/>ポニーテール</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function HCl_H2O() {
  return (
    <>
      <img src="/assets/03usui320.png" alt="" width="320" height="1080" loading="lazy"/>
      <div className="HCl_H2O">
        <h2>うすいえんさん</h2>
        <table>
          <tbody>
            <tr>
              <td>誕生日</td>
              <td>6月14日</td>
            </tr>
            <tr>
              <td>イメージカラー</td>
              <td>空色 #C0FFEE</td>
            </tr>
            <tr>
              <td>好きな食べ物</td>
              <td>おすし、バニラアイス、カフェオレ</td>
            </tr>
            <tr>
              <td>チャームポイント</td>
              <td>こあくまアクセサリー</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function Rain_ms() {
  return (
    <>
      <img src="/assets/04rain320.png" alt="" width="320" height="1080" loading="lazy"/>
      <div className="Rain_ms">
        <h2>Rain_ms</h2>
        <table>
          <tbody>
            <tr>
              <td>誕生日</td>
              <td>12月17日</td>
            </tr>
            <tr>
              <td>イメージカラー</td>
              <td>呂色 #0C0C0C</td>
            </tr>
            <tr>
              <td>好きな食べ物</td>
              <td>ラーメン、刺身、ベビーカステラ</td>
            </tr>
            <tr>
              <td>チャームポイント</td>
              <td>目隠れ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function Dpsoba() {
  return (
    <>
      <img src="/assets/05soba320.png" alt="" width="320" height="1080" loading="lazy"/>
      <div className="Dpsoba">
        <h2>Dpsoba</h2>
        <table>
          <tbody>
            <tr>
              <td>誕生日</td>
              <td>5月14日</td>
            </tr>
            <tr>
              <td>イメージカラー</td>
              <td>群青 #005BAA</td>
            </tr>
            <tr>
              <td>好きな食べ物</td>
              <td>蕎麦、油そば、塩焼きそば</td>
            </tr>
            <tr>
              <td>チャームポイント</td>
              <td>人魚、ルーズサイドテール<br/>アイテクスチャ、ベレー帽、眼鏡</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function COCOLO() {
  return (
    <>
      <img src="/assets/06cocolo320.png" alt="" width="320" height="1080" loading="lazy"/>
      <div className="COCOLO">
        <h2>COCOLO*</h2>
        <table>
          <tbody>
            <tr>
              <td>誕生日</td>
              <td>7月26日</td>
            </tr>
            <tr>
              <td>イメージカラー</td>
              <td>浅葱 #00FFFF</td>
            </tr>
            <tr>
              <td>好きな食べ物</td>
              <td>カレーライス</td>
            </tr>
            <tr>
              <td>チャームポイント</td>
              <td>髪色、メガネ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function Mismi() {
  return (
    <>
      <img src="/assets/07mismi320.png" alt="" width="320" height="1080" loading="lazy"/>
      <div className="Mismi">
        <h2>みすみ</h2>
        <table>
          <tbody>
            <tr>
              <td>誕生日</td>
              <td>ナイショ&#x2728;&#xFE0F;</td>
            </tr>
            <tr>
              <td>イメージカラー</td>
              <td>濃紅 #9F2040</td>
            </tr>
            <tr>
              <td>好きな食べ物</td>
              <td>チョコレート、桃、 蕎麦、寿司</td>
            </tr>
            <tr>
              <td>チャームポイント</td>
              <td>メガネ&#x2764;&#xFE0F;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function Erupa() {
  return (
    <>
      <img src="/assets/09erupa320.png" alt="" width="320" height="1080" loading="lazy"/>
      <div className="Erupa">
        <h2>エルパ</h2>
        <table>
          <tbody>
            <tr>
              <td>誕生日</td>
              <td>12月15日</td>
            </tr>
            <tr>
              <td>イメージカラー</td>
              <td>桃色 #F58F98</td>
            </tr>
            <tr>
              <td>好きな食べ物</td>
              <td>にく&#x2764;&#xFE0F;</td>
            </tr>
            <tr>
              <td>チャームポイント</td>
              <td>クラゲ&#x2764;&#xFE0F;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function YuragiMione() {
  return (
    <>
      <img src="/assets/10mione320.png" alt="" width="320" height="1080" loading="lazy"/>
      <div className="YuragiMione">
        <h2>揺美園</h2>
        <table>
          <tbody>
            <tr>
              <td>誕生日</td>
              <td>12月24日</td>
            </tr>
            <tr>
              <td>イメージカラー</td>
              <td>縹色 #0086AD</td>
            </tr>
            <tr>
              <td>好きな食べ物</td>
              <td>牛丼、ラーメン、チョコのお菓子&#x1f3b6;&#xFE0F;</td>
            </tr>
            <tr>
              <td>チャームポイント</td>
              <td>猫耳、ポニーテール、涙メガネ&#x1f495;&#xFE0F;&#x1f453;&#xFE0F;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

function CeylonChai() {
  return (
    <>
      <img src="/assets/11uki320.png" alt="" width="320" height="1080" loading="lazy"/>
      <div className="CeylonChai">
        <h2>雨季</h2>
        <table>
          <tbody>
            <tr>
              <td>誕生日</td>
              <td>6月13日</td>
            </tr>
            <tr>
              <td>イメージカラー</td>
              <td>瑠璃紺 #19448E</td>
            </tr>
            <tr>
              <td>好きな食べ物</td>
              <td>生魚、ベーグル、スコーン、紅茶</td>
            </tr>
            <tr>
              <td>チャームポイント</td>
              <td>紺髪、ジト目</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
