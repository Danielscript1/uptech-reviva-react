export const getPublicImageUrl = (basePath:string,name:string)=>{
  return `${process.env.PUBLIC_URL}/img/${basePath}/${name}`;
}

