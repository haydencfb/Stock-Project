import Charts from './charts'; // Adjust the path as necessary
import { Card, CardContent, Grid2 } from '@mui/material';

const DashboardPage = () => {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, md: 6 }} >
                <Card>
                    <CardContent>
                        <Charts />
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} >

                <Card>
                    <CardContent>
                        <Charts />
                    </CardContent>
                </Card>
            </Grid2>
        </Grid2>
    );
};

export default DashboardPage;