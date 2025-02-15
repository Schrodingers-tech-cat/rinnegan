const { MongoClient } = require("mongodb");
require("dotenv").config();

const fetchNetworkDump = async ({ vertical }) => {
  let client;

  try {
    const mongoUri = process.env.FIREBOLT_MONGO_URI;

    client = new MongoClient(mongoUri);

    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("firebolt");
    const entityCollection = database.collection("entity");

    const query = {
      sub_type: "pincode",
      [`vertical.${vertical}`]: { $exists: true },
      [`vertical.${vertical}.stores`]: { $exists: true },
    };

    const entityEntries = await entityCollection.find(query).toArray();

    const records = [];
    entityEntries.forEach((entity) => {
      const pincode = entity.name;
      const region = entity.vertical?.[vertical]?.region;
      const storeList = entity.vertical?.[vertical]?.stores || [];

      storeList.forEach((store, index) => {
        try {
          const cleanStore = store.replace("store|", "");
          records.push({
            pincode: pincode,
            position: index + 1,
            store: cleanStore,
            region: region || "N/A",
          });
        } catch (innerError) {
          console.error(
            `Error processing store for pincode ${pincode}:`,
            innerError
          );
          records.push({
            pincode: pincode,
            position: index + 1,
            store: store.replace("store|", ""),
            region: "ERROR",
          });
        }
      });
    });

    return records;
  } catch (error) {
    console.error("Error in network dump generation:", error);
  } finally {
    if (client) {
      await client.close();
      console.log("MongoDB connection closed");
    }
  }
};

// generateNetworkDump()
//   .then(() => console.log("Network dump process completed"))
//   .catch((error) => console.error("Unhandled error:", error));

module.exports = fetchNetworkDump;
