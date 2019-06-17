import { connect } from 'mongoose';

export default function(url) {
  const { DATABASE_URL } = process.env;
  return connect(url, { useNewUrlParser: true });
}