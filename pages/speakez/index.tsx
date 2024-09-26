import * as React from 'react';
import Typography from '@mui/material/Typography';
import SettingsSuggestRounded from '@mui/icons-material/SettingsSuggestRounded';
import { useSession } from 'next-auth/react';

export default function SpeakEZPage() {
  const { data: session } = useSession();
  return (
    <Typography variant="h4" gutterBottom>
      <SettingsSuggestRounded style={{ margin: 8, verticalAlign: 'middle', fontSize: '3rem' }} />
      AI Refinery thinking and working ahead of the curve...
    </Typography>
  );
}

SpeakEZPage.requireAuth = false;