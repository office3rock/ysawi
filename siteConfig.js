module.exports = {
  siteUrl: "https://{REPO_NAME}.com", // Site domain. Do not include a trailing slash!

  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: "{REPO_NAME}.com", // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta:
    "{REPO_NAME}.com", // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "{REPO_NAME}.com", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: "favicon.png", // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: "#e9e9e9", // Used for Offline Manifest
  themeColor: "#15171A", // Used for Offline Manifest
  apiUrl: "https://wordpress.theasdfghjkl.com",
  subscribeWidget: {
    visible: false,
    title: "{REPO_NAME}.com",
    helpText: "Stay updated",
    successMessage: "Thank you The message was sent successfully",
  },
  header: {
    navigation: [
      {
        label: "Homepage",
        url: "https://{REPO_NAME}.com/",
      },
      {
        label: "Contact",
        url: "https:/{REPO_NAME}.com/contact",
      },
    ],
  },
  footer: {
    copyright: "All rights reserved",
    navigation: [
      {
        label: "Homepage",
        url: "https://{REPO_NAME}.com/",
      },
      {
        label: "Sitemap",
        url: "https://{REPO_NAME}.com/sitemap.xml",
      },
      
      {
        label: "Contact",
        url: "https://{REPO_NAME}.com/contact",
      },
              
    ],
  },
  socialLinks: {
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    github: "",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact Built with Draftbox",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "{REPO_NAME}.com",
    description:
      "{REPO_NAME}.com",
  },
  twitterCard: {
    title: "",
    description:
      "",
    imageUrl: "twitterImage.png",
    username: "@DraftboxHQ",
  },
  facebookCard: {
    title: "yarokaz",
    description:
      "Lightning fast, 1t on Gatsby.",
    imageUrl: "facebookImage.png",
    appId: "2391725224459953",
  },
  siteTitle: "{REPO_NAME}.com",
  siteDescription:
    "{REPO_NAME}.com",
  language: "he",
  logoUrl: "",
  iconUrl: "",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "",
  themeConfig: {
    variables: [
      {
        varName: "--primary-color",
        value: `#2b6cb0`,
      },
      {
        varName: "--primary-color-active",
        value: `#2a4365`,
      },
      {
        varName: "--primary-color-light",
        value: `#bee3f8`,
      },
      {
        varName: "--sans-font",
        value: `"Assistant"`,
      },
      {
        varName: "--sans-font-normal",
        value: `400`,
      },
      {
        varName: "--sans-font-medium",
        value: `500`,
      },
      {
        varName: "--sans-font-semibold",
        value: `600`,
      },
      {
        varName: "--sans-font-bold",
        value: `700`,
      },
      {
        varName: "--serif-font",
        value: `Assistant`,
      },
      { varName: "--serif-font-light", value: `400` },
      { varName: "--serif-font-normal", value: `400` },
      { varName: "--serif-font-medium", value: `400` },
      { varName: "--serif-font-bold", value: `700` },
    ],
    fonts: [
      {
        family: "Assistant",
        variants: ["400", "500", "600", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
            {
        family: "Assistant",
        variants: ["400", "500", "600", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        //fontDisplay: "swap",
        //strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Assistant",
        variants: ["300", "400", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
