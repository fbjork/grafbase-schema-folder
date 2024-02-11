import { graph, config } from "@grafbase/sdk";

export default config({
  graph: graph.Standalone(),
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
});
