import fs from "fs";
import formidable from "formidable";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing file:", err);
        return res.status(500).json({ message: "Failed to parse file data" });
      }

      const file = files.file;
      console.log(file);

      if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const filePath = file.filepath;
      const fileStream = fs.createReadStream(filePath);

      // Clean up the temporary file
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) {
          console.warn("Failed to delete temporary file:", unlinkErr);
        }
      });
      res.status(200).json({ message: "File uploaded successfully!" });
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

export const config = {
  matcher: "/api/:path*",
};
