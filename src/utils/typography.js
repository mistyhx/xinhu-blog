import Typography from "typography"
import "../components/layout.css"

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: ["Helvetica", "sans-serif"],
  bodyFontFamily: ["Helvetica", "sans-serif"],
  baseLineHeight: 1.8,
  overrideStyles: () => ({
    a: {
      color: "var(--textLink)",
      fontWeight: `bold`,
      textDecoration: `underline`,
    },
    p: {
      opacity: 0.78,
    },

    pre: {
      backgroundColor: "var(--codeBg)",
      borderRadius: `4px`,
      padding: `1rem`,
    },
  }),
})

export default typography
