import SlackNotify from 'slack-notify';

import env from '@saas/shared/lib/env';

export const slackNotify = () => {
  if (!env.slackWebhookUrl) {
    return;
  }

  return SlackNotify(env.slackWebhookUrl);
};
