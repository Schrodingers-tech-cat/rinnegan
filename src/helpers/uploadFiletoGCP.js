const { Storage } = require("@google-cloud/storage");

const uploadToGCPBucket = async () => {
  try {
    const storage = new Storage({
      projectId: "projectname",
      keyFilename: "service-account.json",
    });
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};
