import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpac';
import { BuildMode, BuildPaths, BuildPlatform } from './config/build/types/types';
import path from 'path';

interface EnvVariables {
  mode: BuildMode;
  port: number;
  analyzer: boolean;
  platform: BuildPlatform;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: paths,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? 'desktop',
  });

  return config;
};
