import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb://blogs:123456@47.115.175.90:27017/?authSource=blogs");

let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (global._mongoClientPromise) {
    clientPromise = global._mongoClientPromise;
  } else {
    global._mongoClientPromise = client.connect();
    clientPromise = global._mongoClientPromise;
  }
} else {
  clientPromise = client.connect();
}

export default clientPromise;
