/* eslint-disable no-await-in-loop */
import { ref, getDownloadURL } from 'firebase/storage';
import { useUploadFile } from 'react-firebase-hooks/storage';

import { storage } from '@/utils/firebase';
import { keyGenerator } from '@/utils/functions';

/**
 * @returns [upload, uploading, error]
 */

const useUpload = () => {
  // eslint-disable-next-line no-unused-vars
  const [uploadFile, uploading, _, error] = useUploadFile();

  const upload = async (storagePath: string, files: File[]) => {
    if (files.length > 0) {
      const imgUrls: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const img = await uploadFile(
          ref(storage, `${storagePath}/${keyGenerator(i)}-${files[i].name}`),
          files[i]
        );

        const imgUrl = await getDownloadURL(ref(storage, img?.ref.fullPath));

        if (img?.ref.fullPath) imgUrls.push(imgUrl);
      }

      return imgUrls;
    }

    return [];
  };

  return [upload, uploading, error];
};

export default useUpload;
