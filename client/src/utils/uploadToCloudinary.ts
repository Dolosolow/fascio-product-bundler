import axios from "axios";

export const uploadToCloudianry = async (url: string, preset: string, file: any) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", preset);

  try {
    const response = await axios({
      url,
      method: "POST",
      data: formData,
    });
    const imgUrl = response.data.secure_url as string;

    return imgUrl;
  } catch (err) {
    console.log("upload-error-response", err);

    return null;
  }
};

// data location: data.secure_url
