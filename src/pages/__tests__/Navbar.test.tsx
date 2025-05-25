// src/components/__tests__/Navbar.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '@/components/Navbar';

test('renders navbar links', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );

    expect(screen.getByText(/Store/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
});
