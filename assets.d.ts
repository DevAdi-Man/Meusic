declare module "*.mp3" {
  const src: number; // React Native treats imported assets as numbers
  export default src;
}
