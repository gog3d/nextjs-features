import { Point, Area } from "react-easy-crop/types";

export const createImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

export function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width: number, height: number, rotation: number) {
  const rotRad = getRadianAngle(rotation)

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  }
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export default async function getCroppedImgLogo(
  imageSrc: string,
  pixelCrop: Area,
  rotation = 0,
  flip = { horizontal: false, vertical: false },
  shape='rect',
  m = 4,
  aspect = 16 / 9,
  rounded = false

) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return null
  }

  const rotRad = getRadianAngle(rotation)

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  )

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth
  canvas.height = bBoxHeight
//  console.log({bBoxWidth, bBoxHeight})

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
  ctx.rotate(rotRad)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)

  // draw rotated image
  ctx.drawImage(image, 0, 0)

  const croppedCanvas = document.createElement('canvas')

  const croppedCtx = croppedCanvas.getContext('2d')

  if (!croppedCtx) {
    return null
  }

  // Set the size of the cropped canvas
//  croppedCanvas.width = pixelCrop.width
//  croppedCanvas.height = pixelCrop.height

//  const m = 4;

//  const aspect = 16 / 9;

//  const h1 = pixelCrop.height;
//  const w1 = pixelCrop.width;

  const h = 720;
  const m1 = pixelCrop.width / pixelCrop.height;

//  const h2 = m * h1;
  const h2 = h;
  const w2 = h2 * aspect;

  const h1 = h2 / m;
  const w1 = h1 * m1;


  const dx = (w2 - w1) / 2;
  const dy = (h2- h1) / 2;

  const dxC = w2 / 2;
  const dyC = h2 / 2;
  const radiusC = h1 / 2;

  croppedCanvas.width = w2;
  croppedCanvas.height = h2;

//  console.log({m, aspect, h1, w1, h2, w2, dx, dy});
  if (rounded) {
    //console.log('round');
    croppedCtx.fillStyle='blue';
    croppedCtx.beginPath();
    croppedCtx.arc(dxC, dyC, radiusC, 0, 2 * Math.PI);
    croppedCtx.fill();
    croppedCtx.fillStyle='blue';
    croppedCtx.globalCompositeOperation='source-in';
  }

  // Draw the cropped image onto the new canvas
  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    dx,
    dy,
    w1,
    h1
  )

 //croppedCtx.globalCompositeOperation = "destination-in";

  // As Base64 string
  // return croppedCanvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise<string | null>((resolve, reject) => {
    croppedCanvas.toBlob((file) => {
//    logoCoverCanvas.toBlob((file) => {
      resolve(URL.createObjectURL(file!))
    }, 'image/png')
  })
}
