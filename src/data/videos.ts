/**
 * PROJECT VIDEOS — future-ready.
 *
 * No videos are published yet. Add verified entries to this array and the
 * Videos partition on /projects will populate automatically. Example shape:
 *
 * {
 *   id: "v1",
 *   title: "Kiln shell erection — Power Cement",
 *   description: "Heavy lift and shell section erection sequence.",
 *   url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
 *   embedUrl: "https://www.youtube.com/embed/XXXXXXXXXXX",
 *   thumbnail: "/path/to/thumbnail.jpg",
 *   duration: "2:14",
 * }
 */
export type ProjectVideo = {
  id: string;
  title: string;
  description?: string;
  /** Public watch/source URL. */
  url: string;
  /** Optional iframe embed URL (YouTube/Vimeo embed form). */
  embedUrl?: string;
  /** Optional thumbnail image (imported asset or public path). */
  thumbnail?: string;
  duration?: string;
};

export const projectVideos: ProjectVideo[] = [
  {
    id: "v1",
    title: "Teaser",
    description: "Teaser #1",
    url: "https://www.facebook.com/share/r/19bMVns5dF/",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4491605777773121%2F&show_text=false&width=267&t=0",
    thumbnail: "",
    duration: "1:00",
  }
];
