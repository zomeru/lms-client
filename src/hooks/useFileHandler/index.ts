/* eslint-disable */
import { ChangeEventHandler, useState } from 'react';
import { useCompressImage } from '../useCompressImage';

const useFileHandler = () => {
  const [multiplePics, setMultiplePics] = useState<File[]>([]);

  const multipleFileHandler: ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const files = e.target.files;
    const accepted: File[] = [];

    if (files) {
      for (let i = 0; i < files?.length; i++) {
        const file = files[i];

        if (file.size > 300000) {
          if (file.type.startsWith('image/')) {
            const compressed = await useCompressImage(file);
            accepted.push(compressed);
          }
        } else accepted.push(file);
      }
    }

    setMultiplePics(accepted);
  };

  return [multipleFileHandler, multiplePics] as const;
};

export default useFileHandler;
