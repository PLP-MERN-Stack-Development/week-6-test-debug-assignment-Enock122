import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';

test('submits bug report when form is filled', () => {
  const mockSubmit = jest.fn();
  render(<BugForm onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByPlaceholderText('Bug title'), { target: { value: 'Sample Bug' } });
  fireEvent.change(screen.getByPlaceholderText('Bug description'), { target: { value: 'Something went wrong' } });
  fireEvent.click(screen.getByText('Report Bug'));

  expect(mockSubmit).toHaveBeenCalledWith({
    title: 'Sample Bug',
    description: 'Something went wrong',
    status: 'open'
  });
});
