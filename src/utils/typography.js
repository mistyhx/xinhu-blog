import Typography from "typography"
import "../components/layout.css"

const typography = new Typography({
  googleFonts: [
    {
      name: "Inconsolata",
      styles: ["300", "400", "500", "600", "700"],
    },
  ],
  baseFontSize: "18px",
  headerFontFamily: ["Helvetica", "sans-serif"],
  bodyFontFamily: ["Inconsolata", "monospace"],
  baseLineHeight: 1.8,
  overrideStyles: () => ({
    a: {
      color: "var(--textLink)",
      fontWeight: `bold`,
      textDecoration: `underline`,
    },
    p: {
      opacity: 0.78
    },

    pre: {
      borderRadius: `4px`,
      padding: `1rem`,
    },
  }),
})

export default typography
