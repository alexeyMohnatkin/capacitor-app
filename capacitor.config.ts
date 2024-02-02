import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "capacitor-app",
  webDir: "build",
  server: {
    cleartext: true,
  },
};

export default config;
