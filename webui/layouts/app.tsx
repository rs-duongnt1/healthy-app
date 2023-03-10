import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Stack from '@/components/Stack';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
    return <div>
        <Stack direction="column">
            <Header />
        </Stack>
        <Stack direction="column" mb={64}>
            <Outlet />
        </Stack>
        <Stack direction="column">
            <Footer />
        </Stack>
        <ScrollToTop />
    </div>
}