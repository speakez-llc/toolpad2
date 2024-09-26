import * as React from 'react';
import Typography from '@mui/material/Typography';
import HistoryEdu from '@mui/icons-material/HistoryEdu';
import { useSession } from 'next-auth/react';

export default function SignupPage() {
  const { data: session } = useSession();
  return (
    <Typography variant="h4" gutterBottom>
      <HistoryEdu style={{ margin: 8, verticalAlign: 'middle', fontSize: '3rem' }} />
      A front row seat to the future of knowledge work!
    </Typography>
  );
}

SignupPage.requireAuth = false;
