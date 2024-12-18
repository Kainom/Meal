"use client";
import { MutableRefObject, useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  label?: any;
  name?: string;
};

const ImagePicker: React.FC<Props> = ({
  label,
  name = "image",
}): JSX.Element => {
  const [picked, setPickedImage] = useState<
    ArrayBuffer | null | string | StaticImport
  >();
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handlePickClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      const reader: FileReader = new FileReader();
      reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
        setPickedImage(loadEvent.target?.result as string);
        // setPickedImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    setPickedImage(null);
  };

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!picked && <p>No image picked yet.</p>}
            {picked && (
              <div className={classes.preview}>
                <Image src={picked as string} alt="picked image" fill />
              </div>
            )}
          </div>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png,image/jpeg"
            name={name}
            ref={imageInputRef}
            onChange={handleImageChange}
          />
          <button
            className={`${classes.button} mt-4`}
            type="button"
            onClick={handlePickClick}
          >
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
};

export default ImagePicker;
