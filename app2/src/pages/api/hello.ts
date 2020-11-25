import { Logger } from '@/shared/infra/logger';

const logger = new Logger();

export default function handler(req, res) {
  res.statusCode = 200
  logger.getLogger().info('Test log from shared code');
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
}