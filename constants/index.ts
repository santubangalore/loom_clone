export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    title: "Snapchat Message no-271",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2026-03-12"),
    userImg: "/assets/images/profile_2.png",
    username: "santu",
    views: 10,
    visibility: "public",
    duration: 157,
  },
  {
    id: "2",
    title: "Morning Standup Recap",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2026-03-18"),
    userImg: "/assets/images/profile_1.png",
    username: "arjun",
    views: 48,
    visibility: "public",
    duration: 245,
  },
  {
    id: "3",
    title: "UI Walkthrough: Dashboard Redesign",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2026-02-26"),
    userImg: "/assets/images/profile_3.png",
    username: "meera",
    views: 132,
    visibility: "private",
    duration: 312,
  },
  {
    id: "4",
    title: "Build a React Video Player",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2026-01-05"),
    userImg: "/assets/images/profile_4.png",
    username: "devraj",
    views: 204,
    visibility: "public",
    duration: 389,
  },
  {
    id: "5",
    title: "Customer Interview Highlights",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2026-03-02"),
    userImg: "/assets/images/profile_5.png",
    username: "nikita",
    views: 78,
    visibility: "unlisted",
    duration: 199,
  },
  {
    id: "6",
    title: "Feature Planning Session",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2026-02-14"),
    userImg: "/assets/images/profile_6.png",
    username: "shiv",
    views: 91,
    visibility: "public",
    duration: 276,
  },
  {
    id: "7",
    title: "Quick Tips: Keyboard Shortcuts",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2026-04-01"),
    userImg: "/assets/images/profile_7.png",
    username: "anjali",
    views: 56,
    visibility: "public",
    duration: 123,
  },
  {
    id: "8",
    title: "Product Demo for New Clients",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2026-03-28"),
    userImg: "/assets/images/profile_8.png",
    username: "raj",
    views: 180,
    visibility: "private",
    duration: 402,
  },
];
