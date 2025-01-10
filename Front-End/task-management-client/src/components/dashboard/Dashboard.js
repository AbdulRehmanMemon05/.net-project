import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getDashboardStats } from '../../services/api';

function Dashboard() {
  const [stats, setStats] = useState({
    pending: 0,
    inProgress: 0,
    completed: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: 'warning.light',
            }}
          >
            <PendingIcon sx={{ fontSize: 40, color: 'warning.dark' }} />
            <Typography component="h2" variant="h6" color="warning.dark" gutterBottom>
              Pending Tasks
            </Typography>
            <Typography component="p" variant="h4">
              {stats.pending}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: 'info.light',
            }}
          >
            <TaskIcon sx={{ fontSize: 40, color: 'info.dark' }} />
            <Typography component="h2" variant="h6" color="info.dark" gutterBottom>
              In Progress
            </Typography>
            <Typography component="p" variant="h4">
              {stats.inProgress}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: 'success.light',
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 40, color: 'success.dark' }} />
            <Typography component="h2" variant="h6" color="success.dark" gutterBottom>
              Completed Tasks
            </Typography>
            <Typography component="p" variant="h4">
              {stats.completed}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;