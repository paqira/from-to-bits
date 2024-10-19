import path from "path";

export default {
  mode: "production",
  entry: "./dist/from-to-bits.js",
  output: {
    path: path.resolve("dist"),
    filename: "from-to-bits.min.js",
    library: "from_to_bits",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /\.test\.ts$/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
