import { render, screen } from '@testing-library/react';
import AddProductPage from '../AddProductPage';
import { BrowserRouter } from 'react-router-dom';

describe('AddProductPage', () => {
    it('renders the Add Product form', () => {
        render(
            <BrowserRouter>
                <AddProductPage />
            </BrowserRouter>
        );

        expect(screen.getByText('Add New Product')).toBeInTheDocument();
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Add Product/i })).toBeInTheDocument();
    });
});
