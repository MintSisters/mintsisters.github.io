import { Outlet, ScrollRestoration, createBrowserRouter, useNavigate } from 'react-router-dom'

export const router = createBrowserRouter([{
  path: "/",
  Component: App,
  children: [
    { index: true,          Component: Top         },
    { path: "/members",     Component: Members     },
    { path: "/MaruOCircle", Component: MaruOCircle },
    { path: "/Kuroclef",    Component: Kuroclef    },
    { path: "/HCl_H2O",     Component: HCl_H2O     },
    { path: "/Rain_ms",     Component: Rain_ms     },
    { path: "/Dpsoba",      Component: Dpsoba      },
    { path: "/COCOLO",      Component: COCOLO      },
    { path: "/Mismi",       Component: Mismi       },
    { path: "/Erupa",       Component: Erupa       },
    { path: "/YuragiMione", Component: YuragiMione },
    { path: "/CeylonChai",  Component: CeylonChai  },
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
      <h2>ニュース</h2>
      <Radio/>
    </>
  )
}

function Radio() {
  const history = [
    { date : new Date('2024-02-02T21:00+09:00'), url : 'https://www.youtube.com/live/mFr3iY8Ou80' }, // #1
    { date : new Date('2024-02-16T22:00+09:00'), url : 'https://www.youtube.com/live/mrau1HMEhZw' }, // #2
    { date : new Date('2024-03-01T22:00+09:00'), url : 'https://www.youtube.com/live/q-WDGHgO84Q' }, // #3
    { date : new Date('2024-03-16T22:00+09:00'), url : 'https://www.youtube.com/live/C_nkQ9YaAh4' }, // #4
    { date : new Date('2024-03-29T20:30+09:00'), url : 'https://www.youtube.com/live/bB_zPsN9gsA' }, // #5
    { date : new Date('2024-04-12T22:00+09:00'), url : 'https://www.youtube.com/live/6Xdf_aH-0-k' }, // #6
    { date : new Date('2024-04-26T22:00+09:00'), url : 'https://www.youtube.com/live/hDvHnJFRhFQ' }, // #7
    { date : new Date('2024-05-10T22:00+09:00'), url : 'https://www.youtube.com/live/7crIDZ6JyJ8' }, // #8
    { date : new Date('2024-05-25T22:00+09:00'), url : 'https://www.youtube.com/live/n3H42BQEIuc' }, // #9
    { date : new Date('2024-06-10T22:00+09:00'), url : 'https://www.youtube.com/live/wkfQsPSQAzM' }, // #10
    { date : new Date('2024-06-25T22:00+09:00'), url : 'https://www.youtube.com/live/89WFWnhIpIc' }, // #11
    { date : new Date('2024-07-10T22:00+09:00'), url : 'https://www.youtube.com/live/KoewlSpMG04' }, // #12
    { date : new Date('2024-07-25T22:00+09:00'), url : 'https://www.youtube.com/live/n0HxxLKhijA' }, // #13
    { date : new Date('2024-08-10T21:00+09:00'), url : 'https://www.youtube.com/live/xsa8OHl2dKA' }, // #14
    { date : new Date('2024-08-25T22:00+09:00'), url : 'https://www.youtube.com/live/ZyXf1yfMjy8' }, // #15
    { date : new Date('2024-09-10T22:00+09:00'), url : 'https://www.youtube.com/live/eMBmS4VO8Gw' }, // #16
    { date : new Date('2024-09-25T22:00+09:00'), url : 'https://www.youtube.com/live/GAGsu5kM8Io' }, // #17
    { date : new Date('2024-10-10T22:00+09:00'), url : 'https://www.youtube.com/live/ReFTDFa83nw' }, // #18
    { date : new Date('2024-10-25T22:00+09:00'), url : 'https://www.youtube.com/live/oIYjVQWoEqw' }, // #19
    { date : new Date('2024-11-10T22:00+09:00'), url : 'https://www.youtube.com/live/d7q5HhNdSEY' }, // #20
    { date : new Date('2024-11-25T22:00+09:00'), url : 'https://www.youtube.com/live/50mRvH_foKw' }, // #21
    { date : new Date('2024-12-10T22:00+09:00'), url : 'https://www.youtube.com/live/OlHSnNvj3k0' }, // #22
    { date : new Date('2024-12-25T22:00+09:00'), url : 'https://www.youtube.com/live/TKTLGyIJQgk' }, // #23
    { date : new Date('2025-01-10T22:00+09:00'), url : 'https://www.youtube.com/live/bOvsiY_LvbA' }, // #24
    { date : new Date('2025-01-25T22:00+09:00'), url : 'https://www.youtube.com/live/939ARPl3uVo' }, // #25
    { date : new Date('2025-02-10T22:00+09:00'), url : 'https://www.youtube.com/live/cWsv2II-EFE' }, // #26
    { date : new Date('2025-02-25T22:00+09:00'), url : 'https://www.youtube.com/live/8Xyr6ch_-3I' }, // #27
    { date : new Date('2025-03-10T22:00+09:00'), url : 'https://www.youtube.com/live/UcsNunEU3dw' }, // #28
    { date : new Date('2025-03-25T22:00+09:00'), url : 'https://www.youtube.com/live/YOT9xysSrEw' }, // #29
    { date : new Date('2025-04-10T22:00+09:00'), url : 'https://www.youtube.com/live/OA66djiCAQc' }, // #30
    { date : new Date('2025-04-25T22:00+09:00'), url : 'https://www.youtube.com/live/HPVZavCGd6M' }, // #31
    { date : new Date('2025-05-10T22:00+09:00'), url : 'https://www.youtube.com/live/qVooXfTxv7w' }, // #32
    { date : new Date('2025-05-25T22:00+09:00'), url : 'https://www.youtube.com/live/8oZZP0vd7tI' }, // #33
    { date : new Date('2025-06-10T22:00+09:00'), url : 'https://www.youtube.com/live/sNQ8_QWALXo' }, // #34
    { date : new Date('2025-06-25T22:00+09:00'), url : 'https://www.youtube.com/live/dMN7nPUzwpw' }, // #35
    { date : new Date('2025-07-10T22:00+09:00'), url : 'https://www.youtube.com/live/b_V533_pOsY' }, // #36
    { date : new Date('2025-07-25T21:00+09:00'), url : 'https://www.youtube.com/live/V3UXzxChsFY' }, // #37
    { date : new Date('2025-08-10T22:00+09:00'), url : 'https://www.youtube.com/live/NYpndUe1TpU' }, // #38
    { date : new Date('2025-08-25T22:00+09:00'), url : 'https://www.youtube.com/live/9O1T3J4CM0g' }, // #39
    { date : new Date('2025-09-10T22:00+09:00'), url : 'https://www.youtube.com/live/BVpbhDLAAh0' }, // #40
    { date : new Date('2025-09-25T22:00+09:00'), url : 'https://www.youtube.com/live/WPf2BDcKlms' }, // #41
    { date : new Date('2025-10-10T22:00+09:00'), url : 'https://www.youtube.com/live/XQWoj_83-bg' }, // #42
    { date : new Date('2025-10-25T22:00+09:00'), url : 'https://www.youtube.com/live/RCRPZz2NxvE' }, // #43
    { date : new Date('2025-11-10T22:00+09:00'), url : 'https://www.youtube.com/live/oUcOiJvnjnI' }, // #44
    { date : new Date('2025-11-25T22:00+09:00'), url : 'https://www.youtube.com/live/JLUm6dWc4Ds' }, // #45
    { date : new Date('2025-12-10T22:00+09:00'), url : 'https://www.youtube.com/live/G1NarLMGqwY' }, // #46
    { date : new Date('2025-12-25T21:00+09:00'), url : 'https://www.youtube.com/live/a-iwUXNbEyM' }, // #47
    { date : new Date('2026-01-10T22:00+09:00'), url : 'https://www.youtube.com/live/RAd3NVUKTMY' }, // #48
    { date : new Date('2026-01-25T22:00+09:00'), url : 'https://www.youtube.com/live/sdZOBKU4aK4' }, // #49
    { date : new Date('2026-02-10T22:00+09:00'), url : 'https://www.youtube.com/live/Je8xVhOIEbE' }, // #50
    { date : new Date('2026-02-25T22:00+09:00'), url : 'https://www.youtube.com/live/b5S7XT0cg5k' }, // #51
    { date : new Date('2026-03-10T22:00+09:00'), url : 'https://www.youtube.com/live/9yK4eVXbv-U' }, // #52
    { date : new Date('2026-03-25T22:00+09:00'), url : 'https://www.youtube.com/live/_7KjGBECzpE' }, // #53
    { date : new Date('2026-04-10T22:00+09:00'), url : 'https://www.youtube.com/live/JVn9x9IbCSU' }, // #54
    { date : new Date('2026-04-25T22:00+09:00'), url : 'https://www.youtube.com/live/VufN7WL8ZQI' }, // #55
    { date : new Date('2026-05-10T22:00+09:00'), url : 'https://www.youtube.com/live/xh25XjrqhpE' }, // #56
    { date : new Date('2026-05-25T22:00+09:00'), url : 'https://www.youtube.com/live/6Wt3pCOiTMA' }, // #57
    { date : new Date('2026-06-10T22:00+09:00'), url : 'https://www.youtube.com/live/DC-ZKshkoXI' }, // #58
    { date : new Date('2026-06-25T22:00+09:00'), url : 'https://www.youtube.com/live/E0zWZlAvq9w' }, // #59
    { date : new Date('2026-07-10T22:00+09:00'), url : '' }, // #60
    { date : new Date('2026-07-25T22:00+09:00'), url : '' }, // #61
    { date : new Date('2026-08-10T22:00+09:00'), url : '' }, // #62
    { date : new Date('2026-08-25T22:00+09:00'), url : '' }, // #63
    { date : new Date('2026-09-10T22:00+09:00'), url : '' }, // #64
    { date : new Date('2026-09-25T22:00+09:00'), url : '' }, // #65
    { date : new Date('2026-10-10T22:00+09:00'), url : '' }, // #66
    { date : new Date('2026-10-25T22:00+09:00'), url : '' }, // #67
    { date : new Date('2026-11-10T22:00+09:00'), url : '' }, // #68
    { date : new Date('2026-11-25T22:00+09:00'), url : '' }, // #69
    { date : new Date('2026-12-10T22:00+09:00'), url : '' }, // #70
    { date : new Date('2026-12-25T22:00+09:00'), url : '' }, // #71
  ] as const

  const now = new Date()
  let   i   = 0
  while (history[i + 1].date < now) i++

  const diff = (now.getTime() - history[i].date.getTime()) / 3600000 //hours
  const date = (d:Date) => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日(${'日月火水木金土'[d.getDay()]}) ${d.getHours()}時`

  if (diff < 1) {
    return (
      <>
        <p>
          <a href={history[i].url}>第{i + 1}回ミンシスラジオ</a><br/>
          配信中です！是非ご視聴ください。
        </p>
      </>
    )
  }

  return (
    <>
      <dl>
        <dt>{date(history[i + 1].date)}</dt>
        <dd><a href={history[i + 1].url}>第{i + 2}回ミンシスラジオ</a> を配信します。</dd>
      </dl>
      <dl>
        <dt>{date(history[i].date)}</dt>
        <dd><a href={history[i].url}>第{i + 1}回ミンシスラジオ</a> を配信しました。</dd>
      </dl>
    </>
  )
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
