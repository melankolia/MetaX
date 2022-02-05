import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#FFFFFF",
        secondary: "#121212",
        accent: "#ff9b33",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        material_black: "#121212",
        navbar_color: "#1B1B1B",
      },
    },
  },
});
