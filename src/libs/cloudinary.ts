import { v2 as cloudinary } from 'cloudinary';

export const uploadFile = async (file: any, folderName: string) => {
  try {
    return await cloudinary.uploader.upload(file, { folder: folderName });
  } catch (err) {
    console.error('cloudinary :: uploadFile', err);
    throw {
      error: 'E201',
      message: 'Error while uploading an profile image',
      status: 500,
    };
  }
};

export const deleteFile = async (publicId: string) => {
  try {
    return await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    console.error('cloudinary :: deleteFile', err);
    throw {
      error: 'E202',
      message: 'Error while deleting an profile image',
      status: 500,
    };
  }
};
