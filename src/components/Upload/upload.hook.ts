import { useState } from "react";
import { MultiFiles } from "./UploadMulti";

const useUpload = () => {
  const [fileName, setFileName] = useState("");
  const [fileImage, setFileImage] = useState("");
  const [file, setFile] = useState<File>();
  const [fileDatas, setFileDatas] = useState<MultiFiles[]>([]);

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      setFile(file);
      setFileName(file.name);
      setFileImage(reader.result as string);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const updateMultiFileHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = e.target;

    if (!files) {
      return;
    }

    const fileList = Object.values(files);
    const maxSize = 10 * 1024 * 1024;

    if (fileList.find((item) => item.size > maxSize)) {
      alert("10MB 이하 이미지만 업로드 가능합니다.");
      return;
    }

    const includeImages = ["jpeg", "jpg", "png", "gif"];
    if (
      fileList.filter(
        (item) => !includeImages.includes(item.type.split("/")[1])
      ).length > 0
    ) {
      alert("jpeg, jpg, png, gif 확장자만 첨부가능합니다.");
      return;
    }

    const list = fileList.map((item, i) => {
      const reader = new FileReader();

      return new Promise((resolve) => {
        reader.onload = () =>
          resolve({
            id:
              fileDatas.length === 0
                ? i + 1
                : Math.max(...fileDatas.map((file) => file.id)) + i + 1,
            file: item,
            fileImage: reader.result,
          });
        reader.readAsDataURL(item);
      });
    });

    const resolveList = (await Promise.all(list)) as MultiFiles[];
    setFileDatas([...fileDatas, ...resolveList]);

    e.target.value = "";
  };

  const fileRemoveMulti = (id: number) => {
    setFileDatas(fileDatas.filter((file) => file.id !== id));
  };

  const fileRemoveHandler = () => {
    setFile(undefined);
    setFileName("");
    setFileImage("");
  };

  return {
    fileChangeHandler,
    fileRemoveHandler,
    updateMultiFileHandler,
    fileRemoveMulti,
    fileName,
    fileImage,
    file,
    fileDatas,
  };
};

export default useUpload;
