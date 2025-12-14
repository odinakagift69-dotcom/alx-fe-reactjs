import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Demo Todo 1')).toBeInTheDocument();
  expect(screen.getByText('Demo Todo 2')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add todo');
  const button = screen.getByText('Add');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});
test('toggles a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Demo Todo 1');
  fireEvent.click(todo);
  expect(todo).toHaveClass('completed'); // Assuming you toggle a "completed" class
});
test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Demo Todo 1')).not.toBeInTheDocument();
});
