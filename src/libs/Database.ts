import { connect, disconnect } from 'mongoose';

class Database {
  public static async open(mongoURI: string) {
    return new Promise((resolve, reject) => {
      connect(
        mongoURI,
        { useNewUrlParser: true }
      )
        .then(() => {
          console.log('Successfully Connected to MongoDB', mongoURI);
          return resolve('Successfully Connected to MongoDB');
        })
        .catch((err: Error) => {
          console.log("MONGO_URI =====", mongoURI);
          console.log('Error:', err.message);
        });
    });
  }

  public static close() {
    disconnect();
  }
}

export default Database;
