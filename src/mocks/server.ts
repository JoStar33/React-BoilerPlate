import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

const worker = setupWorker(...handlers);
const server = setupServer(...handlers);

export { server, worker };
