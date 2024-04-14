export const SAMPLE_VIDEOS = ["https://pub-194d2c0cdee84861a1ef8ddb2c664ec4.r2.dev/1.mp4", "https://pub-194d2c0cdee84861a1ef8ddb2c664ec4.r2.dev/beast.mp4", "https://pub-194d2c0cdee84861a1ef8ddb2c664ec4.r2.dev/hindi-2.mp4", "https://pub-194d2c0cdee84861a1ef8ddb2c664ec4.r2.dev/MKBHD.mp4"];

export const FEATURES = [
  {
    "title": "Auto Subtitles with Trendy Templates",
    "desc": "Automatically generate precise subtitles with a choice of stylish templates, enhancing both readability and aesthetic appeal.",
    "img": "/features/presets.png"
  },
  {
    "title": "Word Highlighting",
    "desc": "Engage your audience with word highlighting that enhances key phrases in subtitles to boost comprehension and retention.",
    "img": "/features/highlight.png"
  },
  {
    "title": "Animated Emojis",
    "desc": "Bring your videos to life with animated emojis that add fun and expressiveness, perfectly synced with your subtitles.",
    "img": "/features/emoji.png"
  },
  {
    "title": "Auto Generated B-rolls",
    "desc": "Automatically integrate B-roll footage to enrich your narrative and keep the viewing experience dynamic and appealing.",
    "img": "/features/broll.png"
  },
  {
    "title": "Eye catching transitions",
    "desc": "Smoothly connect scenes with eye-catching transitions that keep viewers engaged and ensure a seamless flow.",
    "img": "/features/transition.png"
  },
  {
    "title": "Auto Generated Hook Title and Post Content",
    "desc": "Generate captivating hook titles and accompanying post content automatically, optimizing engagement from the first glance.",
    "img": "/features/title.png"
  }
];

export const PRICING_PLANS = [
  {
    price: 0,
    variant: "Free",
    popular: false,
    isMonthly: true,
    features: [
      "3 videos/month",
      "100MB Limit",
      "90 Seconds Duration",
      "1080p Full HD Export",
      "Chat Support",
      "Custom Templates",
    ],
  },
  {
    price: 4.99,
    variant: "Creator",
    popular: true,
    isMonthly: true,
    features: [
      "20 videos/month",
      "300MB Limit",
      "2 Minute Duration",
      "1080p Full HD Export",
      "Custom Templates",
      "1:1 Support",
      "No Watermark",
    ],
  },
  {
    price: 19.99,
    variant: "Creator Plus",
    popular: false,
    isMonthly: true,
    features: [
      "100 videos/month",
      "350MB Limit",
      "3 Minute Duration",
      "4K Export",
      "Custom Templates",
      "1:1 Support",
      "No Watermark",
    ],
  },
  {
    price: 100,
    variant: "Creator Lifetime Deal",
    popular: false,
    isMonthly: false,
    features: [
      "Unlimited Videos",
      "10,000 AI Credits",
      "350MB Limit",
      "3 Minute Duration",
      "4K Export",
      "Custom Templates",
      "1:1 Support",
      "No Watermark",
    ],
  },
];

export const FOOTER_LINKS = {
  Product: [
    { link: "about", title: "About" },
    { link: "features", title: "Features" },
    { link: "pricing", title: "Pricing" },
    { link: "blog", title: "Blog" },
  ],
  Compare: [
    { link: "fireshort-vs-submagic", title: "Fireshort vs Submagic" },
    { link: "fireshort-vs-captions", title: "Fireshort vs Captions" },
    { link: "fireshort-vs-zubtitle", title: "Fireshort vs Zubtitle" },
    { link: "fireshort-vs-opusclip", title: "Fireshort vs OpusClip" },
    { link: "fireshort-vs-vidyoai", title: "Fireshort vs Vidyoai" },
    { link: "fireshort-vs-veed", title: "Fireshort vs Veed" },
    { link: "all-tools", title: "All Tools" },
  ],
  Languages: [
    { link: "add-subtitles-in-english", title: "Add Subtitles in English" },
    { link: "add-subtitles-in-german", title: "Add Subtitles in German" },
    { link: "add-subtitles-in-spanish", title: "Add Subtitles in Spanish" },
    { link: "add-subtitles-in-french", title: "Add Subtitles in French" },
    { link: "add-subtitles-in-hindi", title: "Add Subtitles in Hindi" },
    { link: "add-subtitles-in-hinglish", title: "Add Subtitles in Hinglish" },
    { link: "all-languages", title: "All Languages" },
  ],
  Tools: [
    { link: "add-subtitles-to-video", title: "Add Subtitles to Video" },
    { link: "instagram-caption-generator", title: "Instagram Caption Generator" },
    { link: "youtube-caption-generator", title: "Youtube Caption Generator" },
    { link: "subtitle-downloader", title: "Get Video Subtitles" },
    { link: "tiktok-video-ideas", title: "Tiktok Video Idea Generator" },
    { link: "tiktok-hashtag-generator", title: "Tiktok Hashtag Generator" },
]
};
