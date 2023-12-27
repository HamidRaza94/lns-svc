import { v2 as cloudinary } from 'cloudinary';

export const uploadFile = async (file: any) => {
  try {
    const response = await cloudinary.uploader.upload(file, { folder: 'profile' });

    console.log('response =>', response);
    return response;
  } catch (err) {
    console.error('cloudinary :: uploadFile', err);
    throw {
      error: 'E201',
      message: 'Error while uploading an profile image',
      status: 500,
    };
  }
};
