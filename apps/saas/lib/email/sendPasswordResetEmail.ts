import { sendEmail } from './sendEmail';
import { render } from '@react-email/render';
import { ResetPasswordEmail } from '@/components/emailTemplates';
import app from '@saas/shared/lib/app';
import env from '@saas/shared/lib/env';
import { User } from '@saas/prisma';

export const sendPasswordResetEmail = async (user: User, token: string) => {
  const subject = `Reset your ${app.name} password`;
  const url = `${env.appUrl}/auth/reset-password/${token}`;

  const html = await render(
    ResetPasswordEmail({ url, subject, email: user.email })
  );

  await sendEmail({
    to: user.email,
    subject,
    html,
  });
};
