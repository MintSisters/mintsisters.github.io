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
    { path: "/news",        Component: News        }
  ]
}])

export function App() {
  const navigate = useNavigate()
  document.querySelectorAll('header a').forEach((a) => {
    a.addEventListener('click', () => navigate(a.id))
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
              <td>白鼠</td>
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
              <td>真紅</td>
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
              <td>空色</td>
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
              <td>呂色</td>
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
              <td>群青</td>
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
              <td>浅葱</td>
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
              <td>濃紅</td>
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
              <td>桃色</td>
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
              <td>縹色</td>
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
              <td>瑠璃紺</td>
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

function News() {
  return (
    <>
      <h2>News</h2>
      <p>「mio3io」様制作の3Dモデル、「薄荷」ちゃんの魅力を広めるため、薄荷ちゃんユーザーによって結成された薄荷ちゃんの非公式アイドルグループです！！</p>
    </>
  )
}
