/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "General",
    sites: [
      {
        title: "Blog1",
        description: "博客主站",
        url: "https://blog.trageek.com",
        icon: "/icons/blog.trageek.jpg",

      },
      {
        title: "Blog2",
        description: "博客备用站点",
        url: "https://blog.itvoyager.us",
        icon: "https://imgbed-idk.pages.dev/file/1762654383670_done-hub-idk.onrender.ico",
      },
      {
        title: "Monitor1",
        description: "服务监控1号",
        url: "https://monitor.itvoyager.us",
      },
      {
        title: "Monitor2",
        description: "服务监控2号",
        url: "https://uptimer.trageek.com/status/idkbungle",
      },
    ],
  },
  {
    title: "AI&LLM",
    sites: [
      {
        title: "OpenWebui",
        description: "开源自托管AI平台",
        url: "https://idktangle-openllm.hf.space",
      },
      {
        title: "Gemini-Chat",
        description: "私有化 Gemini 应用",
        url: "https://gemini-chat-idk.vercel.app",
      },
      {
        title: "Gemini-Balance",
        description: "Gemini API 代理轮询系统",
        url: "https://gemini-balance-idk.onrender.com",
      },
      {
        title: "GPT-Load",
        description: "LLM API 接口透明代理服务",
        url: "https://gpt-load-idk.onrender.com",
      },
      {
        title: "Veloera",
        description: "LLM API 接口聚合管理网关系统",
        url: "https://veloera-idk.onrender.com",
      },
      {
        title: "Done-Hub",
        description: "OpenAI 接口聚合管理与二次分发",
        url: "https://done-hub-idk.onrender.com",
      },
      {
        title: "API-Tracker",
        description: "OpenAl API链路溯源，检测API中转",
        url: "https://api-tracker.itvoyager.us",
      },
      {
        title: "Nano-Banana",
        description: "Nano-Banana改图修图",
        url: "https://nano-bananana.pages.dev",
      },
      {
        title: "Gemini-Play",
        description: "Gemini多模态对话",
        url: "https://gemini-play-idk.deno.dev",
      },
      {
        title: "Siliconflow-STT-TTS",
        description: "音频转录校准工具",
        url: "https://siliconflow-stt-idk.onrender.com",
      },
      {
        title: "Voicehub",
        description: "AI 语音服务（STT, TTS)",
        url: "https://voicehub.trageek.com",
      },
      {
        title: "Libre-TTS",
        description: "OpenAI, Edge TTS与STT",
        url: "https://libre-tts.trageek.com",
      },
      {
        title: "TTSFM",
        description: "openai.fm逆向TTS",
        url: "https://ttsfm-idk.onrender.com",
      },
    ],
  },
  {
    title: "Web-Tools",
    sites: [
      {
        title: "Resend-Pool",
        description: "Resend批量发送邮件系统",
        url: "https://resend-pool.pages.dev",
      },
      {
        title: "ZuzUrl",
        description: "短链接服务",
        url: "https://sau.us.kg",
      },
      {
        title: "HubProxy",
        description: "GitHub & Docker加速",
        url: "https://hubproxy-idk.onrender.com",
      },
      {
        title: "Cors-Anywhere",
        description: "前端跨域请求代理",
        url: "https://cors-anywhere-idk.onrender.com",
      },
      {
        title: "It-Tools",
        description: "在线IT工具箱",
        url: "https://it-tools-idk.onrender.com",
      },
      {
        title: "MS-Email",
        description: "Microsoft Oauth2API",
        url: "https://ms-email-latest.onrender.com",
      },
      {
        title: "SearXNG",
        description: "开放元搜索引擎",
        url: "https://searxng-idk.onrender.com",
      },
      {
        title: "LibreSearch",
        description: "开源元搜索引擎2",
        url: "https://libresearch-idk.onrender.com",
      },
      {
        title: "MusicTool",
        description: "Navidrom歌单同步",
        url: "https://musictool-web-idk.onrender.com",
      },
      {
        title: "Smart-Mermaid",
        description: "AI思维导图",
        url: "https://smart-mermaid-idk.onrender.com",
      },
      {
        title: "LRC-API",
        description: "歌词匹配API",
        url: "https://lrcapi-idk.onrender.com",
      },
      {
        title: "CookieCloud",
        description: "cookie跨浏览器跨设备传输",
        url: "https://cookiecloud-idk.onrender.com",
      },
      {
        title: "Pansou-UI",
        description: "网盘资源搜索API",
        url: "https://pansou-ui-idk.vercel.app",
      },
      {
        title: "EasyNode",
        description: "Linux 服务器Web SSH管理面板",
        url: "https://neobungle-en.hf.space",
      },
      {
        title: "Nodecrypt",
        description: "端到端加密聊天室",
        url: "https://nodecrypt.lichensheng.workers.dev",
      },
      {
        title: "Outlook-Helper",
        description: "微软Oauth2API收件",
        url: "https://outlook-helper.pages.dev",
      },
      {
        title: "Outlook-Helper-Batch",
        description: "微软Oauth2API批量收件",
        url: "https://outlook-helper-batch.pages.dev",
      },
    ],
  },
  {
    title: "Show",
    sites: [
      {
        title: "Meow-Pics",
        description: "沉浸式猫系瀑布流",
        url: "https://meow-pics.pages.dev",
      },
      {
        title: "Advanced-En-6TH",
        description: "高级英语课文解析",
        url: "https://advanced-en-6th.pages.dev",
      },
      {
        title: "OpenList",
        description: "聚合网盘服务",
        url: "https://ebsoabbcsrma.us-west-1.clawcloudrun.com",
      },
      {
        title: "MoonTV",
        description: "跨平台的影视聚合播放器",
        url: "https://moontv-idk.onrender.com",
      },
      {
        title: "Navidrome",
        description: "音樂串流伺服器服務",
        url: "https://idkbunglle-navi.hf.space",
      },
    ],
  },
  {
    title: "E-Mail Services",
    sites: [
      {
        title: "WR.DO",
        description: "一站式域名服务平台（短链生成、子域名托管、无限邮箱）",
        url: "https://hissor.dpdns.org",
      },
      {
        title: "Cloud-Mail",
        description: "cloudflare邮局之cloud-mail",
        url: "https://email.trageek.com",
      },
      {
        title: "Cloudflare_temp_email",
        description: "cloudflare邮局之Cloudflare_temp_email",
        url: "https://email.itvoyager.us",
      },
      {
        title: "Moemail",
        description: "cloudflare邮局之Moemail",
        url: "https://moemail-6-23.pages.dev",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Idk's Landing Page",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.trageek.com",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/idkbungle",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "Idk's Landing Page",
    keywords: "Blog, Index, Landing Page",
    description: "This is my personal website landing page.",
  },
};

export default GLOBAL_CONFIG;
