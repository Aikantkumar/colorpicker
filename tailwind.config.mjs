export default {
  content: {
    folder: "./src",
    files: ["**/*.astro", "**/*.html", "**/*.md", "**/*.js", "**/*.ts"]
  },
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        onprimary: "#ffffff",
        ink: "#171717",
        body: "#4d4d4d",
        mute: "#8f8f8f",
        faint: "#a1a1a1",
        hairline: "#ebebeb",
        hairlineSoft: "#f2f2f2",
        canvas: "#fafafa",
        canvasElevated: "#ffffff",
        link: "#0070f3",
        linkDeep: "#0761d1",
        linkSoft: "#d3e5ff",
        error: "#ee0000",
        errorDeep: "#c50000",
        warning: "#f5a623",
        warningSoft: "#ffefcf",
        warningDeep: "#ab570a",
        violet: "#7928ca",
        violetSoft: "#d8ccf1",
        cyan: "#50e3c2",
        cyanSoft: "#aaffec",
        pink: "#ff0080",
        magenta: "#eb367f",
        gradientDevelopStart: "#007cf0",
        gradientDevelopEnd: "#00dfd8",
        gradientPreviewStart: "#7928ca",
        gradientPreviewEnd: "#ff0080",
        gradientShipStart: "#ff4d4d",
        gradientShipEnd: "#f9cb28",
      },
      fontFamily: {
        geist: ["Geist", "Arial", "sans-serif"],
        "geist-mono": ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        cursive: ["cursive"]
      }
    }
  },
  plugins: []
};
