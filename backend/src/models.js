import { model, Schema } from 'mongoose';
import providerMongoose from './schemas/mongoose/provider';

const Provider = model('Provider', new Schema(providerMongoose), 'providers');
export { Provider };