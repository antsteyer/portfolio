import "vuetify/styles";
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#7FFFD4"
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: "#26946f"
        }
      }
    }
  }
});
