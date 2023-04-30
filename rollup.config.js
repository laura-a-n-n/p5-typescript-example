import ts from "rollup-plugin-ts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import inject from "@rollup/plugin-inject";
export default [
    {
        input: "src/sketch.ts",
        output: {
            file: "public/sketch.js",
            format: "iife"
        },
        plugins: [
            ts(),
            resolve({ browser: true, preferBuiltins: true }),
            commonjs({ sourceMap: false }),
            inject({
              p5: "p5"
            })
        ],
    }
];
