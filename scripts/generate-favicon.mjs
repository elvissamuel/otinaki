import sharp from "sharp";
import { join } from "path";

const root = process.cwd();
const source = join(root, "public", "logo.png");

const image = sharp(source);
const { width, height } = await image.metadata();
const cropSize = Math.min(width ?? 512, height ?? 512);

await image
  .clone()
  .extract({ left: 0, top: 0, width: cropSize, height: cropSize })
  .resize(32, 32)
  .png()
  .toFile(join(root, "app", "icon.png"));

await image
  .clone()
  .extract({ left: 0, top: 0, width: cropSize, height: cropSize })
  .resize(180, 180)
  .png()
  .toFile(join(root, "app", "apple-icon.png"));

console.log("Generated app/icon.png and app/apple-icon.png");
