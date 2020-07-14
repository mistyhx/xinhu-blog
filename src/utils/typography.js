import Typography from "typography"
import "../components/layout.css"

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: ["Helvetica", "sans-serif"],
  bodyFontFamily: ["Helvetica", "sans-serif"],
  overrideStyles: () => ({
    a: {
      // color: "var(--textLink)",
      fontWeight: `bold`,
      textDecoration: `underline`,
    },
    p: {
      opacity: 0.78,
    },
  }),
})

export default typography
