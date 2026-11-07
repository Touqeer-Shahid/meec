import { describe, expect, it } from "vitest";
import { facebookVideos, isSafeFacebookVideo } from "./FacebookVideos";

describe("MEEC supplied Facebook sources", () => {
  it("includes exactly the 19 supplied reel IDs in order", () => {
    expect(facebookVideos.map((video) => video.id)).toEqual([
      "4491605777773121", "1424149583172169", "3304772833246233",
      "2513097235825346", "1135571998824655", "1094079396596501",
      "2241329606797791", "2900759676966909", "2987123298303133",
      "2116093112325805", "1434947082041234", "1595842665651104",
      "1421016896132664", "1108396745014810", "1620767526363425",
      "1457150909608044", "1815850299422906", "1401894205421947",
      "1100646719180222",
    ]);
  });

  it("retains all original share references exactly", () => {
    expect(facebookVideos.map((video) => video.url)).toEqual([
      "https://www.facebook.com/share/r/19fJdktUz5/",
      "https://www.facebook.com/share/r/18V3Uefm1k/",
      "https://www.facebook.com/share/v/1BjUSSWRS3/",
      "https://www.facebook.com/share/r/14v1WTi6pyA/",
      "https://www.facebook.com/share/v/1ck7zoRWhD/",
      "https://www.facebook.com/share/r/1EYXyiVg5H/",
      "https://www.facebook.com/share/r/17ecuzv5aC/",
      "https://www.facebook.com/share/r/1L6ynTBJGY/",
      "https://www.facebook.com/share/r/1GVNdcDFed/",
      "https://www.facebook.com/share/v/1HJRRW9Fst/",
      "https://www.facebook.com/share/r/1EC9Nk82k3/",
      "https://www.facebook.com/share/v/14w6M8uXFmN/",
      "https://www.facebook.com/share/r/1J2Ck3Qr8h/",
      "https://www.facebook.com/share/r/1JBdVdR2BZ/",
      "https://www.facebook.com/share/r/19krFns9UU/",
      "https://www.facebook.com/share/r/1FLE2AZgvg/",
      "https://www.facebook.com/share/v/1JBCfWQvwb/",
      "https://www.facebook.com/share/r/1MFfLKufCk/",
      "https://www.facebook.com/share/r/1CXxdFkjQ1/",
    ]);
  });

  it("accepts all supplied Facebook embed targets", () => {
    expect(facebookVideos.every(isSafeFacebookVideo)).toBe(true);
  });

  it("rejects an iframe outside Facebook's official video plugin", () => {
    expect(isSafeFacebookVideo({ ...facebookVideos[0], embedUrl: "https://www.facebook.com.attacker.example/plugins/video.php" })).toBe(false);
  });

  it("rejects a plugin embedding a different source", () => {
    const embed = new URL(facebookVideos[0].embedUrl);
    embed.searchParams.set("href", "https://attacker.example/reel/4491605777773121/");
    expect(isSafeFacebookVideo({ ...facebookVideos[0], embedUrl: embed.href })).toBe(false);
  });

  it("rejects an unsafe original-post link", () => {
    expect(isSafeFacebookVideo({ ...facebookVideos[0], url: "javascript:alert(1)" })).toBe(false);
  });

  it("rejects a mismatched reel ID", () => {
    expect(isSafeFacebookVideo({ ...facebookVideos[0], id: "1424149583172169" })).toBe(false);
  });
});