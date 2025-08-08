// --------- 纯 JS MD5 函数 ---------

function md5cycle(x, k) {
  let [a, b, c, d] = x;

  a = ff(a, b, c, d, k[0], 7, -680876936);
  d = ff(d, a, b, c, k[1], 12, -389564586);
  c = ff(c, d, a, b, k[2], 17, 606105819);
  b = ff(b, c, d, a, k[3], 22, -1044525330);
  a = ff(a, b, c, d, k[4], 7, -176418897);
  d = ff(d, a, b, c, k[5], 12, 1200080426);
  c = ff(c, d, a, b, k[6], 17, -1473231341);
  b = ff(b, c, d, a, k[7], 22, -45705983);
  a = ff(a, b, c, d, k[8], 7, 1770035416);
  d = ff(d, a, b, c, k[9], 12, -1958414417);
  c = ff(c, d, a, b, k[10], 17, -42063);
  b = ff(b, c, d, a, k[11], 22, -1990404162);
  a = ff(a, b, c, d, k[12], 7, 1804603682);
  d = ff(d, a, b, c, k[13], 12, -40341101);
  c = ff(c, d, a, b, k[14], 17, -1502002290);
  b = ff(b, c, d, a, k[15], 22, 1236535329);

  a = gg(a, b, c, d, k[1], 5, -165796510);
  d = gg(d, a, b, c, k[6], 9, -1069501632);
  c = gg(c, d, a, b, k[11], 14, 643717713);
  b = gg(b, c, d, a, k[0], 20, -373897302);
  a = gg(a, b, c, d, k[5], 5, -701558691);
  d = gg(d, a, b, c, k[10], 9, 38016083);
  c = gg(c, d, a, b, k[15], 14, -660478335);
  b = gg(b, c, d, a, k[4], 20, -405537848);
  a = gg(a, b, c, d, k[9], 5, 568446438);
  d = gg(d, a, b, c, k[14], 9, -1019803690);
  c = gg(c, d, a, b, k[3], 14, -187363961);
  b = gg(b, c, d, a, k[8], 20, 1163531501);
  a = gg(a, b, c, d, k[13], 5, -1444681467);
  d = gg(d, a, b, c, k[2], 9, -51403784);
  c = gg(c, d, a, b, k[7], 14, 1735328473);
  b = gg(b, c, d, a, k[12], 20, -1926607734);

  a = hh(a, b, c, d, k[5], 4, -378558);
  d = hh(d, a, b, c, k[8], 11, -2022574463);
  c = hh(c, d, a, b, k[11], 16, 1839030562);
  b = hh(b, c, d, a, k[14], 23, -35309556);
  a = hh(a, b, c, d, k[1], 4, -1530992060);
  d = hh(d, a, b, c, k[4], 11, 1272893353);
  c = hh(c, d, a, b, k[7], 16, -155497632);
  b = hh(b, c, d, a, k[10], 23, -1094730640);
  a = hh(a, b, c, d, k[13], 4, 681279174);
  d = hh(d, a, b, c, k[0], 11, -358537222);
  c = hh(c, d, a, b, k[3], 16, -722521979);
  b = hh(b, c, d, a, k[6], 23, 76029189);
  a = hh(a, b, c, d, k[9], 4, -640364487);
  d = hh(d, a, b, c, k[12], 11, -421815835);
  c = hh(c, d, a, b, k[15], 16, 530742520);
  b = hh(b, c, d, a, k[2], 23, -995338651);

  a = ii(a, b, c, d, k[0], 6, -198630844);
  d = ii(d, a, b, c, k[7], 10, 1126891415);
  c = ii(c, d, a, b, k[14], 15, -1416354905);
  b = ii(b, c, d, a, k[5], 21, -57434055);
  a = ii(a, b, c, d, k[12], 6, 1700485571);
  d = ii(d, a, b, c, k[3], 10, -1894986606);
  c = ii(c, d, a, b, k[10], 15, -1051523);
  b = ii(b, c, d, a, k[1], 21, -2054922799);
  a = ii(a, b, c, d, k[8], 6, 1873313359);
  d = ii(d, a, b, c, k[15], 10, -30611744);
  c = ii(c, d, a, b, k[6], 15, -1560198380);
  b = ii(b, c, d, a, k[13], 21, 1309151649);
  a = ii(a, b, c, d, k[4], 6, -145523070);
  d = ii(d, a, b, c, k[11], 10, -1120210379);
  c = ii(c, d, a, b, k[2], 15, 718787259);
  b = ii(b, c, d, a, k[9], 21, -343485551);

  x[0] = add32(a, x[0]);
  x[1] = add32(b, x[1]);
  x[2] = add32(c, x[2]);
  x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
  a = add32(add32(a, q), add32(x, t));
  return add32((a << s) | (a >>> (32 - s)), b);
}
function ff(a, b, c, d, x, s, t) {
  return cmn((b & c) | (~b & d), a, b, x, s, t);
}
function gg(a, b, c, d, x, s, t) {
  return cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}
function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
}

function md51(s) {
  let n = s.length;
  let state = [1732584193, -271733879, -1732584194, 271733878];
  let i;
  for (i = 64; i <= n; i += 64) {
    md5cycle(state, md5blk(s.substring(i - 64, i)));
  }
  s = s.substring(i - 64);
  let tail = new Array(16).fill(0);
  for (i = 0; i < s.length; i++)
    tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
  tail[i >> 2] |= 0x80 << ((i % 4) << 3);
  if (i > 55) {
    md5cycle(state, tail);
    tail = new Array(16).fill(0);
  }
  tail[14] = n * 8;
  md5cycle(state, tail);
  return state;
}

function md5blk(s) {
  let md5blks = [];
  for (let i = 0; i < 64; i += 4) {
    md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) +
      (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
  }
  return md5blks;
}

function rhex(n) {
  const hex_chr = '0123456789abcdef';
  let s = '', j = 0;
  for (; j < 4; j++)
    s += hex_chr.charAt((n >> (j * 8 + 4)) & 0x0F) +
      hex_chr.charAt((n >> (j * 8)) & 0x0F);
  return s;
}

function md5(s) {
  let arr = md51(s);
  return rhex(arr[0]) + rhex(arr[1]) + rhex(arr[2]) + rhex(arr[3]);
}

function add32(a, b) {
  return (a + b) & 0xFFFFFFFF;
}



// 统一定义设备地址
const deviceHost = "192.168.1.1";
const deviceBaseUrl = `http://${deviceHost}`;
const $ = new Env(`欧本流量查询`);
$.ouben_dev_no = $.getdata("ouben_dev_no");

(async () => {
  ////console.log("📦 从 BoxJS 读取的 ouben_dev_no:", $.ouben_dev_no);
  const timestamp = Date.now();
  const authUrl = `${deviceBaseUrl}/login.cgi?_=${timestamp}`;

  const req = {
    url: authUrl,
    method: "GET",
    timeout: 3 * 1000, // 设置超时时间为3秒
  };

  try {
    const res = await $task.fetch(req);

    const authHeader = res.headers["Www-Authenticate"];

    if (!authHeader || !authHeader.includes("Digest")) {
      ////console.log("❌ 未获取到有效的 Digest 验证头，非目标设备，脚本终止");
      //$.msg("🔍 跳过执行", "", "当前网络下无法访问目标设备");
      $.done({});
      return;
    }

    // 提取认证参数
    let realm = null, nonce = null, qop = null;
    const parts = authHeader.split(",");
    parts.forEach(part => {
      part = part.trim();
      if (part.startsWith("Digest realm=")) {
        realm = part.split("=")[1].replace(/"/g, "");
      } else if (part.startsWith("nonce=")) {
        nonce = part.split("=")[1].replace(/"/g, "");
      } else if (part.startsWith("qop=")) {
        qop = part.split("=")[1].replace(/"/g, "");
      }
    });

    if (!realm || !nonce || !qop) {
      //console.log("❌ 认证参数提取失败");
      $.done({});
      return;
    }

    //console.log("✅ 提取认证参数:");
    //console.log(`realm: ${realm}`);
    //console.log(`nonce: ${nonce}`);
    //console.log(`qop: ${qop}`);

    const username = "admin";
    const password = "admin";
    const method = "GET";
    const uri = "/cgi/protected.cgi";
    const nc = "00000001";

    //console.log("开始计算md5...");
    const cnonce = md5(timestamp.toString()).substr(0, 16);
    //console.log(`cnonce的md5计算完成: ${cnonce}`);

    const ha1 = md5(`${username}:${realm}:${password}`);
    const ha2 = md5(`${method}:${uri}`);
    const responseHash = md5(`${ha1}:${nonce}:${nc}:${cnonce}:${qop}:${ha2}`);

    const loginUrl = `${deviceBaseUrl}/login.cgi?Action=Digest` +
      `&username=${username}` +
      `&realm=${realm}` +
      `&nonce=${nonce}` +
      `&response=${responseHash}` +
      `&qop=${qop}` +
      `&cnonce=${cnonce}` +
      `&temp=marvell` +
      `&_=${timestamp}`;

    //console.log("📡 登录请求地址:");
    //console.log(loginUrl);

    const authorization = `Digest username="${username}", realm="${realm}", nonce="${nonce}", uri="${uri}", response="${responseHash}", qop=${qop}, nc=${nc}, cnonce="${cnonce}"`;

    //console.log("📡 authorization:");
    //console.log(authorization);

    const loginRes = await $task.fetch({
      url: loginUrl,
      method: "GET",
      headers: {
        "Authorization": authorization,
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1",
        "Referer": `${deviceBaseUrl}/index.html`,
        "Accept": "*/*",
        "X-Requested-With": "XMLHttpRequest",
        "Accept-Language": "zh-cn",
        "Accept-Encoding": "gzip, deflate",
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "Pragma": "no-cache",
        "Connection": "keep-alive",
        "Cookie": "nav=0"
      }
    });

    if (loginRes.statusCode === 200) {
      //console.log("✅ 登录成功！");

      const ts = Date.now();
      const statusUrl = `${deviceBaseUrl}/xml_action.cgi?method=get&module=duster&file=json_status_info${ts}`;

      const statusReq = {
        url: statusUrl,
        method: "GET",
        headers: {
          "Authorization": authorization,
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1",
          "Referer": `${deviceBaseUrl}/index.html`,
          "Accept": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate",
          "Cache-Control": "no-store, no-cache, must-revalidate",
          "Pragma": "no-cache",
          "Connection": "keep-alive",
          "Cookie": "nav=0"
        }
      };

      try {
        const statusRes = await $task.fetch(statusReq);

        if (statusRes.statusCode === 200) {
          //console.log("✅ 状态获取成功 ↓↓↓");

          try {
            const json = JSON.parse(statusRes.body);
            //console.log("📦 JSON 结构 ↓↓↓");
            //console.log(JSON.stringify(json, null, 2));

            function formatUptime(seconds) {
              const h = Math.floor(seconds / 3600);
              const m = Math.floor((seconds % 3600) / 60);
              const s = seconds % 60;
              return `${h}小时 ${m}分钟 ${s}秒`;
            }

            const battery = json.battery_percent;
            const charging = json.battery_charging === "1" ? "🟢 正在充电" : "🔴 未充电";
            const signal = json.signal_quality;
            const rssi = json.rssi;
            const uptime = formatUptime(parseInt(json.run_seconds || "0"));



            if (!$.ouben_dev_no) {
              $.msg("📡 MIFI 监控", "", "❌ 未配置 dev_no，请到 BoxJS 中填写");
              $.done();
            }

            const cardRes = await $task.fetch({
              url: "http://dongle.ruijiadashop.cn/api/Card/loginCard",
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                dev_no: $.ouben_dev_no
              }),
              timeout: 3000
            });

            //console.log("📡 卡信息响应 ↓↓↓");
            //console.log(cardRes.body);

            const cardData = JSON.parse(cardRes.body);

            if (cardData.code !== 1 || !cardData.data) {
              //console.log("❌ 卡信息接口返回异常");
              return null;
            }

            const reportTime = cardData.data.equipment?.reportTime || "未知";
            const remainMB = cardData.data.remainAmount
              ? (parseFloat(cardData.data.remainAmount) / 1024).toFixed(2)
              : "未知";



            const summary =
              `🔋 电量: ${battery}%\n` +
              `${charging}\n` +
              `📶 信号强度: ${signal} / RSSI: ${rssi}\n` +
              `⌛ 运行时长: ${uptime}\n` +
              `⏰ 报告时间: ${reportTime}\n` +
              `💾 剩余流量: ${remainMB} MB`;

            //console.log("📢 状态通知 ↓↓↓");
            //console.log(summary);

            $.msg("📡 设备状态", "", summary);

          } catch (e) {
            //console.log("⚠️ 返回内容不是合法 JSON");
            $.msg("状态获取失败", "", "返回内容无法解析 JSON");
          }
        } else {
          //console.log("状态请求失败，状态码:", statusRes.statusCode);
          //console.log(statusRes.body);
        }
      } catch (err) {
        //console.log("获取状态时出错:");
        //console.log(JSON.stringify(err, null, 2));
      }
    } else {
      //console.log("登录失败，状态码:", loginRes.statusCode);
      $.msg("登录失败", "", `状态码: ${loginRes.statusCode}`);
    }

    $.done({});
  } catch (err) {
    //console.log("执行失败:");
    try {
      if (typeof err === "string") {
        //console.log("错误字符串:", err);
      } else if (err instanceof Error) {
        //console.log("错误对象:", err.message);
      } else {
        //console.log("错误详情:", JSON.stringify(err, null, 2));
      }
    } catch (innerErr) {
      //console.log("无法解析错误信息");
    }
    $.done({});
  }
})();
/**
 * @description 创建一个名为 Env 的构造函数，用于处理环境相关操作。
 * @param {string} name - 环境名称
 */
function Env(name) {
  // 判断当前环境是否为 Loon
  const isLoon = typeof $loon !== "undefined";
  // 判断当前环境是否为 Surge
  const isSurge = typeof $httpClient !== "undefined" && !isLoon;
  // 判断当前环境是否为 QuantumultX
  const isQX = typeof $task !== "undefined";

  // 定义 read 方法，用于读取数据
  const read = (key) => {
    if (isLoon || isSurge) return $persistentStore.read(key);
    if (isQX) return $prefs.valueForKey(key);
  };

  // 定义 write 方法，用于写入数据
  const write = (key, value) => {
    if (isLoon || isSurge) return $persistentStore.write(key, value);
    if (isQX) return $prefs.setValueForKey(key, value);
  };

  // 定义 notice 方法，用于发送通知
  const notice = (title, subtitle, message, url) => {
    if (isLoon) $notification.post(title, subtitle, message, url);
    if (isSurge) $notification.post(title, subtitle, message, { url });
    if (isQX) $notify(title, subtitle, message, { "open-url": url });
  };

  // 定义 get 方法，用于发送 GET 请求
  const get = (url, callback) => {
    if (isLoon || isSurge) $httpClient.get(url, callback);
    if (isQX) {url.method = `GET`; $task.fetch(url).then((resp) => callback(null, {}, resp.body))};
  };

  // 定义 post 方法，用于发送 POST 请求
  const post = (url, callback) => {
    if (isLoon || isSurge) $httpClient.post(url, callback);
    if (isQX) {url.method = `POST`; $task.fetch(url).then((resp) => callback(null, {}, resp.body))};
  };

  // 定义 put 方法，用于发送 PUT 请求
  const put = (url, callback) => {
    if (isLoon || isSurge) $httpClient.put(url, callback)
    if (isQX) {url.method = 'PUT'; $task.fetch(url).then((resp) => callback(null, {}, resp.body))};
  };

  // 定义 toObj 方法，用于将字符串转为对象
  const toObj = (str) => JSON.parse(str);

  // 定义 toStr 方法，用于将对象转为字符串
  const toStr = (obj) => JSON.stringify(obj);

  // 定义 queryStr 方法，用于将对象转为可以请求的字符串
  const queryStr = (obj, str) => {
    return Object.keys(obj)
      .map(key => `${key}=${obj[key]}`)
      .join('&');
  };

  const cookieStr = (obj) => {
    return Object.keys(obj)
      .map(key => `${key}=${obj[key]}`)
      .join('; ');
  }

  // 定义 log 方法，用于输出日志
  const log = (message) => console.log(message);

  // 定义 done 方法，用于结束任务
  const done = (value = {}) => $done(value);

  // 返回包含所有方法的对象
  return { name, read, write, notice, get, post, put, toObj, toStr, queryStr, cookieStr, log, done };
}