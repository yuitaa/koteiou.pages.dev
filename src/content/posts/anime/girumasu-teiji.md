---
title: 「ギルます」の定時を調べてみた
published: 2025-03-31
description: ''
image: '../../../assets/images/girumasu-teiji-1.png'
tags: [JavaScript]
category: 'アニメ'
draft: false
lang: ''
---
夜間、アニメ [『ギルドの受付嬢ですが、残業は嫌なのでボスをソロ討伐しようと思います』](https://girumasu.com/) の公式サイトへアクセスすると、サムネイル画像のように「**本日の営業は終了いたしました**」と表示される。
残業ボタンを押すことでサイトに入ることができる。定時が気になったので調べてみる。

![残業ボタン](@/assets/images/girumasu-teiji-2.png)

ソースを調べてみたところ、`resources/js/base.js` に定時判定をしている部分があった。

```js
// https://girumasu.com/resources/js/base.js
// Line 9-27
$window
  .on('load', () => {
    $body.addClass('is-load');

    Menu.init();
    ModalModule.init();
    Scroll.init();
    ScrollAnimation.init();
    Clock.init();
    Teiji.init();

    setHeight();
  })
  .on('resize', () => {
    setHeight();
  })
  .on('orientationchange', () => {
    setHeight(true);
  });
```

ページ読み込み時に実行されている `Clock.init();` で定時の判定をしている。

``` js
// https://girumasu.com/resources/js/base.js
// Line 341-375
const Clock = {
  date: new Date(),
  time: {
    hour: '00',
    minutes: '00',
  },
  setup() {
    this.teiji();
    this.update();
    setInterval(() => {
      this.update();
    }, 1000);
  },
  update() {
    this.date.setSeconds(this.date.getSeconds() + 1);
    this.time.hour = zeroPadding(this.date.getHours());
    this.time.minutes = zeroPadding(this.date.getMinutes());

    $('[data-clock-hour]').text(this.time.hour);
    $('[data-clock-minutes]').text(this.time.minutes);
    this.teiji();
  },
  teiji() {
    if ($('.js-teiji').length) {
      if (getParameterByName('debug') === 'true' || this.time.hour < 9 || this.time.hour > 18) {
        $body.addClass('is-site-close');
      } else {
        $body.removeClass('is-site-close');
      }
    }
  },
  init() {
    this.setup();
  },
};
```

`getParameterByName('debug') === 'true' || this.time.hour < 9 || this.time.hour > 18` が真なら定時外という判定らしい。

# 結論
ギルます公式サイトの営業時間は **9:00 ~ 18:59**！！！

ちなみにパラメーターに `debug=true` が付いているなら強制的に定時外という判定になる。

**https://girumasu.com/?debug=true**

↑のリンクでいつでも残業ができる！

<iframe width="560" height="315" src="https://www.youtube.com/embed/-LhF9SMPa80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**<p style="text-align:center">- 完 -</p>**