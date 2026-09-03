import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
export default defineConfig({plugins:[react()],server:{port:5173,proxy:{"/api":"http://localhost:3001"}},build:{rollupOptions:{output:{manualChunks:{vendor:["react","react-dom","zustand"]}}}},test:{environment:"jsdom",setupFiles:"./src/test/setup.ts",coverage:{provider:"v8",reporter:["text","json-summary"],include:["src/components/**","src/lib/**","src/store/**"],thresholds:{lines:90,functions:90,statements:90,branches:80}}}});
